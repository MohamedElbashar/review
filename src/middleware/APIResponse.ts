import { Request, Response } from 'express';
export const APIResponse = (result: any, req: Request, res: Response, next: Function) => {
    if (result) {
        if (result.status) {
            if (result.send) {
                successResponse(result, res);
            } else if (result.path) {
                sendFile(result, res);
            } else {
                errorResponse(result, res);
            }
        } else {
            //unhandled Exception occured
            let error;
            if (result.error) {
                error = result.error;
            } else {
                error = result;
            }
            if(!['LOCAL', 'DEV', 'SIT'].includes(process.env.ENV)) {
                console.error(error.stack);
                res.status(500).send('oops!! something went wrong, please contact the administrator');
            } 
            else if(error?.response?.statusCode && error?.response?.body){
                res.status(error.response.statusCode).send(error.response.body);
            }
            else
                res.status(500).send(error.stack);
            next();
        }
    }
};

const errorResponse = function (error, res) {
    if (error.status) {
        error.message = error.error && error.error.message ? error.error.message : error.error;
        delete error['error'];
        res.status(error.status).send(error.message);
    } else {
        res.status(500).send(error);
    }
};

const sendFile = function (result, res) {
    res.sendFile(result.path);
};

const successResponse = function (result, res) {
    if (result.status) {
        res.status(result.status).send(result.send);
    } else {
        res.status(200).send(result.send);
    }
};
