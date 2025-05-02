/// <reference types="react" />
import { CssMixBlendMode } from '@nivo/core';
import { ScatterPlotDatum, ScatterPlotLayerId, ScatterPlotNodeData } from './types';
export declare const commonDefaultProps: {
    xScale: import("@nivo/scales").ScaleSpec;
    yScale: import("@nivo/scales").ScaleSpec;
    enableGridX: boolean;
    enableGridY: boolean;
    axisBottom: {};
    axisLeft: {};
    nodeId: import("@nivo/core").PropertyAccessor<Omit<ScatterPlotNodeData<ScatterPlotDatum>, "id" | "color" | "size">, string>;
    nodeSize: number;
    nodeComponent: <RawDatum extends ScatterPlotDatum>({ node, style, blendMode, isInteractive, onMouseEnter, onMouseMove, onMouseLeave, onClick, }: import("./types").ScatterPlotNodeProps<RawDatum>) => JSX.Element;
    colors: import("@nivo/colors").OrdinalColorScaleConfig<{
        serieId: string | number;
    }>;
    isInteractive: boolean;
    debugMesh: boolean;
    tooltip: <RawDatum_1 extends ScatterPlotDatum>({ node, }: import("./types").ScatterPlotTooltipProps<RawDatum_1>) => JSX.Element;
    markers: never[];
    legends: never[];
    annotations: never[];
};
export declare const svgDefaultProps: {
    blendMode: CssMixBlendMode;
    layers: ScatterPlotLayerId[];
    role: string;
    useMesh: boolean;
    animate: boolean;
    motionConfig: string;
    xScale: import("@nivo/scales").ScaleSpec;
    yScale: import("@nivo/scales").ScaleSpec;
    enableGridX: boolean;
    enableGridY: boolean;
    axisBottom: {};
    axisLeft: {};
    nodeId: import("@nivo/core").PropertyAccessor<Omit<ScatterPlotNodeData<ScatterPlotDatum>, "id" | "color" | "size">, string>;
    nodeSize: number;
    nodeComponent: <RawDatum extends ScatterPlotDatum>({ node, style, blendMode, isInteractive, onMouseEnter, onMouseMove, onMouseLeave, onClick, }: import("./types").ScatterPlotNodeProps<RawDatum>) => JSX.Element;
    colors: import("@nivo/colors").OrdinalColorScaleConfig<{
        serieId: string | number;
    }>;
    isInteractive: boolean;
    debugMesh: boolean;
    tooltip: <RawDatum_1 extends ScatterPlotDatum>({ node, }: import("./types").ScatterPlotTooltipProps<RawDatum_1>) => JSX.Element;
    markers: never[];
    legends: never[];
    annotations: never[];
};
export declare const canvasDefaultProps: {
    layers: ScatterPlotLayerId[];
    pixelRatio: number;
    renderNode: (ctx: CanvasRenderingContext2D, node: ScatterPlotNodeData<ScatterPlotDatum>) => void;
    xScale: import("@nivo/scales").ScaleSpec;
    yScale: import("@nivo/scales").ScaleSpec;
    enableGridX: boolean;
    enableGridY: boolean;
    axisBottom: {};
    axisLeft: {};
    nodeId: import("@nivo/core").PropertyAccessor<Omit<ScatterPlotNodeData<ScatterPlotDatum>, "id" | "color" | "size">, string>;
    nodeSize: number;
    nodeComponent: <RawDatum extends ScatterPlotDatum>({ node, style, blendMode, isInteractive, onMouseEnter, onMouseMove, onMouseLeave, onClick, }: import("./types").ScatterPlotNodeProps<RawDatum>) => JSX.Element;
    colors: import("@nivo/colors").OrdinalColorScaleConfig<{
        serieId: string | number;
    }>;
    isInteractive: boolean;
    debugMesh: boolean;
    tooltip: <RawDatum_1 extends ScatterPlotDatum>({ node, }: import("./types").ScatterPlotTooltipProps<RawDatum_1>) => JSX.Element;
    markers: never[];
    legends: never[];
    annotations: never[];
};
//# sourceMappingURL=props.d.ts.map