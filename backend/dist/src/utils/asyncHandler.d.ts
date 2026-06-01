import type { NextFunction, Request, Response, RequestHandler } from "express";
export declare const asyncHandler: (fn: (req: Request, res: Response, next: NextFunction) => Promise<void>) => RequestHandler;
//# sourceMappingURL=asyncHandler.d.ts.map