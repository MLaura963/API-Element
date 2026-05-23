import { findAllElements, findElementById } from "../repositories/elements-repository";
import * as HttpResponse from "../utils/http-helper";


export const getElementService = async () => {
        const data =  await findAllElements();
        let response = null
        if(data){
           response = await HttpResponse.ok(data);
        } else{
            response = await HttpResponse.noContent();
        }


    return response;
};

export const getelementsByIdService = async(id: number) => {
    const data = await findElementById(id);
    let response = null;


    if(data){
        response = HttpResponse.ok(data);
    }else{
        response = HttpResponse.noContent;
    }

    return response;

};