export const balancedFunction = (level: any) => {
  let balanced;
  switch (level) {
    case 'INICIANTE':
      balanced = 1;
      break;
    case 'MEDIANO':
      balanced = 2;
      break;
    case 'BOM':
      balanced = 3;
      break;
    case 'MUITO_BOM':
      balanced = 4;
      break;
    case 'CRAQUE':
      balanced = 5;
      break;
    default:
      break;
  }
  return balanced;
};
