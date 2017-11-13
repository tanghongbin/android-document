export function turnToPage (vue, pathObj) {
  let router = vue.$router
  router.push(pathObj)
  router.go(1)
}
