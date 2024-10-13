export const formatNumber = (number: number) =>
  String(number).replace(/(.)(?=(\d{3})+$)/g, '$1 ');
