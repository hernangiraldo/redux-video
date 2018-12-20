const leftPath = num => num <= 9 ? `0${num}` : num;

export const formatedTime = sec => {
  let mins = leftPath(parseInt(sec / 60, 10));
  let secs = leftPath(parseInt(sec % 60, 10));
  return `${mins} : ${secs}`;
};
