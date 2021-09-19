export const getDataLocal = (key) => {
  try {
    const item = window.localStorage.getItem(key)
    return item !== null ? JSON.parse(item) : ''
  } catch {
    return ''
  }
}

export const listEmpty = (number) => {
  const array = []
  for (let index = 0; index < number; index++) {
    array.push(index)
  }
  return array
} 

export const scrollTop = () => {
  if(window === 'undefined') return
  window.scrollTo(0, 0)
}