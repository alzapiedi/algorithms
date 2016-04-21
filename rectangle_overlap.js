var r1 = {
    leftX: 1,
    bottomY: 1,
    width: 5,
    height: 3,
};
var r2 = {
    leftX: 3,
    bottomY: 2,
    width: 5,
    height: 5,
};
function overlap(r1, r2) {
    return !(r1.leftX + r1.width < r2.leftX ||
      r1.leftX > r2.leftX + r2.width ||
      r1.bottomY > r2.bottomY + r2.height ||
      r1.bottomY + r1.height < r2.bottomY);
}
function rect(r1,r2) {
    if (overlap(r1, r2)) {
    	var leftX = Math.max(r1.leftX, r2.leftX);
    	var bottomY = Math.max(r1.bottomY, r2.bottomY);
    	var height = Math.min(r1.bottomY + r1.height, r2.bottomY + r2.height) - bottomY;
    	var width = Math.min(r1.leftX + r2.width, r2.leftX + r2.width) - leftX;
      return {
        leftX: leftX,
        bottomY: bottomY,
        height: height,
        width: width
      }
    }
}

console.log(rect(r1,r2));
