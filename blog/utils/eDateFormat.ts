//https://www.gnu.org/software/pspp/manual/html_node/Time-and-Date-Formats.html
//Takes in an ISO string formatted date and removes the hh::mm::ss then replaces the hyphens "-" with dots "."
//Example 1970-01-01T00:00:00Z => 1970.01.01
export const eDateFormat = (date: Date): string => {
    const isoString = date.toISOString();
    const removeMTime = isoString.split(/[T ]/i, 1)[0];
    return removeMTime.split("-").reverse().join(".");
}
