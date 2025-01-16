export function getDateFromWeatherData(unixTimestamp: number): string {
  if (unixTimestamp === undefined) {
    return "Invalid date"; // Handle undefined date
  }

    const date = new Date(unixTimestamp * 1000); // Convert seconds to milliseconds
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }