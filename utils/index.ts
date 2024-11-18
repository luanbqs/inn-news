import { DateOptions } from "@/app/contexts/SearchContext";

export function getFromDate(fromDate: DateOptions): string {
  const now = new Date();

  switch (fromDate) {
    case "Past 24 hours":
      now.setDate(now.getDate() - 1);
      break;
    case "Past week":
      now.setDate(now.getDate() - 7);
      break;
    case "Past year":
      now.setFullYear(now.getFullYear() - 1);
      break;
    case "Anytime":
      return "";
    default:
      throw new Error(
        "Invalid period provided. Use 'Past 24 hours', 'Past week', or 'Past year'."
      );
  }

  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0"); // Month is 0-based
  const day = String(now.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}
