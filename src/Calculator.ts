import {
    LocalDate,
    LocalDateTime,
    LocalTime,
    Period,
} from "@js-joda/core";

export function daysBetween(
    start: LocalDate,
    end: LocalDate,
): number {
    throw new Error("unimplemented");
}

export function afterIntervalTimes(
    start: LocalDate,
    interval: Period,
    multiplier: number,
): LocalDate {
    throw new Error("unimplemented");
}

export function recurringEvent(
    start: LocalDateTime,
    end: LocalDateTime,
    interval: Period,
    timeOfDay: LocalTime,
): LocalDateTime[] {
    throw new Error("unimplemented");
}