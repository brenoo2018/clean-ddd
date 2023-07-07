import { Entity } from '@/core/entities/entity';
import { UniqueEntityID } from '@/core/entities/unique-entity-id';

interface AnswerAttachmentProps {
  answerId: UniqueEntityID;
  attatchmentId: UniqueEntityID;
}

export class AnswerAttachment extends Entity<AnswerAttachmentProps> {
  get answerId() {
    return this.props.answerId;
  }

  get attatchmentId() {
    return this.props.attatchmentId;
  }

  static create(props: AnswerAttachmentProps, id?: UniqueEntityID) {
    const answerAttachment = new AnswerAttachment(props, id);

    return answerAttachment;
  }
}
