import { format as dateFnsFormat, isValid } from "date-fns";

/**
 * Formats a date to a string in MM/DD/YYYY format.
 * @param {Date} dateToFormat - The date to format.
 * @returns {string} - The formatted date or "N/A" if invalid.
 */
export const formatDate = (dateToFormat?: Date): string => {
  if (!dateToFormat || !isValid(dateToFormat)) return "N/A";

  const formattedDate = dateFnsFormat(dateToFormat, "MM/dd/yyyy");
  return formattedDate;
};

/**
 * Formats a date to a string in MM/DD/YYYY at HH:MM AM/PM format.
 * @param {Date} date - The date to format.
 * @returns {string} - The formatted date and time or "N/A" if invalid.
 */
export const formatDateTime = (date?: Date): string => {
  if (!date || !isValid(date)) return "N/A";

  const formattedDate = dateFnsFormat(date, "MM/dd/yyyy");
  const formattedTime = dateFnsFormat(date, "hh:mm a");
  
  return `${formattedDate} at ${formattedTime}`;
};
