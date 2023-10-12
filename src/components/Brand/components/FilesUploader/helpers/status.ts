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
    onFilesSelected?: () => void;
    onFilesCleared?: () => void;
    onUploadStart?: (uploadEntries: UploadEntry[]) => void;
    onUploadEnd?: (uploadResult: UploadResult[]) => void;
    onFileUploadEnd?: (file: File, obj: Partial<UploadEntry>) => void;
    children?: JSX.Element;
    className?: string;
    name: string;
};

// const formatToUploadEntries = (
//     files: File[],
//     errors: ValidationResult[]
// ): UploadEntry[] =>
//     files.map((file, index) => ({
//         name: file.name,
//         status: errors[index] ? STATUS.error : STATUS.pending,
//         item: undefined,
//         error: errors[index],
//     }));

export { STATUS };
export type { MediaFilesResponse, UploadEntry, UploadResult, UploaderProps }
