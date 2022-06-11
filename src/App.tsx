import { ChangeEventHandler, CSSProperties, useState } from 'react'

import { Header, HorizontalDevider } from './components'
import { isValidFibonaChickenPeople, useFibonaChicken } from './fibonaChicken'

const styles: Record<string, CSSProperties> = {
  main: {
    margin: '0.5rem auto',
    width: '80%',
  },
  section: {
    textAlign: 'center',
    fontSize: '1.5rem',
  },
  input: {
    maxWidth: '20%',
    fontSize: 'inherit',
  },
  arrow: {
    marginLeft: '0.5rem',
    cursor: 'pointer',
  },
}

const App = () => {
  const queryParams = new URLSearchParams(window.location.search)
  const initialPeople = Number(queryParams.get('people')) || 1

  const { people, chicken, setPeople } = useFibonaChicken(initialPeople)
  const [inputValue, setInputValue] = useState(initialPeople.toString())
  const [errMessage, setErrMessage] = useState<string | null>(null)

  const onChange: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
    if (value.length > 12) {
      setErrMessage('자네, 당근마켓에 지원해보겠나?ㅋ')
      return
    }
    setInputValue(value)

    const newPeople = Number(value)
    if (!isValidFibonaChickenPeople(newPeople)) {
      setErrMessage('..네??')
      return
    }
    setErrMessage(null)
    setPeople(newPeople)
  }
  const increase = (value: number) => () => {
    const newPeople = people + value
    if (isValidFibonaChickenPeople(newPeople)) {
      setErrMessage(null)
      setInputValue(newPeople.toString())
      setPeople(newPeople)
    }
  }

  return (
    <>
      <Header>피보나치킨 계산기</Header>
      <HorizontalDevider />
      <main style={styles.main}>
        <section style={styles.section}>
          <input
            style={styles.input}
            inputMode="numeric"
            type="number"
            value={inputValue}
            onChange={onChange}
          />명이면..
          <br />
          {errMessage ? '🤔' : chicken}닭! 🐔
          <span style={styles.arrow} onClick={increase(1)}>&#9650;</span>
          <span style={styles.arrow} onClick={increase(-1)}>&#9660;</span>
          <p>{errMessage || (chicken < 10000 ? '🐔'.repeat(chicken) : '이정도면 🐔이 모자라지 않을까요...?')}</p>
        </section>
        <br />
        <details>
          <summary>세상 만사..</summary>
          <p>
            모든 것의 균형은 황금 비율에서 그 해답을 찾을 수 있고, 이를 수학적으로 풀어낸것이 바로 피보나치 수열이니라.<br />
            일찍이 선지자가 있어, 치킨과 피보나치 수열의 관계를 밝힌 자들이 있으니 그들의 끝을 모르는 탐구 정신과 널리 인간과 치킨을 이롭게 하려는 마음을 높이 사,<br />
            내 잠시 짬을 내어 허접한 코드질을 하였으니 이를 <strong>피보나치킨</strong> 계산기라고 부르도록 하겠다.<br />
            <br />
            출처: <a href="https://fibonachicken.herokuapp.com/" target="_blank" rel="noreferrer">https://fibonachicken.herokuapp.com/</a>
          </p>
        </details>
      </main>
    </>
  )
}

export default App
