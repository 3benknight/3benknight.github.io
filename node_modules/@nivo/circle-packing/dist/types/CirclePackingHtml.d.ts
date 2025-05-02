/// <reference types="react" />
import { CirclePackingHtmlProps } from './types';
type InnerCirclePackingHtmlProps<RawDatum> = Partial<Omit<CirclePackingHtmlProps<RawDatum>, 'data' | 'width' | 'height' | 'isInteractive' | 'animate' | 'motionConfig'>> & Pick<CirclePackingHtmlProps<RawDatum>, 'data' | 'width' | 'height' | 'isInteractive'>;
export declare const InnerCirclePackingHtml: <RawDatum>({ data, id, value, valueFormat, width, height, margin: partialMargin, padding, leavesOnly, colors, colorBy, inheritColorFromParent, childColor, borderWidth, borderColor, circleComponent, enableLabels, label, labelsFilter, labelsSkipRadius, labelTextColor, labelComponent, layers, isInteractive, onMouseEnter, onMouseMove, onMouseLeave, onClick, tooltip, zoomedId, role, }: InnerCirclePackingHtmlProps<RawDatum>) => JSX.Element;
export declare const CirclePackingHtml: <RawDatum>({ theme, isInteractive, animate, motionConfig, ...otherProps }: Partial<Omit<CirclePackingHtmlProps<RawDatum>, "data" | "height" | "width">> & Pick<CirclePackingHtmlProps<RawDatum>, "data" | "height" | "width">) => JSX.Element;
export {};
//# sourceMappingURL=CirclePackingHtml.d.ts.map