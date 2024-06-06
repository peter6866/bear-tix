import {
  OrderCancelledEvent,
  Subjects,
  Listener,
  OrderStatus,
} from "@jh-ticketing/common";
import { queueGroupName } from "./queue-group-name";
import { Message } from "node-nats-streaming";
import { Order } from "../../models/order";

export class OrderCancelledListener extends Listener<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
  queueGroupName = queueGroupName;

  async onMessage(data: OrderCancelledEvent["data"], msg: Message) {
    // Find the order that the event is referring to
    const order = await Order.findOne({
      _id: data.id,
      version: data.version - 1,
    });

    // If no order, throw error
    if (!order) {
      throw new Error("Order not found");
    }

    // Mark the order as cancelled
    order.set({ status: OrderStatus.Cancelled });
    await order.save();

    // Ack the message
    msg.ack();
  }
}
