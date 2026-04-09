export type SelectOption = {
    value: string
    text: string
    isSelected?: boolean
}

export type SelectOptionHierarchy = {
    label: string
    subelementType: string
    subelements: SelectOptionHierarchy[] | SelectOption[]
}