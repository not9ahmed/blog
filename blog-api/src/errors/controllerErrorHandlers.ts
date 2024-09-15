import { Prisma } from "@prisma/client";


interface ErrorMessage {
    code: number;
    message: string;
}

interface IErrorHandler {
    idNotFound(err: unknown): ErrorMessage;
}

export class ErrorHandler implements IErrorHandler{
    idNotFound(err: unknown): ErrorMessage {

        let  errorMsg : string = 'error encountered';

        // get prisma error inside
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            // The .code property can be accessed in a type-safe manner
            if (err.code === 'P2002') {
                errorMsg = 'There is a unique constraint violation, a new skill type cannot be created with this email'
            }
        }

        const errorResponse: ErrorMessage = {
            code: 404,
            message: errorMsg
        }

        return errorResponse;

    }


}