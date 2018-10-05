let amazing = (number) => {
  return [...number.toString()].map(Number).reduce((a, b) => a + b).toString().includes('9') ? `${number} Amazing? True` : `${number} Amazing? False`
}
