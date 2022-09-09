export interface Miner {
    id: number;
    name?: string;
    os?: string;
    coin?: string;
    location?: string;
    cards: GraphicCard[];
    ip?: string;
}

export interface GraphicCard {
    id: number;
    name?:string;
    memoryTemp?:number;
    hotSpotTemp?:number;
    cooler?:string;
}

export interface MinerAdress {
    id:number;
    ip:string;
}