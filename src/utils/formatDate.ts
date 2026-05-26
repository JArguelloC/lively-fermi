import { format, formatDistanceToNow, isValid, parseISO } from 'date-fns';

/**
 * Formats a date into an absolute string format (e.g., "MMM d, yyyy").
 * @param date - The date to format (Date object or ISO string)
 * @param formatString - The date-fns format string (default: 'MMM d, yyyy')
 * @returns The formatted date string
 */
export function formatAbsoluteDate(date: Date | string, formatString: string = 'MMM d, yyyy'): string {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  if (!isValid(dateObj)) return '';
  return format(dateObj, formatString);
}

/**
 * Formats a date into a relative string format (e.g., "2 days ago").
 * @param date - The date to format (Date object or ISO string)
 * @returns The relative date string
 */
export function formatRelativeDate(date: Date | string): string {
  const dateObj = typeof date === 'string' ? parseISO(date) : date;
  if (!isValid(dateObj)) return '';
  return formatDistanceToNow(dateObj, { addSuffix: true });
}
