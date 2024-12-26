import express from "express"
import { addToCart,getUserCart,UpdateCart } from "../controllers/cartControllers.js"
import authUser from "../middleware/auth.js"

const cartRouter = express.Router()

cartRouter.post("/get",authUser,getUserCart)
cartRouter.post("/add",authUser,addToCart)
cartRouter.post("/update",authUser,UpdateCart)

export default cartRouter