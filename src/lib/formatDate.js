export default function formatDate(date = new Date()) {
  if (date) {
      const dateObj = new Date(date);
      const options = {
        year: "numeric",
        month: "short",
        day: "2-digit",
      };
      return new Intl.DateTimeFormat("en-US", options).format(dateObj);
    }
}
