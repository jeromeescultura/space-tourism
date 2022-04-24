// Date formatter
export default function dateFormatter(dateString) {
  const options = { year: "numeric" };
  return new Date(dateString).toLocaleDateString(undefined, options);
}
