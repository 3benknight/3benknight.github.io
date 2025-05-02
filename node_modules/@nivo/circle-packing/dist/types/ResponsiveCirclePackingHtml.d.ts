/// <reference types="react" />
import { CirclePackingHtmlProps } from './types';
type ResponsiveCirclePackingHtmlProps<RawDatum> = Partial<Omit<CirclePackingHtmlProps<RawDatum>, 'data' | 'width' | 'height'>> & Pick<CirclePackingHtmlProps<RawDatum>, 'data'>;
export declare const ResponsiveCirclePackingHtml: <RawDatum>(props: ResponsiveCirclePackingHtmlProps<RawDatum>) => JSX.Element;
export {};
//# sourceMappingURL=ResponsiveCirclePackingHtml.d.ts.map