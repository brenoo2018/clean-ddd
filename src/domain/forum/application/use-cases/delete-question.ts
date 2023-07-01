import { QuestionsRepository } from '../repositories/question-repository';

interface DeleteQuestionUseCaseRequest {
  authortId: string;
  questionId: string;
}

interface DeleteQuestionUseCaseResponse {}

export class DeleteQuestionUseCase {
  constructor(private questionsRepository: QuestionsRepository) {}
  async execute({
    authortId,
    questionId,
  }: DeleteQuestionUseCaseRequest): Promise<DeleteQuestionUseCaseResponse> {
    const question = await this.questionsRepository.findById(questionId);

    if (!question) {
      throw new Error('Question not found');
    }

    if (authortId !== question.authorId.toString()) {
      throw new Error('Not allowed.');
    }

    await this.questionsRepository.delete(question);

    return {};
  }
}
