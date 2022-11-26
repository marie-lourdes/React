import { useContext } from 'react'
import { SurveyContext } from '../../utils/context'
import styled from "styled-components"
const ResultContainer = styled.section`
padding-left: 20px;
.answer{
  font-weight: bold;
  margin-bottom: 5px;
}
`
function Results() {
  const { answers } = useContext(SurveyContext)
  console.log(answers)
  const answerRecap = Object.entries(answers);
  console.log("answerRecap", answerRecap)

  return (
    <ResultContainer>
      <h1>Résultats</h1>
      {answerRecap.map((answer) => <div className="answer">{answer.join(":")}</div>)}

    </ResultContainer>
  )
}

export default Results
