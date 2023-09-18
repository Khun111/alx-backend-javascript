export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) throw Error('Position outside range');
  const buffer = new ArrayBuffer(length);
  const type = new DataView(buffer);
  type.setInt8(position, value);
  return type;
}
