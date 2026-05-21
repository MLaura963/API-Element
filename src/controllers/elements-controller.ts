import { Request, Response } from "express";
import { getElementService } from "../services/elements-service";
import { ok } from "../utils/http-helper";


export const getElement = async (req: Request, res: Response)=> {

    const httpResponse = await getElementService();

    res.status( httpResponse.statusCode).json(httpResponse.body);
};