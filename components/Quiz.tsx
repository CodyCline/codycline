// import * as React from "react";
// import cx from "classnames";
// import { Icon } from "../ui/icon/icon";
// import "./quiz.scss";

import React, { useRef, useState } from "react";
import styled from "styled-components"
import { truncate } from "./styles/Truncate"
import Confetti from "react-confetti";
import { scrollbar } from "./styles/Scrollbar";
const QuizWrapper = styled.div`
    margin: 36px 0;
`;

const QuizContainer = styled.section`
    background: var(--prism-background);
    border-radius: 5px;
    margin: 0 auto;
    padding: 0 2em;
    border: 1px solid var(--color-border);
    overflow-x: auto;
    ${scrollbar()}
`

const OptionContainer = styled.ul`
    display: flex; 
    flex-direction: column;
    margin: 0 0 1em 0;
    padding: 0;
    list-style: none;
    min-width: 300px;
`;

const AnswerWrapper: any = styled.li`
    margin: .75em 0;
    padding: .25em;
    font-size: 20px;
    background: var(--color-fg-primary);
    border-radius: 5px;
    list-style: none;
    text-align: center;
    border: 1px solid var(--color-border);
    ${(props: any) => props.answered ? "cursor: not-allowed" : "cursor: pointer"};
    &:hover {
        ${(props: any) => !props.answered && "background: var(--color-fg-aux); "}
    }

    ${(props: any) => {
        if (props.answered) {
            if (props.correct) {
                //Show correct 
                return `
                    cursor: not-allowed;
                    background: var(--color-bg-admonition-tip);
                    color: var(--color-greentext);
                    border-color: var(--color-greentext);
                `
            } else if (!props.correct && props.selected) {
                return `
                    cursor: not-allowed;
                    background: var(--color-bg-admonition-danger);
                    color: var(--color-red);
                    border-color: var(--color-red);
                `
            }
        }
    }}

    
`;

export const Answer = ({ onAnswer, children, answered, correct, selected }: any) => (
    <AnswerWrapper role="button" answered={answered} selected={selected} correct={correct} onClick={onAnswer}>
        {children}
    </AnswerWrapper>
);

const PromptWrapper = styled.div`
    padding: 1em 0;
    font-size: 20px;
    min-width: 300px;
`

export const Prompt = ({ children }: any) => (
    <PromptWrapper>{children}</PromptWrapper>
)



export const Quiz = ({ children }: any) => {
    const [answered, setAnswered] = useState(false);
    const [isCorrect, setCorrect] = useState(false);
    const [selected, setSelected] = useState<null | number>(null);
    //Confetti state
    const [confetti, setConfetti] = useState<boolean>(false);
    const quizRef = useRef<any>();


    function handleAnswer(correctChoice: boolean) {
        setAnswered(true);
        if (correctChoice) {
            //Play confetti, correct sound
            setCorrect(true);
            setConfetti(true);
            setTimeout(() => {
                setConfetti(false);
            }, 2500)
        } else {
            setCorrect(false);
            //play incorrect sound 

        }
        //Handle confetti
    }
    return (
        <>
            <QuizWrapper ref={quizRef}>
                {confetti && <Confetti
                    gravity={0.5}
                    width={quizRef.current?.clientWidth}
                    height={quizRef.current?.clientHeight}
                    style={{ top: "inherit", left: "inherit", bottom: "inherit", right: "inherit" }}
                />
                }
                <QuizContainer>
                    {React.Children.map((children), (child: any, idx: number) => {
                        if (child.props.mdxType === "prompt" || child.type.name === "Prompt") {
                            return (
                                <Prompt>{child.props.children}</Prompt>
                            )
                        }
                    })}
                    <OptionContainer>
                        {React.Children.map((children), (child: any, idx: number) => {
                            if (child.props.mdxType === "answer" || child.type.name === "Answer") {
                                return (
                                    <Answer
                                        key={idx}
                                        onAnswer={() => {
                                            if (answered) return;
                                            else {
                                                setSelected(idx);
                                                child.props.correct ? handleAnswer(true) : handleAnswer(false);
                                            }
                                        }}
                                        selected={selected === idx}
                                        answered={answered}
                                        correct={(isCorrect && child.props.correct) || (answered && child.props.correct && !isCorrect)}
                                    >{child.props.children}</Answer>
                                );
                            }
                        })}
                    </OptionContainer>
                </QuizContainer>
            </QuizWrapper>
        </>
    )
}
