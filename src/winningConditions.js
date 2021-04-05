const winningConditions = [
  [
    [
      [
        { type: "flower", angle: [0] },
        { type: "two-corners", angle: [90, -90] },
        { type: "cross", angle: [0] },
      ],
      [
        { type: "corner", angle: [-180] },
        { type: "bridge", angle: [0] },
        { type: "two-corners", angle: [90, -90] },
      ],
      [
        { type: "corner", angle: [0] },
        { type: "flower", angle: [-90] },
        { type: "corner", angle: [90] },
      ],
    ],
    [
      [
        { type: "bridge", angle: [0] },
        { type: "two-corners", angle: [90, -90] },
        { type: "corner", angle: [0] },
      ],
      [
        { type: "flower", angle: [-90] },
        { type: "two-corners", angle: [90, -90] },
        { type: "corner", angle: [90] },
      ],
      [
        { type: "flower", angle: [-180] },
        { type: "cross", angle: [0] },
        { type: "corner", angle: [0] },
      ],
    ],
    [
      [
        { type: "cross", angle: [0] },
        { type: "flower", angle: [-180] },
        { type: "corner", angle: [0] },
      ],
      [
        { type: "two-corners", angle: [90, -90] },
        { type: "flower", angle: [0] },
        { type: "corner", angle: [90] },
      ],
      [
        { type: "bridge", angle: [0] },
        { type: "two-corners", angle: [90, -90] },
        { type: "corner", angle: [0] },
      ],
    ],
    [
      [
        { type: "flower", angle: [90] },
        { type: "flower", angle: [-90] },
        { type: "bridge", angle: [0] },
      ],
      [
        { type: "two-corners", angle: [0, -180] },
        { type: "two-corners", angle: [90, -90] },
        { type: "corner", angle: [90] },
      ],
      [
        { type: "corner", angle: [-180] },
        { type: "cross", angle: [0] },
        { type: "corner", angle: [0] },
      ],
    ],
  ],
  //level 2 (22 in the book)
  [
    [
      [
        { type: "flower", angle: [-90] },
        { type: "corner", angle: [90] },
        { type: "corner", angle: [-90] },
      ],
      [
        { type: "two-corners", angle: [0, -180] },
        { type: "flower", angle: [0] },
        { type: "two-corners", angle: [90, -90] },
      ],
      [
        { type: "corner", angle: [-180] },
        { type: "bridge", angle: [0] },
        { type: "cross", angle: [0] },
      ],
    ],
    [
      [
        { type: "corner", angle: [-180] },
        { type: "cross", angle: [0] },
        { type: "two-corners", angle: [90, -90] },
      ],
      [
        { type: "corner", angle: [0] },
        { type: "flower", angle: [-90] },
        { type: "two-corners", angle: [90, -90] },
      ],
      [
        { type: "corner", angle: [-180] },
        { type: "bridge", angle: [0] },
        { type: "flower", angle: [90] },
      ],
    ],
    [
      [
        { type: "flower", angle: [-90] },
        { type: "corner", angle: [0] },
        { type: "corner", angle: [-90] },
      ],
      [
        { type: "two-corners", angle: [0, -180] },
        { type: "cross", angle: [0] },
        { type: "two-corners", angle: [90, -90] },
      ],
      [
        { type: "corner", angle: [-180] },
        { type: "bridge", angle: [0] },
        { type: "flower", angle: [90] },
      ],
    ],
    [
      [
        { type: "two-corners", angle: [0, -180] },
        { type: "corner", angle: [0] },
        { type: "corner", angle: [-90] },
      ],
      [
        { type: "flower", angle: [90] },
        { type: "flower", angle: [-90] },
        { type: "two-corners", angle: [90, -90] },
      ],
      [
        { type: "corner", angle: [-180] },
        { type: "bridge", angle: [0] },
        { type: "cross", angle: [0] },
      ],
    ],
  ],
];
