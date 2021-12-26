export interface Kontengruppe {
    id: number;
    bezeichnung: string;
    kommentar?: string;
    konten?: Konto[];
}

export interface Konto {
    id: number;
    kontoName: string;
    beschreibung?: string;
    istSichtbar: boolean;
}

export class Kontostand {
    kontoId!: number;
    datum!: Date;
    startStand!: number;
    stand!: number;
}