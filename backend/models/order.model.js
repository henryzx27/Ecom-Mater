// import mongoose from "mongoose";

// const orderSchema = new mongoose.Schema(
// 	{
// 		user: {
// 			type: mongoose.Schema.Types.ObjectId,
// 			ref: "User",
// 			required: true,
// 		},
// 		products: [
// 			{
// 				product: {
// 					type: mongoose.Schema.Types.ObjectId,
// 					ref: "Product",
// 					required: true,
// 				},
// 				quantity: {
// 					type: Number,
// 					required: true,
// 					min: 1,
// 				},
// 				price: {
// 					type: Number,
// 					required: true,
// 					min: 0,
// 				},
// 			},
// 		],
// 		totalAmount: {
// 			type: Number,
// 			required: true,
// 			min: 0,
// 		},
// 		stripeSessionId: {
// 			type: String,
// 			unique: true,
// 		},
// 	},
// 	{ timestamps: true }
// );

// const Order = mongoose.model("Order", orderSchema);

// export default Order;


// ? OLD

import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  cart: { type: Array, required: true },
  totalAmount: { type: Number, required: true },
  subtotal: { type: Number, required: true },
  coupon: { type: Object },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("Order", orderSchema);