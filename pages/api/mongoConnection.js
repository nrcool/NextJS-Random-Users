import {MongoClient} from "mongodb"

const url = process.env.NEXT_APP_MONGI_URI
const client = new MongoClient(url)

export default client