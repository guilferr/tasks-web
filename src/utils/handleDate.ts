export function handleDate (date: Date): string {
  return date.toLocaleString('pt-BR').split(',')[0].split('/').reverse().join('-')
}
