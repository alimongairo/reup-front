// TODO: разнести на файлы хорошо бы, чтобы повысить читаемость кода

import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  useContext,
} from 'react';
import type { ChangeEvent } from 'react';

import imageMaxResolution  from './logic/image-max-resolution.ts';
import fileMaxSize from './logic/file-max-size.ts';
import type { ValidationResult } from "./logic";

import { useFilesFormField, FilesField } from './logic/useFilesFormField.ts';

// TODO: отправляем только, когда файл загружен, тк он мб тяжелым и загружаться дольше 
// и при отправке файла еще не будет или он будет повержден
import { MediaFilesResponse } from "./logic/status.ts";
import { uid } from "react-uid";
import useTypedDispatch from "../../../../hooks/useTypedDispatch.ts";
import { MenuContext } from "../Menu/helpers.tsx";

// const UploaderContext = React.createContext<
//   | {
//       isUpLoading: boolean;
//       fileInputRef: React.RefObject<HTMLInputElement>;
//       selectedFiles: FilesField; // тип FilesField объявлен в хуке 'useFilesFormField'
//       handleFilesDrop: (droppedFiles: File[]) => void;
//       handleFilesChange: (event: ChangeEvent<HTMLInputElement>) => void;
//     }
//   | undefined
// >(undefined);

const useFilesUploader = () => {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error(
      'This component must be used within a <FileUploader> component.'
    );
  }

  return context;
};

const STATUS = {
  initial: 'initial',
  pending: 'pending',
  uploaded: 'uploaded',
  error: 'error',
} as const;

const fileFormats = "image/gif, image/jpeg, image/png, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,application/vnd.ms-excel";

type UploadEntry = {
  name: string;
  status: keyof typeof STATUS;
  error: string | null;
  uploaded?: MediaFilesResponse['data'][number];
};

type UploadResult = {
  status: 'fulfilled' | 'rejected';
  value?: {
    status: UploadEntry['status'];
    uploaded?: UploadEntry['uploaded'];
    error?: UploadEntry['error'];
  };
  reason?: any;
};

const validators = [fileMaxSize(), imageMaxResolution()];

const formatToUploadEntries = (
  files: File[],
  errors: ValidationResult[]
): UploadEntry[] =>
  files.map((file, index) => ({
    name: file.name,
    status: errors[index] ? STATUS.error : STATUS.pending,
    item: undefined,
    error: errors[index],
  }));

type UploaderProps = {
  onFilesSelected?: () => void;
  onFilesCleared?: () => void;
  onUploadStart?: (uploadEntries: UploadEntry[]) => void;
  onUploadEnd?: (uploadResult: UploadResult[]) => void;
  onFileUploadEnd?: (file: File, obj: Partial<UploadEntry>) => void;
  children?: React.ReactNode;
  className?: string;
};

export const FilesUploader = (props: UploaderProps) => {
  const {
    onUploadStart,
    onUploadEnd,
    onFileUploadEnd,
    onFilesSelected,
    onFilesCleared,
    className, 
    children,
  } = props;

  const [isUpLoading, setUpLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const selectedFiles = useFilesFormField('files', validators);

  // сохраняем ссылки на функции, чтобы не тригерить useEffect, так как
  // ссылка на selectedFiles будет изменятся между ре-рендерами,
  // но внутренние ссылки на объекты будут стабильны
  const { clear: clearSelectedFiles, handleChange: handleSelectedFilesChange } =
    selectedFiles;

  const resetUploader = useCallback(() => {
    setUpLoading(false);
    clearSelectedFiles();

    onFilesCleared?.();
  }, [clearSelectedFiles, onFilesCleared]);

  const handleFilesDrop = useCallback(
    (droppedFiles: File[]) => {
      onFilesSelected?.();
      handleSelectedFilesChange(droppedFiles);
    },
    [onFilesSelected, handleSelectedFilesChange]
  );

  const dispatch = useTypedDispatch();

  //
  useEffect(() => {
    // const uploadMediaFiles = async () => {
    //   if (selectedFiles.value.length === 0) {
    //     return;
    //   }

    //   setUpLoading(true);

    //   onUploadStart?.(
    //     formatToUploadEntries(selectedFiles.value, selectedFiles.error)
    //   );

    //   const allPromises = selectedFiles.value
    //     .filter((item, index) => !selectedFiles.error[index])
    //     .map(async (file) => {
    //       const options = { source: file };

    //       const uploadPromise = api.post.mediaFile(options);
    //       let uploadResult: Partial<UploadEntry> = {};

    //       try {
    //         const uploaded = await uploadPromise;
    //         uploadResult = {
    //           status: STATUS.uploaded,
    //           uploaded,
    //         };
    //       } catch (err) {
    //         const msg =
    //           err instanceof Error
    //             ? err.message
    //             : 'Unknown Error: api.post.mediaFiles';
    //         uploadResult = {
    //           status: STATUS.error,
    //           error: msg,
    //         };
    //       } finally {
    //         onFileUploadEnd?.(file, uploadResult);
    //       }

    //       return uploadPromise;
    //     });

    //   const uploadingResult = await Promise.allSettled(allPromises);
    //   onUploadEnd?.(uploadingResult);

    //   resetUploader();
    // };

    // uploadMediaFiles();

    // TODO: dospatch new img data (create obj)
    console.log(selectedFiles)
  }, [
    selectedFiles.value,
    selectedFiles.error,
    clearSelectedFiles,
    resetUploader,
    onFileUploadEnd,
    onUploadStart,
    onUploadEnd,
  ]);

  const handleFilesChange = (event: ChangeEvent<HTMLInputElement>) => {
    const files: File[] = event.target.files
      ? Array.from(event.target.files)
      : [];
    selectedFiles.handleChange(files);
    onFilesSelected?.();

    // сбрасываем input value, для того, чтобы не блокировать
    // повторный выбор (и загрузку) файлов с одинаковыми именами
    fileInputRef.current && (fileInputRef.current.value = '');
  };


  // TODO: контекст у нас на более верхнем уровне - как-то туда перенести логику загрузки изображений
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! а мейби нам тут нужен контекст только чтобы отслеживтаь загрузку и досточно только того
  // , что мы загрузке будем диспатчить в стоп под ключ картинки, а при сохранении тупа отправлять весь объект из стора
  return (
    // <MenuContext.Provider
    //   value={{
    //     isUpLoading,
    //     fileInputRef,
    //     selectedFiles,
    //     handleFilesDrop,
    //     handleFilesChange,
    //   }}
    // >
      <div className={className}>{children}</div>
    // </MenuContext.Provider>
  );
};

FilesUploader.Input = function Input({ label = '+ Загрузить', ...props }) {
  const { fileInputRef, handleFilesChange } = useFilesUploader();

  return (
    <div id={uid(1)}>
      <input
        ref={fileInputRef}
        type='file'
        multiple
        onChange={handleFilesChange}
        id='file-uploader-input-button'
        accept={fileFormats}
      />
      <label
        htmlFor='file-uploader-input-button'
      >
        {label}
      </label>
    </div>
  );
};
