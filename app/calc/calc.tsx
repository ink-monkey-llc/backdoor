'use client'
import React, { useState } from 'react'
import CalcBtn from './calc-btn'
import { calcData } from '@/lib/calc-data'

const Calc: React.FC = () => {
  const [screenValue, setScreenValue] = useState<string>('0')
  const [memory, setMemory] = useState<number>(0)

  const appendToScreen = (value: string) => {
    if (screenValue === '0' && value !== '.') {
      setScreenValue(value)
    } else {
      setScreenValue(screenValue + value)
    }
  }

  const clearScreen = () => {
    setScreenValue('0')
  }

  const calculate = () => {
    try {
      // It's unsafe to use eval, consider a safer alternative for parsing expressions
      let result = eval(screenValue.replace('÷', '/').replace('×', '*'))
      setScreenValue(result.toString())
    } catch (e) {
      setScreenValue('Error')
    }
  }

  const memoryClear = () => {
    setMemory(0)
  }

  const memoryRecall = () => {
    setScreenValue(memory.toString())
  }

  const handleKeyDown = (event: KeyboardEvent) => {
    const { key } = event
    switch (key) {
      case '0':
      case '1':
      case '2':
      case '3':
      case '4':
      case '5':
      case '6':
      case '7':
      case '8':
      case '9':
      case '.':
      case '+':
      case '-':
      case '*':
      case '/':
        appendToScreen(key)
        break
      case 'Enter':
        calculate()
        break
      case 'Backspace':
        setScreenValue(screenValue.slice(0, -1) || '0')
        break
      case 'c':
        clearScreen()
        break
    }
  }

  React.useEffect(() => {
    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [screenValue])

  return (
    <div id='calculator' className='p-5 w-[320px]  bg-calc-bg rounded-xl'>
      <div id='screen' className='p-2 bg-calc rounded-lg text-white text-right items-center'>
        {screenValue}
      </div>
      <div className='grid grid-cols-4 gap-1 pt-2 pr-6 '>
        <CalcBtn onClick={memoryClear}>MC</CalcBtn>
        <CalcBtn onClick={memoryRecall}>MR</CalcBtn>
        <CalcBtn onClick={() => appendToScreen('%')}>%</CalcBtn>
        <CalcBtn onClick={clearScreen}>C</CalcBtn>
        <CalcBtn onClick={() => appendToScreen('7')}>7</CalcBtn>
        <CalcBtn onClick={() => appendToScreen('8')}>8</CalcBtn>
        <CalcBtn onClick={() => appendToScreen('9')}>9</CalcBtn>
        <CalcBtn onClick={() => appendToScreen('/')}>÷</CalcBtn>
        <CalcBtn onClick={() => appendToScreen('4')}>4</CalcBtn>
        <CalcBtn onClick={() => appendToScreen('5')}>5</CalcBtn>
        <CalcBtn onClick={() => appendToScreen('6')}>6</CalcBtn>
        <CalcBtn onClick={() => appendToScreen('*')}>×</CalcBtn>
        <CalcBtn onClick={() => appendToScreen('1')}>1</CalcBtn>
        <CalcBtn onClick={() => appendToScreen('2')}>2</CalcBtn>
        <CalcBtn onClick={() => appendToScreen('3')}>3</CalcBtn>
        <CalcBtn onClick={() => appendToScreen('-')}>-</CalcBtn>
        <CalcBtn onClick={() => appendToScreen('0')}>0</CalcBtn>
        <CalcBtn onClick={() => appendToScreen('.')}>.</CalcBtn>
        <CalcBtn onClick={calculate}>=</CalcBtn>
        <CalcBtn onClick={() => appendToScreen('+')}>+</CalcBtn>
      </div>
    </div>
  )
}

export default Calc
