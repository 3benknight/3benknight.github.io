/// <reference types="react" />
import { ScatterPlotCommonProps, ScatterPlotDatum, ScatterPlotNodeData } from './types';
interface MeshProps<RawDatum extends ScatterPlotDatum> {
    nodes: ScatterPlotNodeData<RawDatum>[];
    width: number;
    height: number;
    onMouseEnter?: ScatterPlotCommonProps<RawDatum>['onMouseEnter'];
    onMouseMove?: ScatterPlotCommonProps<RawDatum>['onMouseMove'];
    onMouseLeave?: ScatterPlotCommonProps<RawDatum>['onMouseLeave'];
    onClick?: ScatterPlotCommonProps<RawDatum>['onClick'];
    tooltip: ScatterPlotCommonProps<RawDatum>['tooltip'];
    debug: boolean;
}
export declare const Mesh: <RawDatum extends ScatterPlotDatum>({ nodes, width, height, onMouseEnter, onMouseMove, onMouseLeave, onClick, tooltip, debug, }: MeshProps<RawDatum>) => JSX.Element;
export {};
//# sourceMappingURL=Mesh.d.ts.map