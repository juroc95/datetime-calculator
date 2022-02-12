import "jest-extended";

import { LocalDate, LocalDateTime, LocalTime, Period } from "@js-joda/core";

import { afterIntervalTimes, daysBetween, recurringEvent } from "./Calculator";

test("daysBetween test 1", () => {
    const s = LocalDate.parse("2022-01-31");
    const e = LocalDate.parse("2022-01-31");
    expect(daysBetween(s, e)).toBe(0);
});

test("daysBetween test 2", () => {
    const s = LocalDate.parse("2022-01-30");
    const e = LocalDate.parse("2022-01-31");
    expect(daysBetween(s, e)).toBe(1);
});

test("daysBetween test 3", () => {
    const s = LocalDate.parse("2022-01-31");
    const e = LocalDate.parse("2022-01-30");
    expect(daysBetween(s, e)).toBe(- 1);
});

test("daysBetween test 4", () => {
    const s = LocalDate.parse("2022-01-31");
    const e = LocalDate.parse("2022-03-31");
    expect(daysBetween(s, e)).toBe(59);
});

test("afterIntervalTimes test 1", () => {
    const s = LocalDate.parse("2022-01-31");
    const i = Period.parse("P1D");
    const m = 3;
    const r = "2022-02-03";
    expect(afterIntervalTimes(s, i, m).toString()).toBe(r);
});

test("afterIntervalTimes test 2", () => {
    const s = LocalDate.parse("2022-01-31");
    const i = Period.parse("P1D");
    const m = 0;
    const r = "2022-01-31";
    expect(afterIntervalTimes(s, i, m).toString()).toBe(r);
});

test("afterIntervalTimes test 3", () => {
    const s = LocalDate.parse("2022-01-31");
    const i = Period.parse("P1M");
    const m = 1;
    const r = "2022-02-28";
    expect(afterIntervalTimes(s, i, m).toString()).toBe(r);
});

test("afterIntervalTimes test 4", () => {
    const s = LocalDate.parse("2019-01-31");
    const i = Period.parse("P1Y1M");
    const m = 1;
    const r = "2020-02-29";
    expect(afterIntervalTimes(s, i, m).toString()).toBe(r);
});

test("recurringEvent test 1", () => {
    const s = LocalDateTime.parse("2022-01-01T00:00");
    const e = LocalDateTime.parse("2022-01-04T23:59");
    const i = Period.parse("P1D");
    const t = LocalTime.parse("01:00");
    // eslint-disable-next-line max-len
    const r = "2022-01-01T01:00,2022-01-02T01:00,2022-01-03T01:00,2022-01-04T01:00";
    expect(recurringEvent(s, e, i, t).toString()).toBe(r);
});

test("recurringEvent test 2", () => {
    const s = LocalDateTime.parse("2022-01-01T02:00");
    const e = LocalDateTime.parse("2022-01-04T23:59");
    const i = Period.parse("P1D");
    const t = LocalTime.parse("01:00");
    const r = "2022-01-02T01:00,2022-01-03T01:00,2022-01-04T01:00";
    expect(recurringEvent(s, e, i, t).toString()).toBe(r);
});

test("recurringEvent test 3", () => {
    const s = LocalDateTime.parse("2022-01-01T00:00");
    const e = LocalDateTime.parse("2022-01-04T00:00");
    const i = Period.parse("P1D");
    const t = LocalTime.parse("01:00");
    const r = "2022-01-01T01:00,2022-01-02T01:00,2022-01-03T01:00";
    expect(recurringEvent(s, e, i, t).toString()).toBe(r);
});

test("recurringEvent test 4", () => {
    const s = LocalDateTime.parse("2022-01-31T00:00");
    const e = LocalDateTime.parse("2022-05-15T00:00");
    const i = Period.parse("P1M");
    const t = LocalTime.parse("01:00");
    // eslint-disable-next-line max-len
    const r = "2022-01-31T01:00,2022-02-28T01:00,2022-03-28T01:00,2022-04-28T01:00";
    expect(recurringEvent(s, e, i, t).toString()).toBe(r);
});