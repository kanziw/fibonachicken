import { ChangeEventHandler, useState } from 'react'

import { Header } from './Components/Header'
import { useFibonaChicken } from './fibonaChicken'

const App = () => {
  const queryParams = new URLSearchParams(window.location.search)
  const initialPeople = Number(queryParams.get('people')) || 1

  const [errMessage, setErrMessage] = useState<string | null>(null)
  const { people, chicken, setPeople } = useFibonaChicken(initialPeople)

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const newPeople = Number(e.target.value)
    if (newPeople < 1 || Number.isNaN(newPeople)) {
      setErrMessage('..네??')
      return
    }
    setErrMessage(null)
    setPeople(newPeople)
  }

  return (
    <>
      <Header>피보나치킨</Header>
      <input type="number" defaultValue={people} onChange={onChange} />
      <p>{errMessage || `${people}명이면 ${chicken}닭이죠!`}</p>
      <br />
      <details>
        <summary>ㅋ</summary>
        <p>
          세상 만사 모든 것의 균형은 황금 비율에서 그 해답을 찾을 수 있고, 이를 수학적으로 풀어낸것이 바로 피보나치 수열이니라.<br />
          일찍이 선지자가 있어, 치킨과 피보나치 수열의 관계를 밝힌 자들이 있으니 그들의 끝을 모르는 탐구 정신과 널리 인간과 치킨을 이롭게 하려는 마음을 높이 사,<br />
          내 잠시 짬을 내어 허접한 코드질을 하였으니 이를 <strong>피보나치킨</strong> 계산기라고 부르도록 하겠다.
          <br />
          출처: <a href="https://fibonachicken.herokuapp.com/" target="_blank" rel="noreferrer">https://fibonachicken.herokuapp.com/</a>
        </p>
      </details>
    </>
  )
}

export default App
