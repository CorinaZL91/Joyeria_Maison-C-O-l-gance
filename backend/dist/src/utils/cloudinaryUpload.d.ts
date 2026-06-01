interface UploadResult {
    secure_url: string;
    public_id: string;
}
export declare const uploadBufferToCloudinary: (fileBuffer: Buffer, folder?: string) => Promise<UploadResult>;
export {};
//# sourceMappingURL=cloudinaryUpload.d.ts.map