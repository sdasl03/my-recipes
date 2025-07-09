export enum RecipeType{
    poultry="poultry", meat="meat", fish="fish", vegetarian="vegetarian", vegan="vegan", sweet="sweet", veganSweet="veganSweet", seafood="seafood"
}
export interface Recipe {
    id: string,
    title: string,
    creation_date: string
    type: RecipeType
}

export interface RecipeDetails extends Recipe {
    ingredients_list: string,
    duration: string,
    steps: string
}