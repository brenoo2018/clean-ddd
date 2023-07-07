import { QuestionsRepository } from '../repositories/question-repository';
import { AnswersRepository } from '../repositories/answers-repositiry';
import { Question } from '../../enterprise/entities/question';
import { Answer } from '../../enterprise/entities/answer';
import { Either, right } from '@/core/either';

interface FetchQuestionAnswersUseCaseRequest {
  questionId: string;
  page: number;
}

type FetchQuestionAnswersUseCaseResponse = Either<
  null,
  {
    answers: Answer[];
  }
>;

export class FetchQuestionAnswersUseCase {
  constructor(private answersRepository: AnswersRepository) {}
  async execute({
    page,
    questionId,
  }: FetchQuestionAnswersUseCaseRequest): Promise<FetchQuestionAnswersUseCaseResponse> {
    const answers = await this.answersRepository.findManyByQuestionId(
      questionId,
      { page }
    );

    return right({ answers });
  }
}
