import { SimpleGaugeDimensions } from "./simpleGauge.types";

export function getSimpleGaugeHeightContainer({ width, strokeWidth = 10 }: SimpleGaugeDimensions) {
  return width / 2 + strokeWidth;
}
