export function getLocalTimeFromTimezone(timezoneOffset: number): string {

    if (timezoneOffset === undefined) {
        return "Invalid timezone"; // Return a fallback string if undefined
      }
    // Get the current UTC time
    const currentUtcTime = new Date();
  
    // Convert the offset from seconds to milliseconds
    const offsetMilliseconds = timezoneOffset * 1000;
  
    // Calculate the local time by applying only the timezone offset
    const localTime = new Date(currentUtcTime.getTime() + offsetMilliseconds);
  
    // Format the local time as a string
    return localTime.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true,
    });
  }