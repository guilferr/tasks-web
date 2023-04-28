export function handleDateLocale (date: string): string {
  return date.split('-').reverse().join('/')
}
