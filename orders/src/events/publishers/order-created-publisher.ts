import { Publisher, OrderCreatedEvent, Subjects } from "@jh-ticketing/common";

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  readonly subject = Subjects.OrderCreated;
}
