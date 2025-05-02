import { DateOrString, Weekday } from '../types';
interface ComputeBaseProps {
    direction: 'horizontal' | 'vertical';
}
interface ComputeBaseSpaceProps {
    daySpacing: number;
    offset: number;
}
interface ComputeBaseDimensionProps {
    cellWidth: number;
    cellHeight: number;
}
interface ComputeCellSize extends ComputeBaseProps, ComputeBaseSpaceProps {
    totalDays: number;
    width: number;
    height: number;
    square: boolean;
}
interface ComputeCellPositions extends ComputeBaseProps, ComputeBaseSpaceProps, ComputeBaseDimensionProps {
    from?: DateOrString;
    to?: DateOrString;
    data: {
        date: Date;
        day: string;
        value: number;
    }[];
    colorScale: (value: number) => string;
    emptyColor: string;
    firstWeekday: Weekday;
}
interface ComputeWeekdays extends Omit<ComputeBaseProps, 'daysInRange'>, Omit<ComputeBaseSpaceProps, 'offset'>, ComputeBaseDimensionProps {
    ticks?: number[];
    arrayOfWeekdays?: string[];
    firstWeekday: Weekday;
}
interface Day {
    coordinates: {
        x: number;
        y: number;
    };
    firstWeek: number;
    month: number;
    year: number;
    date: Date;
    color: string;
    day: string;
    value?: number;
}
interface Month {
    date: Date;
    bbox: {
        x: number;
        y: number;
        width: number;
        height: number;
    };
    firstWeek: number;
    month: number;
    year: number;
}
interface ComputeMonths extends ComputeBaseProps, Omit<ComputeBaseSpaceProps, 'offset'>, ComputeBaseDimensionProps {
    days: Day[];
}
interface ComputeTotalDays {
    from?: DateOrString;
    to?: DateOrString;
    data: {
        date: Date;
        day: string;
        value: number;
    }[];
}
/**
 * Compute day cell size according to
 * current context.
 */
export declare const computeCellSize: ({ direction, daySpacing, offset, square, totalDays, width, height, }: ComputeCellSize) => {
    columns: number;
    rows: number;
    cellHeight: number;
    cellWidth: number;
};
export declare const ARRAY_OF_WEEKDAYS: string[];
export declare function getFirstWeekdayIndex(weekday: Weekday): number;
export declare const getDayIndex: (date: Date, firstWeekday: Weekday) => number;
export declare const computeCellPositions: ({ direction, colorScale, emptyColor, from, to, data, cellWidth, cellHeight, daySpacing, offset, firstWeekday, }: ComputeCellPositions) => ({
    coordinates: {
        x: number;
        y: number;
    };
    firstWeek: number;
    month: number;
    year: number;
    date: Date;
    color: string;
    width: number;
    height: number;
    day: string;
} | {
    coordinates: {
        x: number;
        y: number;
    };
    firstWeek: number;
    month: number;
    year: number;
    date: Date;
    color: string;
    width: number;
    height: number;
    day: string;
    value: number;
})[];
export declare const computeWeekdays: ({ cellHeight, cellWidth, direction, daySpacing, ticks, firstWeekday, arrayOfWeekdays, }: ComputeWeekdays) => {
    value: string;
    rotation: number;
    y: number;
    x: number;
}[];
export declare const computeMonthLegends: ({ direction, daySpacing, days, cellHeight, cellWidth, }: ComputeMonths) => {
    months: {
        [key: string]: Month;
    };
    weeks: Day[];
};
export declare const computeTotalDays: ({ from, to, data }: ComputeTotalDays) => number;
export {};
//# sourceMappingURL=timeRange.d.ts.map