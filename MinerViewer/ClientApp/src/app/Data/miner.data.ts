interface miners {
    id: number;
    name: string;
    os: string;
    coin: string;
    location: string;
    cards: graphicCards[];
    ip: string;
}

interface graphicCards {
    id: number;
    mame:string;
    memoryTemp:number;
    hotSpotTemp:number;
    cooler:string;
}


