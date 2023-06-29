import { AnswersRepository } from '@/domain/forum/application/repositories/answers-repositiry';
import { Answer } from '@/domain/forum/enterprise/entities/answer';

export class InMemoryAnswerssRepository implements AnswersRepository {
  public items: Answer[] = [];

  async create(answer: Answer) {
    this.items.push(answer);
  }
}
