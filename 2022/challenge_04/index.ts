type Box = {
  l: number;
  w: number;
  h: number;
};

function fitsInOneBox(boxes: Box[]) {
  const sortedBoxesByLength = [...boxes].sort((a, b) => a.l - b.l);

  const fittingBoxes = sortedBoxesByLength.every((box, index) => {
    if (index === sortedBoxesByLength.length - 1) return true;
    const nextBox = sortedBoxesByLength[index + 1];
    return box.l < nextBox.l && box.w < nextBox.w && box.h < nextBox.h;
  });

  return fittingBoxes;
}
