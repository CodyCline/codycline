// import * as React from "react";
// import cx from "classnames";
// import { Icon } from "../ui/icon/icon";
// import "./quiz.scss";

// export const Quiz = ({ children, question, answer }: any) => {
//     const [isAnswered, setAnswered] = React.useState<boolean>(false);
//     const [selected, setSelected] = React.useState<string | null>(null);

//     const isCorrect = (option: string | React.ReactNode) => {
//         return option === answer;
//     };

//     function checkAnswer(answer: string) {
//         //Temporary 
//         if (isAnswered) {
//             return;
//         } else {
//             setSelected(answer);
//             setAnswered(true);
//         }
//     }

//     //To make it work for markdown 
//     function renderAnswers() {
//         return React.Children.map(children, (child, key: number) => {
//             const { correct, className, children, highlightClass } = child.props;
//             return React.cloneElement(child, {
//                 key: key,
//                 onClick: () => { checkAnswer(children); },
//                 //Query props and state then assign classname show if correct or not
//                 className: cx([
//                     className, 
//                     (isAnswered && isCorrect(children) && `correct`), 
//                     (isAnswered && !isCorrect(children) && selected === children && `incorrect`)
//                 ]),
//                 highlightClass: cx([
//                     highlightClass,
//                     (isAnswered && 
//                         (selected === children? 
//                             isCorrect(children) && `quiz__bubble-correct quiz__bubble-selected `: 
//                         isCorrect(children) && `quiz__bubble-correct unselected__correct`) 
//                     ),
//                     (isAnswered && 
//                         (selected === children? 
//                             !isCorrect(children) && `quiz__bubble-incorrect quiz__bubble-selected `: 
//                         !isCorrect(children) && `quiz__bubble-incorrect unselected__incorrect`) 
//                     )
//                 ]),
//                 correct: correct,
//                 label: isAnswered? (
//                     <Icon 
//                         noTitle
//                         name={isCorrect(children)? `check`: `close`} 
//                         className={cx([isCorrect(children)? `quiz__bubble-correct` : `quiz__bubble-incorrect`])} 
//                     />
//                 ) : (key + 1),
//             })
//         })
//     }

//     return (
//         <div className="quiz__container">
//             <div className="quiz__section">
//                 <div className="quiz__header">
//                     <p className="quiz__question">{question}</p>
//                 </div>
//                 <ul className="quiz">
//                     {renderAnswers()}
//                 </ul>
//             </div>
            
//         </div>
//     )
// }

// export const Option = ({ children, onClick, correct = false, label, className, highlightClass }: any) => {
//     return (
//         <li role="button" className={cx([`quiz__item`, className])} data-correct={correct} onClick={onClick}>
//             <div className={cx([`quiz__bubble`, highlightClass])}>{label}</div>
//             {children}
//         </li>
//     )
// }


export const Quiz = () => (<div></div>)