import { expect, test } from 'vitest';
import { AnswerQuestionUseCase } from './answer-question';

test('create an answer', () => {
  const answerQuestion = new AnswerQuestionUseCase();
  const answer = answerQuestion.execute({
    content: 'nova resposta',
    questionId: '1',
    instructorId: '1',
  });

  expect(answer.content).toEqual('nova resposta');
});
