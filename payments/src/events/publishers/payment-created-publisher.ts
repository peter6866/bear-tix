import { Publisher, PaymentCreatedEvent, Subjects } from "@jh-ticketing/common";

export class PaymentCreatedPublisher extends Publisher<PaymentCreatedEvent> {
  readonly subject = Subjects.PaymentCreated;
}
