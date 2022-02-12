import "jest-extended";

import { LocalDate, LocalDateTime, LocalTime, Period } from "@js-joda/core";

import { afterIntervalTimes, daysBetween, recurringEvent } from "./Calculator";

test("daysBetween test 1", () => {
    const start = LocalDate.parse("2022-01-31");
    const end = LocalDate.parse("2022-01-31");
    expect(daysBetween(start, end)).toBe(0);
});

test("daysBetween test 2", () => {
    const start = LocalDate.parse("2022-01-30");
    const end = LocalDate.parse("2022-01-31");
    expect(daysBetween(start, end)).toBe(1);
});

test("daysBetween test 3", () => {
    const start = LocalDate.parse("2022-01-31");
    const end = LocalDate.parse("2022-01-30");
    expect(daysBetween(start, end)).toBe(- 1);
});

test("daysBetween test 4", () => {
    const start = LocalDate.parse("2022-01-31");
    const end = LocalDate.parse("2022-03-31");
    expect(daysBetween(start, end)).toBe(59);
});

test("afterIntervalTimes test 1", () => {
    const start = LocalDate.parse("2022-01-31");
    const interval = Period.parse("P1D");
    const multiplier = 3;
    const result = "2022-02-03";
    expect(afterIntervalTimes(start, interval, multiplier).toString()).toBe(result);
});

test("afterIntervalTimes test 2", () => {
    const start = LocalDate.parse("2022-01-31");
    const interval = Period.parse("P1D");
    const multiplier = 0;
    const result = "2022-01-31";
    expect(afterIntervalTimes(start, interval, multiplier).toString()).toBe(result);
});

test("afterIntervalTimes test 3", () => {
    const start = LocalDate.parse("2022-01-31");
    const interval = Period.parse("P1M");
    const multiplier = 1;
    const result = "2022-02-28";
    expect(afterIntervalTimes(start, interval, multiplier).toString()).toBe(result);
});

test("afterIntervalTimes test 4", () => {
    const start = LocalDate.parse("2019-01-31");
    const interval = Period.parse("P1Y1M");
    const multiplier = 1;
    const result = "2020-02-29";
    expect(afterIntervalTimes(start, interval, multiplier).toString()).toBe(result);
});

test("recurringEvent test 1", () => {
    const start = LocalDateTime.parse("2022-01-01T00:00");
    const end = LocalDateTime.parse("2022-01-04T23:59");
    const interval = Period.parse("P1D");
    const timeOfDay = LocalTime.parse("01:00");
    const result = "2022-01-01T01:00,2022-01-02T01:00,2022-01-03T01:00,2022-01-04T01:00";
    expect(recurringEvent(start, end, interval, timeOfDay).toString()).toBe(result);
});

test("recurringEvent test 2", () => {
    const start = LocalDateTime.parse("2022-01-01T02:00");
    const end = LocalDateTime.parse("2022-01-04T23:59");
    const interval = Period.parse("P1D");
    const timeOfDay = LocalTime.parse("01:00");
    const result = "2022-01-02T01:00,2022-01-03T01:00,2022-01-04T01:00";
    expect(recurringEvent(start, end, interval, timeOfDay).toString()).toBe(result);
});

test("recurringEvent test 3", () => {
    const start = LocalDateTime.parse("2022-01-01T00:00");
    const end = LocalDateTime.parse("2022-01-04T00:00");
    const interval = Period.parse("P1D");
    const timeOfDay = LocalTime.parse("01:00");
    const result = "2022-01-01T01:00,2022-01-02T01:00,2022-01-03T01:00";
    expect(recurringEvent(start, end, interval, timeOfDay).toString()).toBe(result);
});

test("recurringEvent test 4", () => {
    const start = LocalDateTime.parse("2022-01-31T00:00");
    const end = LocalDateTime.parse("2022-05-15T00:00");
    const interval = Period.parse("P1M");
    const timeOfDay = LocalTime.parse("01:00");
    const result = "2022-01-31T01:00,2022-02-28T01:00,2022-03-28T01:00,2022-04-28T01:00";
    expect(recurringEvent(start, end, interval, timeOfDay).toString()).toBe(result);
});