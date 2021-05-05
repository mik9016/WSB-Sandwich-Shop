
export enum Ingredient {
    Lettuce = 'lettuce',
    Chorizo = 'chorizo',
    Cheese = 'cheese',
    Tomato = 'tomato',
    Ham = 'ham'
}

export enum Sauce {
    None = 'none',
    Mustard = 'mustard',
    Mayo ='mayo',
    Bbq = 'bbq'
}

export interface Sandwich {
    id?:number;
    name:string;
    ingredients: Ingredient[];
    sauce: Sauce;
    vege: boolean;
    price: number;
}