export function getFormattedDateString () {
  const date = new Date()
  
  return `${getFormattedDate(date)}/${getFormattedMonth(date)}/${getFormattedYear(date)}`
}
export function getFormattedYear (Date) {
  return Date.getFullYear()
}
export function getFormattedMonth (Date) {
  const month = Date.getMonth() + 1
  return month < 10 ? '0' + month : month
}
export function getFormattedDate (Date) {
  const date = Date.getDate()
  return date < 10 ? '0' + date : date
}