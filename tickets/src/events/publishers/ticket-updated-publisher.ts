import { Publisher, Subjects, TicketUpdatedEvent } from "@jh-ticketing/common";

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
