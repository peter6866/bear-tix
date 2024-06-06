import {
  Subjects,
  Publisher,
  ExpirationCompleteEvent,
} from "@jh-ticketing/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
