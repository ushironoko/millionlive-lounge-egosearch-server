import { SearchResponse } from 'elasticsearch'
import getPlayResultJSON from './elasticsearchapi'
import postDiscord from './postdiscord'
import filter from './filter'

async function main() {
  let res: SearchResponse<any> | undefined = await getPlayResultJSON()
  const filteredData: SearchResponse<any> | undefined = await filter(res)
  return await postDiscord(filteredData)
}

main().then(msg => console.log(msg))
