import { type SchemaTypeDefinition } from 'sanity'
import { categoryType } from './categoryType'
import { addressType } from './addressType'
import { authorType } from './authorType'
import { blockContentType } from './blockContentType'
import { blogType } from './blogType'
import { blogCategoryType } from './blogCategoryType'
import { brandType } from './brandType'
import { orderType } from './orderType'
import { productType } from './productType'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    categoryType,
    addressType,
    authorType,
    blockContentType,
    blogType,
    blogCategoryType,
    brandType,
    orderType,
    productType,
  ],
}
