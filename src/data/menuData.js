import categoriesJson from './categories.json'

export const categories = categoriesJson

export function getCategoryName(categoryId, lang = 'es') {
  const category = categoriesJson[categoryId]
  if (!category) return categoryId
  return category[lang] || category['es'] || categoryId
}

export function getAllCategoryIds() {
  return Object.keys(categoriesJson)
}