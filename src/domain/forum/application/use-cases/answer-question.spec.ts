import { AnswerQuestionUseCase } from './answer-question';
import { AnswersRepository } from '../repositories/answers-repositiry';
import { Answer } from '../../enterprise/entities/answer';

const fakeAnswersRepository: AnswersRepository = {
  create: async (answer: Answer) => {
    return;
  },
};

test('create an answer', async () => {
  const answerQuestion = new AnswerQuestionUseCase(fakeAnswersRepository);
  const answer = await answerQuestion.execute({
    content: 'nova resposta',
    questionId: '1',
    instructorId: '1',
  });

  expect(answer.content).toEqual('nova resposta');
});
