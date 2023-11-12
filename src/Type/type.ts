interface FilterValue {
  name: string
  state: boolean
}

interface Filter {
  name: string
  type: string
  values: FilterValue[]
}

interface SidebarFilters {
  [key: string]: {
    [key: string]: Filter
  }
}

export interface DataItem {
  id: number
  sidebar_filters: SidebarFilters
  title: string
}
