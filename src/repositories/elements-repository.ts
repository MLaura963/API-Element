import { ElementModel } from "../models/element-model";


const dataBase: ElementModel[]= [
    {atomicNumber: 1,
    name: "hidrogênio"},

    {atomicNumber:2,
    name: "Hélio"}
];

export const findAllElements = async(): Promise<ElementModel[]> => {
    return dataBase;
};

export const findElementByAtomicNumber = async(atomicNumber:number): Promise<ElementModel | undefined> => {
    return dataBase.find(element => element.atomicNumber === atomicNumber);
};