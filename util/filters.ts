import { SelectOption, SelectOptionHierarchy } from "@/types/filters";

export function getOptions(optionGroupsHierarchy:SelectOptionHierarchy):SelectOption[] {
    if (optionGroupsHierarchy.subelementType === "options") {
        return optionGroupsHierarchy.subelements as SelectOption[];
    }
    let optionGroups = optionGroupsHierarchy.subelements as SelectOptionHierarchy[];
    return optionGroups.flatMap(getOptions)
}