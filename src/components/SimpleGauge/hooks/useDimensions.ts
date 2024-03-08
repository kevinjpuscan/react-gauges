import React, { useEffect } from "react";
import { getSimpleGaugeHeightContainer } from "../../../core/simpleGauge";

export function useDimensions(gaugeContainer: React.RefObject<HTMLDivElement>, barWidth: number, isTotal: boolean) {
  const getContainerWidth = (gaugeContainer: React.RefObject<HTMLDivElement>) => {
    const container = gaugeContainer.current;
    if (!container) return;
    return container.clientWidth;
  };

  const getDimensions = () => {
    const DEFAULT_WIDTH = 300;
    const width = getContainerWidth(gaugeContainer) || DEFAULT_WIDTH;
    const height = isTotal
      ? width
      : getSimpleGaugeHeightContainer({
          width: width,
          strokeWidth: barWidth,
        });
    return { width, height };
  };

  const { width: widthInit, height: heightInit } = getDimensions();
  const [width, setWidth] = React.useState<number>(widthInit);
  const [height, setHeight] = React.useState<number>(heightInit);

  useEffect(() => {
    const { width, height } = getDimensions();
    setWidth(width);
    setHeight(height);
  }, [gaugeContainer, isTotal, barWidth]);

  return { width, height };
}
