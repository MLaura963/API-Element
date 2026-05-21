import { findAllElements } from "../repositories/elements-repository";
import { noContent, ok } from "../utils/http-helper";


export const getElementService = async () => {
        const data =  await findAllElements();
        let response = null
        if(data){
           response = await ok(data);
        } else{
            response = await noContent();
        }


    return response;
};