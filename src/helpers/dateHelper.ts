export function getDateTimeFromStr(str: string) {
  let s = str.slice(0,19).replace(/\D+/g,'');
  let year = s.slice(0,4);
  let month = s.slice(4,6);
  let day = s.slice(6,8);

  let hour = s.slice(8,10);
  let minute = s.slice(10,12);
  let second = s.slice(12,14);

  return new Date(Number(year), Number(month)-1, Number(day), Number(hour), Number(minute), Number(second));
}
