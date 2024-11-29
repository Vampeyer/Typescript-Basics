// Parameters extracts the parameter types of
//  a function type as an array.

type PointPrinter = (p: { x: number; y: number; }) => void;
const point3: Parameters<PointPrinter>[0] = {
  x: 10,
  y: 20
};