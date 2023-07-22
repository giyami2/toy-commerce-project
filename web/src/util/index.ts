/**
 * @param num original number
 * @returns number after added comma
 */
export const addComma = (num: number) => {
  const regexp = /\B(?=(\d{3})+(?!\d))/g;
  let _num = num + "";
  return _num.toString().replace(regexp, ",");
};
