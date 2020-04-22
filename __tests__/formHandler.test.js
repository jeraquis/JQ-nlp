
import { getData } from '../src/client/js/formHandler'

const getType = require('jest-get-type')

// The function exists and is defined.
test('function exists', () => {
    expect(getData).toBeDefined()
})

// The target variable is a function.
test('target is a function', () => {
    expect(typeof getData).toBe('function')
})

// Confirms that the function is returning a string, so that we're not
// accidentally trying to print an object to the UI
test('returned value is a string', async () => {
    getData('http://localhost:8001/getting')
        .then(data => {
            expect(data).toEqual('string')
        })
})
