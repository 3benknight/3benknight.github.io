/// <reference types="react" />
import { CirclePackingCanvasProps } from './types';
type ResponsiveCirclePackingCanvasProps<RawDatum> = Partial<Omit<CirclePackingCanvasProps<RawDatum>, 'data' | 'width' | 'height'>> & Pick<CirclePackingCanvasProps<RawDatum>, 'data'>;
export declare const ResponsiveCirclePackingCanvas: <RawDatum>(props: ResponsiveCirclePackingCanvasProps<RawDatum>) => JSX.Element;
export {};
//# sourceMappingURL=ResponsiveCirclePackingCanvas.d.ts.map