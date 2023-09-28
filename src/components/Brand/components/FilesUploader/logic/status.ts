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

type UploadResult = {
    status: 'fulfilled' | 'rejected';
    value?: {
        status: UploadEntry['status'];
        uploaded?: UploadEntry['uploaded'];
        error?: UploadEntry['error'];
    };
    reason?: any;
};
