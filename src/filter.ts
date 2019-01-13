import { SearchResponse } from 'elasticsearch'

export default async function filter(data: SearchResponse<any> | undefined) {
  if (typeof data === 'undefined') {
    throw new Error('data is undefined')
  } else {
    const filterWord = 'ミリシタ'

    data.hits.hits = data.hits.hits.filter(el => {
      return el._source.user.description.indexOf(filterWord) != -1
    })

    return data
  }
}
