
import { handleSubmit } from '../src/client/js/formHandler'

const getType = require('jest-get-type')

// The function exists and is defined.
test('function exists', () => {
    expect(handleSubmit).toBeDefined()
})

// The target variable is a function.
test('target is a function', () => {
    expect(typeof handleSubmit).toBe('function')
})

