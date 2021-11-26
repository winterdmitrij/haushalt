export interface Kontengruppe {
    id: number;
    bezeichnung: string;
    beschreibung?: string;
    konten?: Konto[];
}

export interface Konto {
    id: number;
    bezeichnung: string;
    beschreibung?: string;
    istSichtbar: boolean;
}

export class Kontostand {
    konto!: Konto;
    datum!: Date;
    startStand!: number;
    stand!: number;

    
}