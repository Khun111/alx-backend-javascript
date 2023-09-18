export default function updateUniqueItems(map) {
  if (!(map instanceof Map)) throw Error('Cannot process');
  map.forEach((value, entry) => {
    if (value === 1) map.set(entry, 100);
  });
}
