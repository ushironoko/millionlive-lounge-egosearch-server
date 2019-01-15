export default async function compile(cond: string[][]) {
  const joinAnd = function(arr: string[]) {
    return '^(?=[\\s\\S]*' + arr.join(')(?=[\\s\\S]*') + ')'
  }
  const joinOr = function(arr: string[]) {
    return '(?:' + arr.join('|') + ')'
  }
  const escape = function(str: string) {
    return str.replace(/(?=[(){}\[\].*\\^$?])/, '\\')
  }
  let rx = joinOr(
    cond.map((inner: string[]) => {
      return joinAnd(inner.map(escape))
    })
  )
  rx = await rx.replace(/=\[\\s\\S\]\*-/g, '![\\s\\S]*')
  return new RegExp(rx)
}
