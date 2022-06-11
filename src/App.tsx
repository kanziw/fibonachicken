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
  },
  input: {
    maxWidth: '20%',
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

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setInputValue(e.target.value)

    const newPeople = Number(e.target.value)
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
      <Header>피보나치킨</Header>
      <HorizontalDevider />
      <main style={styles.main}>
        <section style={styles.section}>
          <input
            style={styles.input}
            inputMode="numeric"
            type="number"
            value={inputValue}
            onChange={onChange}
          />인 몇닭?
          {/* <span style={styles.arrow}>&#42779;</span><span style={styles.arrow}>&#42780;</span> */}
          <span style={styles.arrow} onClick={increase(1)}>&#9650;</span>
          <span style={styles.arrow} onClick={increase(-1)}>&#9660;</span>
          <p>{errMessage || `🐔 ${people}인 ${chicken}닭 🐔`}</p>
        </section>
        <br />
        <details>
          <summary>ㅋ</summary>
          <p>
            세상 만사 모든 것의 균형은 황금 비율에서 그 해답을 찾을 수 있고, 이를 수학적으로 풀어낸것이 바로 피보나치 수열이니라.<br />
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
