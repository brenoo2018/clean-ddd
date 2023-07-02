import { QuestionsRepository } from '../repositories/question-repository';
import { AnswersRepository } from '../repositories/answers-repositiry';
import { Question } from '../../enterprise/entities/question';
import { Answer } from '../../enterprise/entities/answer';

interface FetchQuestionAnswersUseCaseRequest {
  questionId: string;
  page: number;
}

interface FetchQuestionAnswersUseCaseResponse {
  answers: Answer[];
}

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

    return { answers };
  }
}
