import { ScatterPlotCommonProps, ScatterPlotDataProps, ScatterPlotDatum, ScatterPlotNodeData } from './types';
export declare const useScatterPlot: <RawDatum extends ScatterPlotDatum>({ data, xScaleSpec, xFormat, yScaleSpec, yFormat, width, height, nodeId, nodeSize, colors, }: {
    data: import("./types").ScatterPlotRawSerie<RawDatum>[];
    xScaleSpec: import("@nivo/scales").ScaleSpec;
    xFormat?: import("@nivo/core").ValueFormat<RawDatum["x"], void> | undefined;
    yScaleSpec: import("@nivo/scales").ScaleSpec;
    yFormat?: import("@nivo/core").ValueFormat<RawDatum["y"], void> | undefined;
    width: number;
    height: number;
    nodeId: import("@nivo/core").PropertyAccessor<Omit<ScatterPlotNodeData<RawDatum>, "id" | "color" | "size">, string>;
    nodeSize: number | import("./types").ScatterPlotNodeDynamicSizeSpec | import("@nivo/core").PropertyAccessor<Omit<ScatterPlotNodeData<RawDatum>, "color" | "size">, number>;
    colors: import("@nivo/colors").OrdinalColorScaleConfig<{
        serieId: string | number;
    }>;
}) => {
    xScale: import("@nivo/scales").ScaleLog | import("@nivo/scales").ScaleSymlog | import("@nivo/scales").ScaleLinear<number> | import("@nivo/scales").ScaleTime<Date | import("d3-scale").NumberValue> | import("@nivo/scales").ScalePoint<RawDatum["x"]> | import("@nivo/scales").ScaleBand<RawDatum["x"]>;
    yScale: import("@nivo/scales").ScaleLog | import("@nivo/scales").ScaleSymlog | import("@nivo/scales").ScaleLinear<number> | import("@nivo/scales").ScaleTime<Date | import("d3-scale").NumberValue> | import("@nivo/scales").ScalePoint<RawDatum["y"]> | import("@nivo/scales").ScaleBand<RawDatum["y"]>;
    nodes: ScatterPlotNodeData<RawDatum>[];
    legendData: {
        id: string | number;
        label: string | number;
        color: string;
    }[];
};
export declare const useScatterPlotAnnotations: <RawDatum extends ScatterPlotDatum>(items: ScatterPlotNodeData<RawDatum>[], annotations: import("@nivo/annotations").AnnotationMatcher<ScatterPlotNodeData<RawDatum>>[]) => import("@nivo/annotations").BoundAnnotation<ScatterPlotNodeData<RawDatum>>[];
//# sourceMappingURL=hooks.d.ts.map