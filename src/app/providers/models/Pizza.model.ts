export class Pizza {
    id: number;
    halfNHalf: boolean = false;
    extraSauce: boolean = false;
    crust: CrustType = CrustType.FINA;
    mainFlavor: FlavorType;
    secondaryFlavor: FlavorType;
    size: string;
    note: string;
}

export enum CrustType {
    GROSSA = 'GROSSA',
    FINA = 'FINA'
}

export enum FlavorType {
    MARGUERITA = 'MARGUERITA',
    CALABRESA = 'CALABRESA',
    PEPPERONI = 'PEPPERONI',
    FRANGO_COM_CATUPIRY = 'FRANGO_COM_CATUPIRY',
    PORTUGUESA = 'PORTUGUESA',
    QUATRO_QUEIJOS = 'QUATRO_QUEIJOS'
}

export const Flavors = [
    { value: FlavorType.MARGUERITA, view: 'Marguerita' },
    { value: FlavorType.CALABRESA, view: 'Calabresa' },
    { value: FlavorType.PEPPERONI, view: 'Pepperoni' },
    { value: FlavorType.FRANGO_COM_CATUPIRY, view: 'Frango Com Catupiry' },
    { value: FlavorType.PORTUGUESA, view: 'Portuguesa' },
    { value: FlavorType.QUATRO_QUEIJOS, view: 'Quatro queijos' }
];
