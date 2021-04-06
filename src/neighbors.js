function getNeighborsByTile(tile) {
  console.log("from getNeighbors", tile);
  switch (tile.type) {
    case "corner":
      switch (tile.angle) {
        case 0:
          return {
            top: [],
            right: [],
            bottom: ["x-1, y+1"],
            left: ["x+1, y-1"],
          };
        case 90:
          return {
            top: ["x-1, y-1"],
            right: [],
            bottom: [],
            left: ["x+1, y+1"],
          };
        case -180:
          return {
            top: ["x+1, y-1"],
            right: ["x-1, y+1"],
            bottom: [],
            left: [],
          };
        case -90:
          return {
            top: [],
            right: ["x-1, y-1"],
            bottom: [],
            left: ["x+1, y-1"],
          };
      }
    case "two-corners":
      switch (tile.angle) {
        case 0:
          return {
            top: ["x+1, y-1"],
            right: ["x-1, y+1"],
            bottom: ["x-1, y+1"],
            left: ["x+1, y-1"],
          };
        case 180:
          return {
            top: ["x+1, y-1"],
            right: ["x-1, y+1"],
            bottom: ["x-1, y+1"],
            left: ["x+1, y-1"],
          };
        case 90:
          return {
            top: ["x-1, y-1"],
            right: ["x-1, y-1"],
            bottom: ["x+1, y+1"],
            left: ["x+1, y+1"],
          };
        case -90:
          return {
            top: ["x-1, y-1"],
            right: ["x-1, y-1"],
            bottom: ["x+1, y+1"],
            left: ["x+1, y+1"],
          };
      }
    case "flower":
      switch (tile.angle) {
        case 0:
          return {
            top: [],
            right: ["x-1, y-1"],
            bottom: ["x-1, y+1", "x+1, y+1"],
            left: ["x+1, y-1"],
          };
        case 90:
          return {
            top: ["x-1, y-1"],
            right: [],
            bottom: ["x-1, y+1"],
            left: ["x+1, y+1", "x+1, y-1"],
          };
        case -180:
          return {
            top: ["x+1, y-1", "x-1, y-1"],
            right: ["x-1, y+1"],
            bottom: [],
            left: ["x+1, y+1"],
          };
        case -90:
          return {
            top: ["x+1, y-1"],
            right: ["x-1, y+1", "x-1, y-1"],
            bottom: ["x+1, y+1"],
            left: [],
          };
      }
    case "cross":
      return {
        top: ["x+1, y-1", "x, y-2", "x-1, y-1"],
        right: ["x-1, y-1", "x-2, y", "x-1, y+1"],
        bottom: ["x-1, y+1", "x, y+2", "x+1, y+1"],
        left: ["x+1, y+1", "x+2, y", "x+1, y-1"],
      };
    case "bridge":
      return {
        top: ["x, y-2"],
        right: ["x-2, y"],
        bottom: ["x, y+2"],
        left: ["x+2, y"],
      };
  }
}
