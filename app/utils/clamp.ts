import BREAKPOINTS from "@constants/breakpoints";

// A function to construct fluid typography css clamp

// Refrence:
// - https://www.smashingmagazine.com/2022/01/modern-fluid-typography-css-clamp/
// - https://www.fluid-type-scale.com/calculate?minFontSize=18&minWidth=414&minRatio=1.25&maxFontSize=19&maxWidth=1280&maxRatio=1.28&steps=sm%2Cbase%2Cmd%2Clg%2Cxl%2Cxxl%2Cxxxl%2C+xxxxl&baseStep=base&prefix=font-size&decimals=2&useRems=on&previewFont=Inter

const clamp = (
  min: number,
  max: number,
  maxBreakPoint: number = BREAKPOINTS.tabletStart,
  minBreakPoint: number = BREAKPOINTS.mobileStart
): string => {
  const viewportWidth: number =
    (100 * (max - min)) / (maxBreakPoint - minBreakPoint);
  const relativeWidth: number =
    (minBreakPoint * max - maxBreakPoint * min) /
    (minBreakPoint - maxBreakPoint);
  return `clamp(${(min / 16).toFixed(3)}rem, ${viewportWidth.toFixed(3)}vw + ${(
    relativeWidth / 16
  ).toFixed(3)}rem, ${(max / 16).toFixed(3)}rem)`;
};

export { clamp };
