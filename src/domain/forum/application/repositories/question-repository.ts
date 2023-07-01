import { Question } from '../../enterprise/entities/question';

export interface QuestionsRepository {
  create(question: Question): Promise<void>;
  findBySLug(slug: string): Promise<Question | null>;
  findById(id: string): Promise<Question | null>;
  delete(question: Question): Promise<void>;
}
