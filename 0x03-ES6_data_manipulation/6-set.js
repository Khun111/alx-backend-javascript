export default function setFromArray(arr) {
  const mySet = new Set();
  for (const val of arr) mySet.add(val);
  return mySet;
}
