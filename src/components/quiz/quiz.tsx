import * as React from "react";
import cx from "classnames";
import "./quiz.scss";

export const Quiz = ({ children, question, answer }: any) => {
    const [isAnswered, setAnswered] = React.useState<boolean>(false);
    const [selected, setSelected] = React.useState<string | null>(null);

    const isCorrect = (option: string | React.ReactNode) => {
        return option === answer;
    };

    function checkAnswer(answer: string) {
        //Temporary 
        if (isAnswered) {
            return;
        } else {
            setSelected(answer);
            setAnswered(true);
        }
    }

    //To make it work for markdown 
    function renderAnswers() {
        return React.Children.map(children, (child, key: number) => {
            const { correct, className, children, highlightClass } = child.props;
            return React.cloneElement(child, {
                key: key,
                onClick: () => { checkAnswer(children); },
                //Query props and state then assign classname show if correct
                className: cx([
                    className, 
                    (isAnswered && isCorrect(children) && `correct`), 
                    (isAnswered && !isCorrect(children) && selected === children && `incorrect`)
                ]),
                highlightClass: cx([
                    highlightClass,
                    (isAnswered && 
                        (selected === children? 
                            isCorrect(children) && `quiz__bubble-correct quiz__bubble-selected `: 
                        isCorrect(children) && `quiz__bubble-correct unselected__correct`) 
                    ),
                    (isAnswered && 
                        (selected === children? 
                            !isCorrect(children) && `quiz__bubble-incorrect quiz__bubble-selected `: 
                        !isCorrect(children) && `quiz__bubble-incorrect unselected__incorrect`) 
                    )
                ]),
                correct: correct,
                label: isAnswered? (isCorrect(children)? `✓`: `x`) : key + 1,
            })
        })
    }

    return (
        <div className="quiz__container">
            <div className="quiz__section">
                <div className="quiz__header">
                    <h3 className="quiz__question">{question}</h3>
                </div>
                {status}
                <ul className="quiz">
                    {renderAnswers()}
                </ul>
            </div>
            
        </div>
    )
}

export const Option = ({ children, onClick, correct = false, label, className, highlightClass }: any) => {
    return (
        <li role="button" className={cx([`quiz__item`, className])} data-correct={correct} onClick={onClick}>
            <div className={cx([`quiz__bubble`, highlightClass])}>{label}</div>
            {children}
        </li>
    )
}





export const QuizList = ({ questions, children }: any) => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const [score, setScore] = React.useState(0);
    const [isFinished, setFinished] = React.useState(false);
    const [questionList, setQuestions] = React.useState<any>();
    const currentQuestion = questions[currentIndex];

    const getData = () => {
        const questions = []
        React.Children.map(children,(child:any) => {
            console.log(child.props)
        })
    }
    React.useEffect(() => { getData() } ,[])

    const onNextClicked = (selectedOption) => {
        if (currentQuestion.answer === selectedOption) {
            setScore(score + 1);
        }
        //Check if finished
        if (currentIndex + 1 > questions.length - 1) {
            setFinished(true);
            return;
        }
        setCurrentIndex(currentIndex + 1);
    };

    const resetQuiz = () => {
        setCurrentIndex(0);
        setFinished(false);
        setScore(0);
    };

    return (
        <div>
            {isFinished ? (
                <div className="results">
                    <h3>
                        Your results are out. You scored {score} out of {questions.length}
                    </h3>
                </div>
            ) : (
                // <Question
                //     onNextClicked={onNextClicked}
                //     question={currentQuestion}
                //     key={currentQuestion.id}
                // />
                {children}
            )}
            {isFinished ? (
                <button className="try-again" onClick={resetQuiz}>
                    Try again
                </button>
            ) : (
                <div className="questions-progress">
                    {currentIndex + 1}/{questions.length}
                </div>
            )}
        </div>
    )
};


