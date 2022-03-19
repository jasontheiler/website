export const formatDate = (date: Date | string) =>
  new Date(date).toLocaleString("en-US", {
    timeZone: "UTC",
    dateStyle: "long",
  });
