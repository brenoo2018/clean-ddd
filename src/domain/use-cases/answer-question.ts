import { Answer } from '../entities/answer';
import { AnswersRepository } from '../repositories/answers-repositiry';

interface AnswerQuestionUseCaseRequest {
  instructorId: string;
  questionId: string;
  content: string;
}

export class AnswerQuestionUseCase {
  constructor(private answersRepository: AnswersRepository) {}
  async execute({
    instructorId,
    questionId,
    content,
  }: AnswerQuestionUseCaseRequest) {
    const answer = new Answer(content, instructorId, questionId);

    await this.answersRepository.create(answer);

    return answer;
  }
}
