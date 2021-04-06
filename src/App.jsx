import React, { useState } from 'react'

export function App() {
  const [lastNumbers, setLastNumbers] = useState([])
  const [nextNumber, setNextNumber] = useState('0')

  const handleNumberInput = (event) => {
    if (
      nextNumber === '0' ||
      (isNaN(lastNumbers[lastNumbers.length - 1]) &&
        lastNumbers[lastNumbers.length - 2] === Number(nextNumber))
    ) {
      setNextNumber(`${event.target.innerText}`)
    } else {
      setNextNumber(`${nextNumber}${event.target.innerText}`)
    }
  }

  const handleMath = (event) => {
    console.log(event.target.id)
    if (event.target.id !== 'equals') {
      const trackMath = lastNumbers.concat(Number(nextNumber), event.target.id)
      setLastNumbers(trackMath)
    } else {
      let previousMath = Number(lastNumbers[0])
      console.log(lastNumbers)
      for (let i = 0; i < lastNumbers.length; i++) {
        switch (lastNumbers[i]) {
          case 'add':
            previousMath =
              previousMath + (Number(lastNumbers[i + 1]) || Number(nextNumber))
            break
          case 'subtract':
            previousMath =
              previousMath - (Number(lastNumbers[i + 1]) || Number(nextNumber))
            break
          case 'multiply':
            previousMath =
              previousMath * (Number(lastNumbers[i + 1]) || Number(nextNumber))
            break
          case 'divide':
            previousMath =
              previousMath / (Number(lastNumbers[i + 1]) || Number(nextNumber))
            break
          default:
            break
        }
      }
      setNextNumber(previousMath.toString())
    }
  }

  const handleClear = () => {
    setLastNumbers([])
    setNextNumber('0')
  }
  return (
    <main>
      <h1 id="display">{nextNumber}</h1>
      <p id="clear" className="buttons" onClick={handleClear}>
        AC
      </p>
      <p
        id="multiply"
        className="buttons"
        onClick={(event) => handleMath(event)}
      >
        &#215;
      </p>
      <p id="divide" className="buttons" onClick={(event) => handleMath(event)}>
        &#247;
      </p>
      <p id="add" className="buttons" onClick={(event) => handleMath(event)}>
        &#43;
      </p>
      <p
        id="subtract"
        className="buttons"
        onClick={(event) => handleMath(event)}
      >
        &#8722;
      </p>
      <p id="equals" className="buttons" onClick={(event) => handleMath(event)}>
        &#61;
      </p>
      <p
        id="zero"
        className="numbers"
        onClick={(event) => handleNumberInput(event)}
      >
        0
      </p>
      <p
        id="one"
        className="numbers"
        onClick={(event) => handleNumberInput(event)}
      >
        1
      </p>
      <p
        id="two"
        className="numbers"
        onClick={(event) => handleNumberInput(event)}
      >
        2
      </p>
      <p
        id="three"
        className="numbers"
        onClick={(event) => handleNumberInput(event)}
      >
        3
      </p>
      <p
        id="four"
        className="numbers"
        onClick={(event) => handleNumberInput(event)}
      >
        4
      </p>
      <p
        id="five"
        className="numbers"
        onClick={(event) => handleNumberInput(event)}
      >
        5
      </p>
      <p
        id="six"
        className="numbers"
        onClick={(event) => handleNumberInput(event)}
      >
        6
      </p>
      <p
        id="seven"
        className="numbers"
        onClick={(event) => handleNumberInput(event)}
      >
        7
      </p>
      <p
        id="eight"
        className="numbers"
        onClick={(event) => handleNumberInput(event)}
      >
        8
      </p>
      <p
        id="nine"
        className="numbers"
        onClick={(event) => handleNumberInput(event)}
      >
        9
      </p>
      <p
        id="decimal"
        className="numbers"
        onClick={(event) => handleNumberInput(event)}
      >
        .
      </p>
    </main>
  )
}
