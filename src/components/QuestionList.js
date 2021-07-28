
import React from "react";
import { useEffect, useState } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList() {

  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then((response ) => response.json())
      .then((data) => {
        console.log(data)
        setQuestions(data);
      });
  }, []);


  function deleteQuestions(id){
    fetch(`http://localhost:4000/questions/${id}`, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' }
    })
    .then(response => response.json())
    .then(() => setQuestions(questions.filter(item => item.id !== id)));
  }

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{questions.map(question => 
        <QuestionItem key={question.id} question={question} deleteQuestions={deleteQuestions} />
       )}
      </ul>
    </section>
  );
}

export default QuestionList;