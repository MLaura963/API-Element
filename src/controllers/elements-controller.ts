import { Request, Response } from "express";
import { getelementsByIdService, getElementService } from "../services/elements-service";
import { ok } from "../utils/http-helper";


export const getElement = async (req: Request, res: Response)=> {

    const httpResponse = await getElementService();

    res.status( httpResponse.statusCode).json(httpResponse.body);
};

export const getElementsById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string);
    const httpResponse = await getelementsByIdService(id);
};