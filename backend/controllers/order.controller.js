import Order from "../models/order.model.js";

export const createOrder = async (req, res) => {
  try {
    const { cart, total, subtotal, coupon } = req.body;
    const userId = req.user._id;

    const order = await Order.create({
      user: userId,
      cart,
      totalAmount: total,
      subtotal,
      coupon,
      createdAt: new Date(),
    });

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: "Failed to create order", error: error.message });
  }
};