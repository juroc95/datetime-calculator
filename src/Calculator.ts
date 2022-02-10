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
    const endTotal = end.dayOfYear() + ((end.year() - 1) * 365);
    const startTotal = start.dayOfYear() + ((start.year() - 1) * 365);
    const difference = endTotal - startTotal;
    return difference;
}

export function afterIntervalTimes(
    start: LocalDate,
    interval: Period,
    multiplier: number,
): LocalDate {
    let afterInterval = start;
    for (let i = 0; i < multiplier; ++ i)
        afterInterval = afterInterval.plus(interval);
    return afterInterval;
}

export function recurringEvent(
    start: LocalDateTime,
    end: LocalDateTime,
    interval: Period,
    timeOfDay: LocalTime,
): LocalDateTime[] {
    const result = [];
    let temp = start;
    temp = temp.withHour(0);
    temp = temp.withMinute(0);
    temp = temp.plusHours(timeOfDay.hour());
    temp = temp.plusMinutes(timeOfDay.minute());
    while (end.isAfter(temp)) {
        if (start.isBefore(temp))
            result.push(temp);
        temp = temp.plus(interval);
    }
    return result;
}