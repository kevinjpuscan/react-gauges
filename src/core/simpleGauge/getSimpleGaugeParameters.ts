import { SimpleGaugeProps, SimpleGaugeParameters, Center } from "./simpleGauge.types";

export function getSimpleGaugeParameters({
  percent,
  width,
  strokeWidth = 10,
  isTotal = false,
}: SimpleGaugeProps): SimpleGaugeParameters {
  const center: Center = {
    x: width / 2,
    y: width / 2,
  };
  const radius = width / 2 - strokeWidth / 2;
  const strokeDasharrayPrint = isTotal ? (radius * 2 * Math.PI * percent) / 100 : (radius * Math.PI * percent) / 100;
  const strokeDasharrayHide = 2 * radius * Math.PI - strokeDasharrayPrint;
  const strokeDashoffset = isTotal ? (-radius * Math.PI) / 2 : -radius * Math.PI;
  return {
    center,
    radius,
    strokeDasharrayPrint,
    strokeDasharrayHide,
    strokeDashoffset,
  };
}
