/// <reference types="react" />
import { CirclePackingSvgProps } from './types';
type ResponsiveCirclePackingProps<RawDatum> = Partial<Omit<CirclePackingSvgProps<RawDatum>, 'data' | 'width' | 'height'>> & Pick<CirclePackingSvgProps<RawDatum>, 'data'>;
export declare const ResponsiveCirclePacking: <RawDatum>(props: ResponsiveCirclePackingProps<RawDatum>) => JSX.Element;
export {};
//# sourceMappingURL=ResponsiveCirclePacking.d.ts.map