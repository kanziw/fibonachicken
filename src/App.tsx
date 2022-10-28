import './styles/app.css'

import { CSSProperties, useEffect, useState } from 'react'
import { useDoubleTap } from 'use-double-tap'

import { ReactComponent as Twitter } from './assets/twitter.svg'
import { Debugger, Header, HorizontalDevider } from './components'
import { useFibonaChicken } from './fibonaChicken'
import { bridge } from './karrotmini'

const styles: Record<string, CSSProperties> = {
  main: {
    margin: '1.5rem auto',
    width: '80%',
  },
  calculator: {
    textAlign: 'center',
    fontSize: '1.8rem',
    lineHeight: '5rem',
  },
  input: {
    maxWidth: '50%',
    fontSize: 'inherit',
  },
  arrow: {
    marginLeft: '0.5rem',
    cursor: 'pointer',
  },
  chickens: {
    textAlign: 'center',
    fontSize: '1.8rem',
  },
  description: {
    lineHeight: '1.5rem',
  },
  reference: {
    margin: '0 0.5rem',
    fontSize: '0.8rem',
    lineHeight: '1rem',
    fontStyle: 'italic',
  },
  twitter: {
    width: '1rem',
  },
}

const App = () => {
  const queryParams = new URLSearchParams(window.location.search)
  const initialPeople = Number(queryParams.get('people')) || 1
  const { chicken, inputValue, errMessage, inputOnChange, increase, decrease, reset } = useFibonaChicken(initialPeople)
  const [isDebuggerOn, setIsDebuggerOn] = useState(false)

  const { onClick: toggleDebugger } = useDoubleTap(() => {
    setIsDebuggerOn(!isDebuggerOn)
  })

  useEffect(() => {
    bridge.getKarrotUser().then(karrotUser => {
      console.log('', karrotUser)

      bridge.requestUserConsent({
        scopes: ['account/profile'],
      }).then(console.log)
    })
  })

  return (
    <>
      <Header><span onClick={reset}>피보나치킨 계산기</span></Header>
      <HorizontalDevider />
      <main style={styles.main}>
        <section style={styles.calculator}>
          <input
            style={styles.input}
            inputMode="numeric"
            type="number"
            value={inputValue}
            onChange={inputOnChange}
          />명이면..
          <br />
          {errMessage ? '🤔' : chicken}닭! <span onClick={toggleDebugger}>🐔</span>
          <span style={styles.arrow} onClick={increase}>&#9650;</span>
          <span style={styles.arrow} onClick={decrease}>&#9660;</span>
        </section>
        <section style={styles.chickens}>
          <p>{errMessage || (chicken < 10000 ? '🐔'.repeat(chicken) : '이정도면 🐔이 모자라지 않을까요...?')}</p>
        </section>
        <br />
        <section style={styles.description}>
          <details>
            <summary>세상 만사..</summary>
            <p>모든 것의 균형은 황금 비율에서 그 해답을 찾을 수 있고, 이를 수학적으로 풀어낸것이 바로 피보나치 수열이니라.</p>
            <p>일찍이 선지자가 있어, 치킨과 피보나치 수열의 관계를 밝힌 자들이 있으니 그들의 끝을 모르는 탐구 정신과 널리 인간과 치킨을 이롭게 하려는 마음을 높이 사,</p>
            <p>내 잠시 짬을 내어 허접한 코드질을 하였으니 이를 <strong>피보나치킨</strong> 계산기라고 부르도록 하겠다.</p>
            <p style={styles.reference}>
              원작자(<a href="https://twitter.com/scari_net" target="_blank" rel="noreferrer">@scari_net</a><Twitter style={styles.twitter} />)의 동의를 얻어 게시하였습니다 :)
              from <a href="https://fibonachicken.herokuapp.com/" target="_blank" rel="noreferrer">https://fibonachicken.herokuapp.com/</a>
            </p>
          </details>
        </section>
      </main>
      <Debugger isDebuggerOn={isDebuggerOn} />
    </>
  )
}

export default App
