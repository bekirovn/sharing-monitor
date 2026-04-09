import { Case } from "./cases"

export type TimelineDay = {
    dayOfMonth: number
    cases: Case[]
}

export type TimelineWeek = {
    weekOfMonth: number
    cases: Case[]
}

export type TimelineMonthData = {
    monthZeroIndexed: number
    cases: Case[]
}