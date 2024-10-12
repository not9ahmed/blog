import { Prisma } from "@prisma/client";

// TODO: Error Handler for all controller 
export const errorHandler = (err: unknown) => {

    console.log(err);

    let errorMsg = "";

    let response = { 
        message: "Error Occured",
        error: ""
    };

    // Check prisma errors
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
        // The .code property can be accessed in a type-safe manner
        // access code type
        switch(err.code) {
            case 'P2025':
                errorMsg = "Not Found";
                break;
            case 'P2020':
                errorMsg = "Not Found";
                break;

            //TODO: Add other code
            default:
                errorMsg = 'DB Client Error';
        }
    } else {
        errorMsg = 'Internal Server Error'
    }
        response["error"] = errorMsg;

        return response;

}