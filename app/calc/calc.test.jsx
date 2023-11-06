import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import Calc from './Calc'

describe('<Calc />', () => {
  test('renders the calculator', () => {
    render(<Calc />)
    expect(screen.getByRole('textbox')).toHaveValue('0')
  })

  test('appends the value to the screen when a number is clicked', () => {
    render(<Calc />)
    const button = screen.getByText('1')
    fireEvent.click(button)
    expect(screen.getByRole('textbox')).toHaveValue('1')
  })

  test('clears the screen when C is clicked', () => {
    render(<Calc />)
    const buttonNum = screen.getByText('1')
    fireEvent.click(buttonNum)
    const buttonC = screen.getByText('C')
    fireEvent.click(buttonC)
    expect(screen.getByRole('textbox')).toHaveValue('0')
  })

  test('performs a calculation when = is clicked', () => {
    render(<Calc />)
    const buttonNum1 = screen.getByText('1')
    fireEvent.click(buttonNum1)
    const buttonPlus = screen.getByText('+')
    fireEvent.click(buttonPlus)
    const buttonNum2 = screen.getByText('2')
    fireEvent.click(buttonNum2)
    const buttonEqual = screen.getByText('=')
    fireEvent.click(buttonEqual)
    expect(screen.getByRole('textbox')).toHaveValue('3')
  })

  test('memory recall displays the value in memory', () => {
    render(<Calc />)
    // assuming memory is somehow set, perhaps you need a button for that or you mock the state
    const buttonMR = screen.getByText('MR')
    fireEvent.click(buttonMR)
    expect(screen.getByRole('textbox')).toHaveValue(/* value that is supposed to be in memory */)
  })

  test('handles keyboard input', () => {
    render(<Calc />)
    fireEvent.keyDown(screen.getByRole('textbox'), { key: '1', code: 'Digit1' })
    expect(screen.getByRole('textbox')).toHaveValue('1')
  })

  // ... Add more tests for each piece of functionality
})
