import { ElementModel } from "../models/element-model";


const dataBase: ElementModel[]= [

  {
    "atomicNumber": 2,
    "name": "Helium",
    "symbol": "He",
    "atomicMass": 4.0026,
    "category": "Noble Gas",
    "group": 18,
    "period": 1,
    "phaseAtRoomTemp": "Gas",
    "electronConfiguration": "1s2",
    "uses": ["Cryogenics", "Balloons", "MRI cooling"],
    "radioactive": false
  },
  {
    "atomicNumber": 3,
    "name": "Lithium",
    "symbol": "Li",
    "atomicMass": 6.94,
    "category": "Alkali Metal",
    "group": 1,
    "period": 2,
    "phaseAtRoomTemp": "Solid",
    "electronConfiguration": "[He] 2s1",
    "uses": ["Rechargeable batteries", "Ceramics", "Glass production"],
    "radioactive": false
  },
  {
    "atomicNumber": 4,
    "name": "Beryllium",
    "symbol": "Be",
    "atomicMass": 9.0122,
    "category": "Alkaline Earth Metal",
    "group": 2,
    "period": 2,
    "phaseAtRoomTemp": "Solid",
    "electronConfiguration": "[He] 2s2",
    "uses": ["Aerospace materials", "X-ray windows"],
    "radioactive": false
  },
  {
    "atomicNumber": 5,
    "name": "Boron",
    "symbol": "B",
    "atomicMass": 10.81,
    "category": "Metalloid",
    "group": 13,
    "period": 2,
    "phaseAtRoomTemp": "Solid",
    "electronConfiguration": "[He] 2s2 2p1",
    "uses": ["Glass manufacturing", "Detergents", "Semiconductors"],
    "radioactive": false
  },
  {
    "atomicNumber": 6,
    "name": "Carbon",
    "symbol": "C",
    "atomicMass": 12.011,
    "category": "Nonmetal",
    "group": 14,
    "period": 2,
    "phaseAtRoomTemp": "Solid",
    "electronConfiguration": "[He] 2s2 2p2",
    "uses": ["Steel production", "Fuels", "Organic compounds"],
    "radioactive": false
  }
];

export const findAllElements = async(): Promise<ElementModel[]> => {
    return dataBase;
};

export const findElementById = async(atomicNumber:number): Promise<ElementModel | undefined> => {
    return dataBase.find(element => element.atomicNumber === atomicNumber);
};