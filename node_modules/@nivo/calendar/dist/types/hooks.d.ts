import { ScaleQuantize } from 'd3-scale';
import { bindDaysData } from './compute/calendar';
import { BBox, CalendarSvgProps, ColorScale, Year } from './types';
export declare const useCalendarLayout: ({ width, height, from, to, direction, yearSpacing, monthSpacing, daySpacing, align, }: Pick<Required<CalendarSvgProps>, 'width' | 'height' | 'from' | 'to' | 'direction' | 'yearSpacing' | 'monthSpacing' | 'daySpacing' | 'align'>) => {
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
    days: Omit<import("./types").Datum, "data" | "value" | "color">[];
    cellSize: number;
    calendarWidth: number;
    calendarHeight: number;
    originX: number;
    originY: number;
};
export declare const useColorScale: ({ data, minValue, maxValue, colors, colorScale, }: Pick<Required<CalendarSvgProps>, 'data' | 'minValue' | 'maxValue' | 'colors'> & Pick<CalendarSvgProps, 'colorScale'>) => ColorScale;
export declare const useYearLegends: ({ years, direction, yearLegendPosition, yearLegendOffset, }: {
    years: Year[];
    direction: 'horizontal' | 'vertical';
    yearLegendPosition: 'before' | 'after';
    yearLegendOffset: number;
}) => {
    x: number;
    y: number;
    rotation: number;
    year: number;
    bbox: BBox;
}[];
export declare const useMonthLegends: <Month extends {
    bbox: BBox;
}>({ months, direction, monthLegendPosition, monthLegendOffset, }: {
    months: Month[];
    direction: 'horizontal' | 'vertical';
    monthLegendPosition: 'before' | 'after';
    monthLegendOffset: number;
}) => (Month & {
    x: number;
    y: number;
    rotation: number;
})[];
export declare const useDays: ({ days, data, colorScale, emptyColor, }: Pick<Required<CalendarSvgProps>, "data" | "emptyColor"> & Pick<Pick<Required<CalendarSvgProps>, "data" | "emptyColor"> & {
    colorScale: ColorScale | ScaleQuantize<string, never>;
    days: Omit<import("./types").Datum, "data" | "value" | "color">[];
}, "days"> & {
    colorScale: ScaleQuantize<string> | ColorScale;
}) => ({
    color: string;
    x: number;
    y: number;
    date: Date;
    day: string;
    size: number;
} | {
    color: string;
    data: import("./types").CalendarDatum;
    value: number;
    x: number;
    y: number;
    date: Date;
    day: string;
    size: number;
})[];
//# sourceMappingURL=hooks.d.ts.map