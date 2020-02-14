import { format } from "date-fns";

export function formatDate(date: string) {
  return format(new Date(date), "MMMM, dd yyyy");
}

export function formatDateToHourMinutes(date: string) {
  return format(new Date(date), "hh:mm aa");
}

export function formateCompleteData(date: string) {
  return format(new Date(date), "MMMM, dd yyyy, hh:mm aa");
}
