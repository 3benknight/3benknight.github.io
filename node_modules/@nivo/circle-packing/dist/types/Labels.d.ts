/// <reference types="react" />
import { CirclePackingCommonProps, ComputedDatum, LabelComponent } from './types';
interface CirclesProps<RawDatum> {
    nodes: ComputedDatum<RawDatum>[];
    label: CirclePackingCommonProps<RawDatum>['label'];
    filter?: CirclePackingCommonProps<RawDatum>['labelsFilter'];
    skipRadius: CirclePackingCommonProps<RawDatum>['labelsSkipRadius'];
    textColor: CirclePackingCommonProps<RawDatum>['labelTextColor'];
    component: LabelComponent<RawDatum>;
}
export declare const Labels: <RawDatum>({ nodes, label, filter, skipRadius, textColor, component, }: CirclesProps<RawDatum>) => JSX.Element;
export {};
//# sourceMappingURL=Labels.d.ts.map