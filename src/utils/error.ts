import { Request, Response } from 'express';
export class ErrorCustom extends Error {
    public readonly message: string;
    public readonly statusCode: number;
    constructor(statusCode: number, message: string) {
        super();
        this.statusCode = statusCode;
        this.message = message;
    }
    static BadRequest = (mess: string) => {
        return new ErrorCustom(400, mess);
    };
    static UnAuthorized = (mess: string) => {
        return new ErrorCustom(401, mess);
    };
}

export const handleError = (err: ErrorCustom, req: Request, res: Response, next: Function) => {
    if (err instanceof ErrorCustom) {
        return res.status(err.statusCode).json({ message: err.message });
    }
    return res.status(500).json({ message: 'Something wrong' });
};
