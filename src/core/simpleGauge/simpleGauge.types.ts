export interface SimpleGaugeProps {
  percent: number;
  width: number;
  strokeWidth?: number;
  isTotal?: boolean;
}

export interface Center {
  x: number;
  y: number;
}

export interface SimpleGaugeParameters {
  center: Center;
  radius: number;
  strokeDasharrayPrint: number;
  strokeDasharrayHide: number;
  strokeDashoffset: number;
}

export interface SimpleGaugeDimensions {
  width: number;
  strokeWidth: number;
}
