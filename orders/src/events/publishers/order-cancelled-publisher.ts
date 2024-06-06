import { Subjects, Publisher, OrderCancelledEvent } from "@jh-ticketing/common";

export class OrderCancelledPublisher extends Publisher<OrderCancelledEvent> {
  readonly subject = Subjects.OrderCancelled;
}
