const STATUS = {
    initial: 'initial',
    pending: 'pending',
    uploaded: 'uploaded',
    error: 'error',
} as const;

type MediaFilesResponse = {
    data: {
        datetimeUpdated: string;
        datetimeUpload: string;
        filename: string;
        files: {
            original: {
                filepath: string;
                height: number;
                width: number;
                mimeType: string;
                resourceType: string;
            };
        };
        metadata: { width: number; height: number };
        id: string;
        namespace: string;
        originalBasename: string;
        originalFilesize: number;
    }[];
    count: number;
};

type UploadEntry = {
    name: string;
    status: keyof typeof STATUS;
    error: string | null;
    uploaded?: MediaFilesResponse['data'][number];
};

// описывает результат Promise.allSettled
type UploadResult = {
    status: 'fulfilled' | 'rejected';
    value?: {
        status: UploadEntry['status'];
        uploaded?: UploadEntry['uploaded'];
        error?: UploadEntry['error'];
    };
    reason?: any;
};

type UploaderProps = {
    /* срабатывает в момент выбора файлов */
    onFilesSelected?: () => void;
    /* срабатывает в момент сброса файлов */
    onFilesCleared?: () => void;
    /* срабатывает, когда стартует процесс загрузки всех файлов */
    onUploadStart?: (uploadEntries: UploadEntry[]) => void;
    /* срабатывает, когда процесс загрузки всех файлов завершён */
    onUploadEnd?: (uploadResult: UploadResult[]) => void;
    /* срабатывает, когда процесс загрузки одного файла завершён */
    onFileUploadEnd?: (file: File, obj: Partial<UploadEntry>) => void;
    children?: React.ReactNode;
};

export {STATUS};
export type {MediaFilesResponse, UploadEntry, UploadResult, UploaderProps}
