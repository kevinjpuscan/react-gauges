import React from "react";
import { GaugeProps } from "./SimpleGauge.types";
import { getLabel } from "../../core/utils/labels";
import { useDimensions, useBarParameters } from "./hooks";

export default function SimpleGauge({
  value = 0,
  maxLimit = 100,
  minLimit = 0,
  barWidth = 20,
  barColor = "#5BB030",
  barBaseColor = "#E5E5E5",
  labelColor = "grey",
  labelFontFamily = "sans-serif",
  labelFontWeight = "bold",
  labelTemplate = "{value}%",
  labelFontSize,
  indicatorColor = "black",
  indicatorVisible = true,
  isTotal = false,
  borderType = "round",
}: GaugeProps): JSX.Element {
  const roudedGaugeContainer = React.useRef<HTMLDivElement>(null);
  const { width, height } = useDimensions(roudedGaugeContainer, barWidth, isTotal);
  const { circleParameters, baseCircleParameters } = useBarParameters(
    width,
    barWidth,
    value,
    minLimit,
    maxLimit,
    isTotal
  );

  return (
    <div data-testid="simple-gauge" ref={roudedGaugeContainer} style={{ position: "relative" }}>
      {baseCircleParameters && circleParameters && (
        <svg
          className="gauge-svg"
          width={width}
          height={height}
          style={{
            height: "inherit",
            position: "relative",
          }}
        >
          <circle
            cx={baseCircleParameters.center.x}
            cy={baseCircleParameters.center.y}
            r={baseCircleParameters.radius}
            strokeDasharray={`${baseCircleParameters.strokeDasharrayPrint}, ${baseCircleParameters.strokeDasharrayHide}`}
            strokeDashoffset={baseCircleParameters.strokeDashoffset}
            fill="none"
            stroke={barBaseColor}
            strokeWidth={barWidth}
            strokeLinecap={borderType}
          />

          <circle
            cx={circleParameters.center.x}
            cy={circleParameters.center.y}
            r={circleParameters.radius}
            strokeDasharray={`${circleParameters.strokeDasharrayPrint}, ${circleParameters.strokeDasharrayHide}`}
            strokeDashoffset={circleParameters.strokeDashoffset}
            fill="none"
            stroke={barColor}
            strokeWidth={barWidth}
            strokeLinecap={borderType}
          />

          {indicatorVisible && (
            <circle
              cx={circleParameters.center.x}
              cy={circleParameters.center.y}
              r={circleParameters.radius}
              strokeDasharray={`1, ${circleParameters.strokeDasharrayPrint + circleParameters.strokeDasharrayHide}`}
              strokeDashoffset={circleParameters.strokeDashoffset - circleParameters.strokeDasharrayPrint}
              fill="none"
              stroke={indicatorColor}
              strokeWidth={barWidth}
              strokeLinecap="round"
            />
          )}
        </svg>
      )}

      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width,
          height: height,
          display: "flex",
          justifyContent: "center",
          alignItems: `${isTotal ? "center" : "flex-end"}`,
          boxSizing: "border-box",
          padding: `${barWidth / 2}px`,
          fontSize: `${labelFontSize || barWidth * 2 + "px"}`,
          fontFamily: labelFontFamily,
          fontWeight: labelFontWeight,
          color: labelColor,
        }}
      >
        {getLabel(value, labelTemplate, { min: minLimit, max: maxLimit })}
      </div>
    </div>
  );
}
