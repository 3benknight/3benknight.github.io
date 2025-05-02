/// <reference types="react" />
import { CssMixBlendMode } from '@nivo/core';
import { ScatterPlotCommonProps, ScatterPlotDatum, ScatterPlotNode, ScatterPlotNodeData } from './types';
interface NodesProps<RawDatum extends ScatterPlotDatum> {
    nodes: ScatterPlotNodeData<RawDatum>[];
    nodeComponent: ScatterPlotNode<RawDatum>;
    isInteractive: boolean;
    onMouseEnter?: ScatterPlotCommonProps<RawDatum>['onMouseEnter'];
    onMouseMove?: ScatterPlotCommonProps<RawDatum>['onMouseMove'];
    onMouseLeave?: ScatterPlotCommonProps<RawDatum>['onMouseLeave'];
    onClick?: ScatterPlotCommonProps<RawDatum>['onClick'];
    tooltip: ScatterPlotCommonProps<RawDatum>['tooltip'];
    blendMode: CssMixBlendMode;
}
export declare const Nodes: <RawDatum extends ScatterPlotDatum>({ nodes, nodeComponent, isInteractive, onMouseEnter, onMouseMove, onMouseLeave, onClick, tooltip, blendMode, }: NodesProps<RawDatum>) => JSX.Element;
export {};
//# sourceMappingURL=Nodes.d.ts.map