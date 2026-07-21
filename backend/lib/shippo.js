import dotenv from "dotenv"
import Shippo from "shippo"

dotenv.config()

const shippo = new Shippo(process.env.SHIPPO_SECRET_KEY)

export default shippo