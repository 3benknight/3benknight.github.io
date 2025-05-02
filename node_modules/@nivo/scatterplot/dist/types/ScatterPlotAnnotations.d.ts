/// <reference types="react" />
import { ScatterPlotCommonProps, ScatterPlotDatum, ScatterPlotNodeData } from './types';
interface ScatterPlotAnnotationsProps<RawDatum extends ScatterPlotDatum> {
    nodes: ScatterPlotNodeData<RawDatum>[];
    annotations: ScatterPlotCommonProps<RawDatum>['annotations'];
}
export declare const ScatterPlotAnnotations: <RawDatum extends ScatterPlotDatum>({ nodes, annotations, }: ScatterPlotAnnotationsProps<RawDatum>) => JSX.Element;
export {};
//# sourceMappingURL=ScatterPlotAnnotations.d.ts.map