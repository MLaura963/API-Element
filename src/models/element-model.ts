export interface ElementModel {
  atomicNumber: number;
  name: string;
  symbol: string;
  atomicMass: number;
  category: string;
  group: number;
  period: number;
  phaseAtRoomTemp: "Solid" | "Liquid" | "Gas";
  electronConfiguration: string;
  uses: string[];
  radioactive: boolean;

};