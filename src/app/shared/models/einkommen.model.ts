export interface Einkommengruppe {
    id: number;
    bezeichnung: string;
    einkommen?: Einkommen[];
}

export interface Einkommen {
    id: number;
    bezeichnung: string;
    beschreibung?: string;
}