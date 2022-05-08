export const DateToString = (date:Date | undefined) => {
  if (date == null)
    return "unavailable";
  return date!.toString().slice(0,10);
}