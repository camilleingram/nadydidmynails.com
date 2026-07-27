import dotenv from "dotenv"
import Shippo from "shippo"

dotenv.config()

const shippo = new Shippo(process.env.SHIPPO_TEST_KEY)

export default shippo