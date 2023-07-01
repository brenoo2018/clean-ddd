import { UniqueEntityID } from '@/core/entities/unique-entity-id';
import { Answer } from '../../enterprise/entities/answer';
import { QuestionsRepository } from '../repositories/question-repository';
import { Question } from '../../enterprise/entities/question';

interface GetQuestionBySlugUseCaseRequest {
  slug: string;
}

interface GetQuestionBySlugUseCaseResponse {
  question: Question;
}

export class GetQuestionBySlugUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}
  async execute({
    slug,
  }: GetQuestionBySlugUseCaseRequest): Promise<GetQuestionBySlugUseCaseResponse> {
    const question = await this.questionsRepository.findBySLug(slug);

    if (!question) {
      throw new Error('Question not found.');
    }

    return { question };
  }
}
