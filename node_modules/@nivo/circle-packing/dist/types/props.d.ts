/// <reference types="react" />
import { OrdinalColorScaleConfig } from '@nivo/colors';
import { CirclePackingLayerId } from './types';
export declare const defaultProps: {
    id: string;
    value: string;
    padding: number;
    leavesOnly: boolean;
    layers: CirclePackingLayerId[];
    colors: OrdinalColorScaleConfig<any>;
    colorBy: "depth";
    inheritColorFromParent: boolean;
    childColor: {
        from: string;
        modifiers: (string | number)[][];
    };
    borderWidth: number;
    borderColor: {
        from: string;
        modifiers: (string | number)[][];
    };
    defs: never[];
    fill: never[];
    enableLabels: boolean;
    label: string;
    labelTextColor: {
        from: string;
        modifiers: (string | number)[][];
    };
    labelsSkipRadius: number;
    isInteractive: boolean;
    tooltip: <RawDatum>({ id, formattedValue, color, }: import("./types").ComputedDatum<RawDatum>) => JSX.Element;
    animate: boolean;
    motionConfig: string;
    role: string;
    pixelRatio: number;
};
//# sourceMappingURL=props.d.ts.map