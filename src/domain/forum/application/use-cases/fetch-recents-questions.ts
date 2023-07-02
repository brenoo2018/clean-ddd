import { QuestionsRepository } from '../repositories/question-repository';
import { Question } from '../../enterprise/entities/question';

interface FetchRecentsQuestionsUseCaseRequest {
  page: number;
}

interface FetchRecentsQuestionsUseCaseResponse {
  questions: Question[];
}

export class FetchRecentsQuestionsUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}
  async execute({
    page,
  }: FetchRecentsQuestionsUseCaseRequest): Promise<FetchRecentsQuestionsUseCaseResponse> {
    const questions = await this.questionsRepository.findManyRecent({ page });

    return { questions };
  }
}
