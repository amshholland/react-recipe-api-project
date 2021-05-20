
export interface RecipesResponse { // Broader interface containing an ar
    q: string;
    from: number;
    to: number;
    more: boolean;
    count: number;
    recipes: Recipe[];
}

export interface Recipe {
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

// export interface CompleteRecipe {
//     label: string;
//     image: string;
//     url: string;
//     healthLabels?: string[];
//     dietLabels?: string[];
//     ingredientLines?: string[];
//     ingredients?: string[];
//     calories: string;
//     time: string;
// }

// export interface Favorites {
//     label: string;
//     image: string;
//     url: string;
//     healthLabels?: string[];
//     dietLabels?: string[];
//     ingredientLines: string[];
//     ingredients: string[];
//     calories: string;
//     time: string;
//     favorited: boolean;
// }

