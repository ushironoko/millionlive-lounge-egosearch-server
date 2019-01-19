import { SearchResponse } from 'elasticsearch'
import compile from './compile'

export default async function filter(data: SearchResponse<any> | undefined) {
  if (typeof data === 'undefined' || data.hits.hits.length === 0) {
    throw new Error('data is undefined')
  } else {
    let filterWord = [['ミリオン'], ['ミリシタ'],['アイマス'],['アイドルマスター'],['ミリオンライブ']]
    const matcher = await compile(filterWord)

    data.hits.hits = data.hits.hits.filter(el => {
      let result: boolean = false

      if (el._source.user.description) {
        result = matcher.test(el._source.user.description)
      }
      return result
    })

    return data
  }
}
