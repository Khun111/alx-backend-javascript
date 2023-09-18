export default function cleanSet(set, startString) {
  const result = [];
  set.forEach((str) => {
    if (startString !== '') {
      if (str.startsWith(startString)) {
        result.push(str.slice(startString.length));
      }
    }
  });
  return result.join('-');
}
