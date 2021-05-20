export interface RecipesResponse {
    // Broader interface containing an ar
    q: string;
    from: number;
    to: number;
    more: boolean;
    count: number;
    hits: Hit[];
}
export interface Hit {
    recipe: SearchResponse;
}
export interface SearchResponse {
    label: string;
    image: string;
    url: string;
    healthLabels?: string[];
    dietLabels?: string[];
    ingredientLines?: string[];
    calories: string;
    totalTime: string;
    mealType: string;
    source: string;
}