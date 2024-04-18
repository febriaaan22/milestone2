export const timeAgo = (dateString: string): string => {
  const currentDate = new Date();
  const date = new Date(dateString);

  const seconds = Math.floor((currentDate.getTime() - date.getTime()) / 1000);

  const intervals: Array<[number, string]> = [
    [Math.floor(seconds / 31536000), "year"],
    [Math.floor(seconds / 2592000), "month"],
    [Math.floor(seconds / 86400), "day"],
    [Math.floor(seconds / 3600), "hour"],
    [Math.floor(seconds / 60), "minute"],
  ];

  for (let i = 0; i < intervals.length; i++) {
    const [interval, unit] = intervals[i];
    if (interval > 1) {
      return `${interval} ${unit}${interval !== 1 ? "s" : ""} ago`;
    } else if (interval === 1) {
      return `1 ${unit} ago`;
    }
  }

  return "Just now";
};
