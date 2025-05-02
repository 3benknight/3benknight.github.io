import { MouseEvent, MutableRefObject } from 'react';
import { CirclePackingCommonProps, CirclePackingCustomLayerProps, ComputedDatum, MouseHandlers } from './types';
export declare const useCirclePacking: <RawDatum>({ data, id, value, valueFormat, width, height, padding, leavesOnly, colors, colorBy, inheritColorFromParent, childColor, }: {
    data: RawDatum;
    id: import("@nivo/core").PropertyAccessor<RawDatum, string>;
    value: import("@nivo/core").PropertyAccessor<RawDatum, number>;
    valueFormat?: import("@nivo/core").ValueFormat<number, void> | undefined;
    width: number;
    height: number;
    padding: number;
    leavesOnly: boolean;
    colors: import("@nivo/colors").OrdinalColorScaleConfig<Omit<ComputedDatum<RawDatum>, "color" | "fill">>;
    colorBy: "id" | "depth";
    inheritColorFromParent: boolean;
    childColor: import("@nivo/colors").InheritedColorConfig<ComputedDatum<RawDatum>>;
}) => ComputedDatum<RawDatum>[];
export declare const useCirclePackingZoom: <RawDatum>(nodes: ComputedDatum<RawDatum>[], zoomedId: string | null | undefined, width: number, height: number) => ComputedDatum<RawDatum>[];
export declare const useCirclePackingLabels: <RawDatum>({ nodes, label, filter, skipRadius, textColor, }: {
    nodes: ComputedDatum<RawDatum>[];
    label: import("@nivo/core").PropertyAccessor<ComputedDatum<RawDatum>, string>;
    filter: ((label: import("./types").ComputedLabel<RawDatum>) => boolean) | undefined;
    skipRadius: number;
    textColor: import("@nivo/colors").InheritedColorConfig<ComputedDatum<RawDatum>>;
}) => {
    label: string | number;
    textColor: any;
    node: ComputedDatum<RawDatum>;
}[];
export declare const useNodeMouseHandlers: <RawDatum>(node: ComputedDatum<RawDatum>, { onMouseEnter, onMouseMove, onMouseLeave, onClick }: MouseHandlers<RawDatum>) => Partial<Record<"onMouseMove" | "onClick" | "onMouseEnter" | "onMouseLeave", (event: MouseEvent) => void>>;
export declare const useMouseCircleDetection: <RawDatum>({ nodes, canvasEl, margin, }: {
    nodes: ComputedDatum<RawDatum>[];
    canvasEl: MutableRefObject<HTMLCanvasElement | null>;
    margin: {
        top: number;
        left: number;
    };
}) => (event: MouseEvent) => ComputedDatum<RawDatum> | null | undefined;
/**
 * Memoize the context to pass to custom layers.
 */
export declare const useCirclePackingLayerContext: <RawDatum>({ nodes, }: {
    nodes: ComputedDatum<RawDatum>[];
}) => CirclePackingCustomLayerProps<RawDatum>;
//# sourceMappingURL=hooks.d.ts.map