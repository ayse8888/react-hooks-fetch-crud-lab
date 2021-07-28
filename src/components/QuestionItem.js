import React from "react";

function QuestionItem({ question, deleteQuestions }) {
  const { id, prompt, answers, correctIndex } = question;

  const options = answers.map((answer, index) => (
    <option key={index} value={index}>
      {answer}
    </option>
  ));



    function handleChange(e){
      fetch(`http://localhost:4000/questions/${id}`, {
        method: 'PATCH',
        headers: { 'Content-type': 'application/json' },
        Body: JSON.stringify( { "correctIndex": e.target.value} )
      });
    }




  return (
    <li>
      <h4>Question {id}</h4>
      <h5>Prompt: {prompt}</h5>
      <label>
        Correct Answer:
        <select defaultValue={correctIndex} onChange = {handleChange} >{options}</select>
      </label>
      <button onClick={() => deleteQuestions(id)}>Delete Question</button>
    </li>
  );
}

export default QuestionItem;