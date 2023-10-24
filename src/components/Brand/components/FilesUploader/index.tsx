import React, {
  useState,
  useEffect,
  useCallback,
  useRef,
  ChangeEvent,
} from 'react';

import imageMaxResolution from '@/components/Brand/components/FilesUploader/helpers/image-max-resolution.ts';
import fileMaxSize from '@/components/Brand/components/FilesUploader/helpers/file-max-size.ts';
import { useFilesFormField } from '@/components/Brand/components/FilesUploader/helpers/useFilesFormField.ts';
import { UploaderContext, useFilesUploader } from "@/components/Brand/components/FilesUploader/helpers/useFilesUploader.ts";
import { UploaderProps } from "@/components/Brand/components/FilesUploader/helpers/status.ts";
import { uid } from "react-uid";
import useTypedDispatch from "@/hooks/useTypedDispatch.ts";
import { setBrandSettingsByField } from "@/redux/features/brandSetting/slice.ts";

import { INPUT_WHITELIST } from "@/components/Brand/components/FilesUploader/helpers/constants.ts";

const validators = [fileMaxSize(), imageMaxResolution()];

export const FilesUploader = (props: UploaderProps) => {
  const {
    onUploadStart,
    onUploadEnd,
    onFileUploadEnd,
    onFilesSelected,
    onFilesCleared,
    className,
    children,
    name,
  } = props;
  const [isUpLoading, setUpLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const dispatch = useTypedDispatch();

  const selectedFiles = useFilesFormField('files', validators);

  // ??? сохраняем ссылки на функции, чтобы не тригерить useEffect, так как
  // ссылка на selectedFiles будет изменятся между ре-рендерами,
  // но внутренние ссылки на объекты будут стабильны
  const { clear: clearSelectedFiles } =
    selectedFiles;

  const resetUploader = useCallback(() => {
    setUpLoading(false);
    clearSelectedFiles();

    onFilesCleared?.();
  }, [clearSelectedFiles, onFilesCleared]);

  useEffect(() => {
    const uploadMediaFiles = async () => {

      if (selectedFiles.value.length === 0) {
        return;
      }

      selectedFiles.value
        .filter((item, index) => !selectedFiles.error[index])
        .map(async (file) => {
          const options = { source: file };
          // set image field too 

          const newData = {[name]: options.source};
          dispatch(setBrandSettingsByField({ field: 'images', newData }));
        })
    };

    uploadMediaFiles();
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

  return (
    <UploaderContext.Provider
      value={{
        isUpLoading,
        fileInputRef,
        selectedFiles,
        handleFilesChange,
      }}
    >
      <div className={className}>{children && React.cloneElement(children, { id: name })}</div>
    </UploaderContext.Provider>
  );
};

FilesUploader.Input = function Input({ label = '+ Загрузить', ...props }) {
  const { fileInputRef, handleFilesChange } = useFilesUploader();
  const {id} = props;
  return (
    <div id={uid(id)}>
      <input
        ref={fileInputRef}
        type='file'
        onChange={handleFilesChange}
        id={`file-uploader-input-button-${id}`}
        accept={INPUT_WHITELIST}
      />
      <label
        htmlFor={`file-uploader-input-button-${id}`}
      >
        {label}
      </label>
    </div>
  );
};
