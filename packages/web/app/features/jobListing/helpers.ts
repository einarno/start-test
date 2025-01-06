export function formatJobDateRange(startDate: Date, endDate: Date) {
  const isSameDay = startDate.toDateString() === endDate.toDateString();

  // Updated options to exclude the year
  const dateOptions: Intl.DateTimeFormatOptions = { month: "short", day: "numeric" };
  const timeOptions: Intl.DateTimeFormatOptions = { hour: "2-digit", minute: "2-digit" };

  if (isSameDay) {
    // Same day: Show date once, include time range
    return `${startDate.toLocaleDateString("en-US", dateOptions)} ${startDate.toLocaleTimeString([], timeOptions)} - ${endDate.toLocaleTimeString([], timeOptions)}`;
  }
  // Different days: Show full dates without times
  return `${startDate.toLocaleDateString("en-US", dateOptions)} - ${endDate.toLocaleDateString("en-US", dateOptions)}`;
}
