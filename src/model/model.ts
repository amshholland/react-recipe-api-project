export interface Search {
    q: string;
    hits: string;
}

export interface Results {
    recipe: string;
}

export interface Recipe {
    label: string;
    image: string;
    url: string;
    healthLabels?: string[];
    dietLabels?: string[];
    ingredientLines: string[];
    ingredients: string[];
    calories: string;
    time: string;
}

