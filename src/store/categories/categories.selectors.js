import { createSelector } from "reselect"

const selectCategoriesReducer = state => {
console.log('selector run', state.categories)
return state.categories
}

export const selectCategories = createSelector(
    [selectCategoriesReducer],
    (categoryReducer) => {
      return  categoryReducer.categories}
)

export const selectCategoriesMap = createSelector(
    [selectCategories],
    (categories) => {
     return categories.reduce((acc, category)=>{
            const { title, items } = category
            acc[title] = items
            return acc
        }, {})
    }
)