import { QuestionsRepository } from '../repositories/question-repository';
import { Question } from '../../enterprise/entities/question';
import { Either, right } from '@/core/either';

interface FetchRecentsQuestionsUseCaseRequest {
  page: number;
}

type FetchRecentsQuestionsUseCaseResponse = Either<
  null,
  {
    questions: Question[];
  }
>;

export class FetchRecentsQuestionsUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}
  async execute({
    page,
  }: FetchRecentsQuestionsUseCaseRequest): Promise<FetchRecentsQuestionsUseCaseResponse> {
    const questions = await this.questionsRepository.findManyRecent({ page });

    return right({ questions });
  }
}
