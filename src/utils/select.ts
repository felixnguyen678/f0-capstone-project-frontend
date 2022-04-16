import { IOptionItem } from '../types/select'

export function getOptionItem(value: string, options: IOptionItem[]): IOptionItem | undefined {
  if (!Array.isArray(options)) {
    return undefined
  }

  return options.find((option) => option.value === value)
}
