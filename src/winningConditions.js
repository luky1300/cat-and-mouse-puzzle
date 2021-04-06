const winningConditions = [
  [{ point1: { x: 3, y: 0 }, point2: { x: 0, y: 1 }, connected: true }],
  [
    { point1: { x: 3, y: 6 }, point2: { x: 6, y: 1 }, connected: true },
    { point1: { x: 3, y: 6 }, point2: { x: 1, y: 0 }, connected: true },
    { point1: { x: 3, y: 6 }, point2: { x: 6, y: 3 }, connected: false },
    { point1: { x: 6, y: 3 }, point2: { x: 0, y: 3 }, connected: true },
    { point1: { x: 3, y: 6 }, point2: { x: 5, y: 6 }, connected: true },
  ],
];
