export interface Recipe {
    id: string,
    title: string,
    creation_date: string
}

export interface RecipeDetails extends Recipe {
    ingredients_list: string,
    duration: string,
    steps: string
}