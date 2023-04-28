export function handleDateTime (date: Date): string {
  const calendar = date.toLocaleString('pt-BR').split(',')[0]
  const timeArr = date.toLocaleString('pt-BR').split(',')[1].split(':')
  return `${calendar} às ${timeArr[0]}h${timeArr[1]}`
}
