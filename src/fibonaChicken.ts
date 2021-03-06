import { ChangeEventHandler, useState } from 'react'

const fibonacciSeries = [
  0,
  1,
  1,
  2,
  3,
  5,
  8,
  13,
  21,
  34,
  55,
  89,
  144,
  233,
  377,
  610,
  987,
  1597,
  2584,
  4181,
  6765,
  10946,
  17711,
  28657,
  46368,
  75025,
  121393,
  196418,
  317811,
  514229,
  832040,
  1346269,
  2178309,
  3524578,
  5702887,
  9227465,
  14930352,
  24157817,
  39088169,
  63245986,
  102334155,
  165580141,
  267914296,
  433494437,
  701408733,
  1134903170,
  1836311903,
  2971215073,
  4807526976,
  7778742049,
  12586269025,
  20365011074,
  32951280099,
  53316291173,
  86267571272,
  139583862445,
  225851433717,
  365435296162,
  591286729879,
  956722026041,
  1548008755920,
  2504730781961,
  4052739537881,
  6557470319842,
  10610209857723,
  17167680177565,
  27777890035288,
  44945570212853,
  72723460248141,
  117669030460994,
  190392490709135,
  308061521170129,
  498454011879264,
  806515533049393,
  1304969544928657,
  2111485077978050,
  3416454622906707,
  5527939700884757,
  8944394323791464,
]

export const useFibonaChicken = (initialPeople = 1) => {
  const [people, setPeople] = useState<number>(initialPeople)
  const [inputValue, setInputValue] = useState(initialPeople.toString())
  const [errMessage, setErrMessage] = useState<string | null>(null)

  const inputOnChange: ChangeEventHandler<HTMLInputElement> = ({ target: { value } }) => {
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

  const updator = (value: number) => () => {
    const newPeople = people + value
    if (isValidFibonaChickenPeople(newPeople)) {
      setErrMessage(null)
      setInputValue(newPeople.toString())
      setPeople(newPeople)
    }
  }

  const reset = () => {
    setErrMessage(null)
    setInputValue('1')
    setPeople(1)
  }

  return {
    chicken: fibonaChicken(people),
    errMessage,

    inputValue,
    inputOnChange,

    increase: updator(1),
    decrease: updator(-1),
    reset,
  }
}

const isValidFibonaChickenPeople = (people: number): boolean => (
  people > 0 && people < Number.MAX_SAFE_INTEGER && Number.isFinite(people)
)

function fibonaChicken(totalPeople: number) {
  if (!isValidFibonaChickenPeople(totalPeople)) {
    return 0
  }
  let totalChicken = 0

  do {
    if (isFibonacciNumber(totalPeople)) {
      return totalChicken + findNearFibonaChicken(totalPeople + 1).chicken
    }

    const { people, chicken } = findNearFibonaChicken(totalPeople)
    totalPeople -= people
    totalChicken += chicken
  } while (true)
}

function findNearFibonaChicken(people: number) {
  if (people === 1 || people === 2) {
    return { people, chicken: 1 }
  }

  const idx = fibonacciSeries.findIndex(x => x >= people) - 1
  return { people: fibonacciSeries[idx], chicken: fibonacciSeries[idx - 1] }
}

function isFibonacciNumber(n: number) {
  return fibonacciSeries.includes(n)
}
