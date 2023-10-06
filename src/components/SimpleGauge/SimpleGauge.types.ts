export interface GaugeProps {
  value?: number;
  minLimit?: number;
  maxLimit?: number;
  barColor?: string;
  barBaseColor?: string;
  barWidth?: number;
  labelColor?: string;
  labelFontSize?: string;
  labelFontFamily?: string;
  labelFontWeight?: string;
  labelTemplate?: string;
  indicatorColor?: string;
  indicatorVisible?: boolean;
  isTotal?: boolean;
  borderType?: "round" | "square" | "butt";
}
