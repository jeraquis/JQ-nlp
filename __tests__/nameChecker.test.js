
import { getData } from '../src/client/js/nameChecker'

const getType = require('jest-get-type')


// Confirms that the function is returning a string, so that we're not
// accidentally trying to print an object to the UI
test('returned value is a string', async () => {
    getData('http://localhost:8001/getting')
        .then(data => {
            expect(data).toEqual('string')
        })
})
