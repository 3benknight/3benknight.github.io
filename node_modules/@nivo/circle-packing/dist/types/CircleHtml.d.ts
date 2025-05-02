/// <reference types="react" />
import { SpringValue, Interpolation } from '@react-spring/web';
import { CircleProps } from './types';
export declare const interpolatePosition: (positionValue: SpringValue<number>, radiusValue: Interpolation<number>) => Interpolation<number, any>;
export declare const interpolateSize: (radiusValue: Interpolation<number>) => Interpolation<number, any>;
export declare const interpolateBorderWidth: (borderWidth: number, radiusValue: Interpolation<number>) => Interpolation<number, any>;
export declare const CircleHtml: <RawDatum>({ node, style, onMouseEnter, onMouseMove, onMouseLeave, onClick, }: CircleProps<RawDatum>) => JSX.Element;
//# sourceMappingURL=CircleHtml.d.ts.map