import elasticsearch from 'elasticsearch'
import { ELASTIC_SEARCH_URL, ELASTIC_SEARCH_INDEX } from './config'

const client = new elasticsearch.Client({
  host: ELASTIC_SEARCH_URL
})

export default async function getPlayResultJSON() {
  try {
    const res: elasticsearch.SearchResponse<any> = await client.search({
      index: ELASTIC_SEARCH_INDEX,
      body: {
        sort: { '@timestamp': { order: 'desc' } },
        size: 100,
        _source: [
          'user.name',
          'user.description',
          'entities.urls',
          'created_at',
          'text'
        ],
        aggs: {},
        query: { match_all: {} }
      }
    })
    return res
  } catch (error) {
    console.trace(error.message)
  }
}
