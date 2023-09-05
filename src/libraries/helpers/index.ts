export const sequence = (steps: any) => {
  return steps.reduce((promise: any, method: any) => {
    return promise.then(() => method())
  }, Promise.resolve(null))
}

export const getImgUrl = (imgPath: string, width = 300) => {
  return `https://image.tmdb.org/t/p/w${width}${imgPath}`
};