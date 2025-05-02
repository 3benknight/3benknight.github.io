import { ScaleQuantize } from 'd3-scale';
import { BBox, CalendarSvgProps, ColorScale, Datum, Year } from '../types';
/**
 * Compute min/max values.
 */
export declare const computeDomain: (data: CalendarSvgProps['data'], minSpec: NonNullable<CalendarSvgProps['minValue']>, maxSpec: NonNullable<CalendarSvgProps['maxValue']>) => readonly [number, number];
/**
 * Compute base layout, without caring about the current data.
 */
export declare const computeLayout: ({ width, height, from, to, direction, yearSpacing, monthSpacing, daySpacing, align, }: Pick<Required<CalendarSvgProps>, 'align' | 'direction' | 'from' | 'to' | 'width' | 'height' | 'yearSpacing' | 'monthSpacing' | 'daySpacing'>) => {
    years: {
        year: number;
        bbox: BBox;
    }[];
    months: {
        path: string;
        bbox: {
            x: number;
            y: number;
            width: number;
            height: number;
        };
        date: Date;
        year: number;
        month: number;
    }[];
    days: Omit<Datum, "data" | "value" | "color">[];
    cellSize: number;
    calendarWidth: number;
    calendarHeight: number;
    originX: number;
    originY: number;
};
/**
 * Bind current data to computed day cells.
 */
export declare const bindDaysData: ({ days, data, colorScale, emptyColor, }: Pick<Required<CalendarSvgProps>, "data" | "emptyColor"> & {
    colorScale: ScaleQuantize<string> | ColorScale;
    days: Array<Omit<Datum, 'color' | 'data' | 'value'>>;
}) => ({
    color: string;
    x: number;
    y: number;
    date: Date;
    day: string;
    size: number;
} | {
    color: string;
    data: import("../types").CalendarDatum;
    value: number;
    x: number;
    y: number;
    date: Date;
    day: string;
    size: number;
})[];
export declare const computeYearLegendPositions: ({ years, direction, position, offset, }: Pick<Required<CalendarSvgProps>, "direction"> & {
    offset: number;
    position: 'before' | 'after';
    years: Year[];
}) => {
    x: number;
    y: number;
    rotation: number;
    year: number;
    bbox: BBox;
}[];
export declare const computeMonthLegendPositions: <Month extends {
    bbox: BBox;
}>({ months, direction, position, offset, }: Pick<Required<CalendarSvgProps>, "direction"> & {
    offset: number;
    position: 'before' | 'after';
    months: Month[];
}) => (Month & {
    x: number;
    y: number;
    rotation: number;
})[];
//# sourceMappingURL=calendar.d.ts.map