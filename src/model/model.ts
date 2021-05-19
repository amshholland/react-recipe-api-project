export interface SearchResponse {
    hits: CompleteHits[];
}

export interface CompleteHits {
    recipe: CompleteRecipe;
}

export interface CompleteRecipe {
    label: string;
    image: string;
    url: string;
    healthLabels?: string[];
    dietLabels?: string[];
    ingredientLines?: string[];
    ingredients?: string[];
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

