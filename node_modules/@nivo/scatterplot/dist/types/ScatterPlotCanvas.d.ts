/// <reference types="react" />
import { ScatterPlotDatum, ScatterPlotNodeData } from './types';
export declare const ScatterPlotCanvas: import("react").ForwardRefExoticComponent<Partial<import("./types").ScatterPlotCommonProps<ScatterPlotDatum>> & import("./types").ScatterPlotDataProps<ScatterPlotDatum> & import("@nivo/core").Dimensions & {
    layers?: (import("./types").ScatterPlotLayerId | import("./types").ScatterPlotCustomCanvasLayer<ScatterPlotDatum>)[] | undefined;
    pixelRatio?: number | undefined;
    renderNode?: ((ctx: CanvasRenderingContext2D, node: ScatterPlotNodeData<ScatterPlotDatum>) => void) | undefined;
} & import("react").RefAttributes<HTMLCanvasElement>>;
//# sourceMappingURL=ScatterPlotCanvas.d.ts.map