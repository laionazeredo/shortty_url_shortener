import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from './page'

test('Page', () => {
  render(<Home />)
  const targetText = screen.getByText('Save and see your changes instantly.')
  expect(targetText).toBeDefined()
})
