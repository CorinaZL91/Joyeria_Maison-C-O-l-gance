export type ParsedTallaInput = {
    talla: string;
    stock: number;
    activo?: boolean;
};
export declare const parseOptionalBoolean: (value: unknown) => boolean | undefined;
export declare const parseOptionalNumber: (value: unknown) => number | undefined;
export declare const normalizeTallaText: (value: unknown) => string;
export declare const parseTallasInput: (value: unknown) => ParsedTallaInput[] | undefined;
export declare const sumActiveTallasStock: (tallas: ParsedTallaInput[]) => number;
//# sourceMappingURL=productInput.util.d.ts.map