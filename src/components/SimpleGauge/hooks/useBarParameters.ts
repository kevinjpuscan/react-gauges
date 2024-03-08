import React, { useEffect } from "react";
import { type SimpleGaugeParameters } from "../../../core/simpleGauge/simpleGauge.types";
import { getSimpleGaugeParameters } from "../../../core/simpleGauge";

export function useBarParameters(
  width: number,
  barWidth: number,
  value: number,
  minLimit: number,
  maxLimit: number,
  isTotal: boolean
) {
  const getPercent = (value: number, limits: { min: number; max: number }) => {
    if (value < limits.min) return 0;
    if (value > limits.max) return 100;
    return (value / Math.abs(limits.max - limits.min)) * 100;
  };
  const getParameters = () => {
    const percent = getPercent(value, { min: minLimit, max: maxLimit });
    const circleParameters = getSimpleGaugeParameters({
      percent,
      width,
      strokeWidth: barWidth,
      isTotal,
    });
    const baseCircleParameters = getSimpleGaugeParameters({
      percent: 100,
      width,
      strokeWidth: barWidth,
      isTotal,
    });
    return { circleParameters, baseCircleParameters };
  };
  const { circleParameters: circleParametersInit, baseCircleParameters: baseCircleParametersInit } = getParameters();

  const [circleParameters, setCircleParameters] = React.useState<SimpleGaugeParameters>(circleParametersInit);
  const [baseCircleParameters, setBaseCircleParameters] =
    React.useState<SimpleGaugeParameters>(baseCircleParametersInit);

  useEffect(() => {
    const { circleParameters, baseCircleParameters } = getParameters();
    setCircleParameters(circleParameters);
    setBaseCircleParameters(baseCircleParameters);
  }, [value, width, isTotal, barWidth]);

  return { circleParameters, baseCircleParameters, width };
}
