import { Publisher, Subjects, TicketCreatedEvent } from "@jh-ticketing/common";

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
