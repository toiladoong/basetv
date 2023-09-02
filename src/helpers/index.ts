export const sequence = (steps: any) => {
  return steps.reduce((promise: any, method: any) => {
    return promise.then(() => method())
  }, Promise.resolve(null))
}