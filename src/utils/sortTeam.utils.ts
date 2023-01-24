export function distribute(arr: Array<any>) {
  arr.sort((a, b) => a.level - b.level);
  const teamA = [];
  const teamB = [];
  let sumA = 0;
  let sumB = 0;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < arr.length; i++) {
    if (!sumA || sumA === sumB) {
      teamA.push(arr[i]);
      sumA += arr[i].level;
    } else if (sumA < sumB) {
      teamA.push(arr[i]);
      sumA += arr[i].level;
    } else if (sumB < sumA) {
      teamB.push(arr[i]);
      sumB += arr[i].level;
    }
  }

  return [teamA, teamB];
}
