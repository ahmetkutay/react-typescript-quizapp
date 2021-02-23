import React from 'react';
//types
import { AnswerObject } from '../App';
//styles
import { Wrapper, ButtonWrapper } from './QuestionCart.styles';

type Props = {
    question: string;
    answers: string[];
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userAnswer: AnswerObject | undefined;
    questionNum: number;
    totalQuestion: number;
}

const QuestionCard: React.FC<Props> = ({ question, answers, callback, questionNum, totalQuestion, userAnswer }) => (
    <Wrapper>
        <p className="number">
            Question:{questionNum} / {totalQuestion}
        </p>
        <p dangerouslySetInnerHTML={{ __html: question }} />
        <div>
            {answers.map(answer => (
                <ButtonWrapper key={answer} correct={userAnswer?.correctAnswer === answer} userClicked={userAnswer?.answer === answer} >
                    <button disabled={!!userAnswer} value={answer} onClick={callback}>
                        <span dangerouslySetInnerHTML={{ __html: answer }} />
                    </button>
                </ButtonWrapper>
            ))}
        </div>
    </Wrapper>
)

export default QuestionCard;