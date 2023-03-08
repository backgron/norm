import createFile from '../utils/createFile'
import errorCatch from '../utils/errorCatch'
import type { BaseComposition, BaseItemType } from '../utils/meta'
import { baseComposition } from '../utils/meta'

export default async (rootDir: string, composition: BaseComposition) => {
  Object.keys(composition).forEach(async (key: string) => {
    const itemType = key as BaseItemType
    const files = composition[itemType]?.copyFile

    if (files)
      await errorCatch(createFile, rootDir, files)
  })
}
