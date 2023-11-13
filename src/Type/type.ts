interface FilterValueWithName {
  name: string
  state: boolean
  values?: { name: string; state: boolean }[]
}

interface FilterValueWithRange {
  max: number
  min: number
  state: number
  step: number
  values?: any[]
}

interface SidebarFilters {
  [key: string]: {
    [key: string]: FilterValueWithName | FilterValueWithRange
  }
}

export interface DataItem {
  id: number
  sidebar_filters: SidebarFilters
  title: string
}
