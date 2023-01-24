/* eslint-disable no-param-reassign */
export const shuffle = (array: Array<any>): Array<any> => {
  let currentIndex = array.length;
  let randomIndex;
  let temp;
  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    // eslint-disable-next-line no-plusplus
    currentIndex--;
    temp = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temp;
  }

  return array;
};
