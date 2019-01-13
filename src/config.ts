import * as dotenv from 'dotenv'
dotenv.config()

export const ELASTIC_SEARCH_URL = process.env.ELASTIC_SEARCH_URL
export const ELASTIC_SEARCH_INDEX = process.env.ELASTIC_SEARCH_INDEX
export const IMAGES_DIR_PATH = process.env.IMAGES_DIR_PATH
export const DISCORD_WEBHOOK_URL = process.env.DISCORD_WEBHOOK_URL
