export interface Search {
    keyword: string;
}
export interface Results {
    q: string;
    results: Search[];
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

export interface Favorites {
    label: string;
    image: string;
    url: string;
    healthLabels?: string[];
    dietLabels?: string[];
    ingredientLines: string[];
    ingredients: string[];
    calories: string;
    time: string;
    favorited: boolean;
}

