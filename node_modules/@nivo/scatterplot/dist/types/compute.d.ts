import { ComputedSerie } from '@nivo/scales';
import { ScatterPlotCommonProps, ScatterPlotDatum, ScatterPlotNodeData, ScatterPlotNodeDynamicSizeSpec } from './types';
export declare const getNodeSizeGenerator: <RawDatum extends ScatterPlotDatum>(size: number | ScatterPlotNodeDynamicSizeSpec | import("@nivo/core").PropertyAccessor<Omit<ScatterPlotNodeData<RawDatum>, "color" | "size">, number>) => (datum: Omit<ScatterPlotNodeData<RawDatum>, "color" | "size">) => number;
export declare const computePoints: <RawDatum extends ScatterPlotDatum>({ series, formatX, formatY, getNodeId, }: {
    series: ComputedSerie<{
        id: string | number;
    }, RawDatum>[];
    formatX: (value: RawDatum["x"]) => string | number;
    formatY: (value: RawDatum["x"]) => string | number;
    getNodeId: (d: Omit<ScatterPlotNodeData<RawDatum>, "id" | "color" | "size">) => string;
}) => Omit<ScatterPlotNodeData<RawDatum>, "color" | "size">[];
//# sourceMappingURL=compute.d.ts.map