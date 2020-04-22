function handleSubmit(event) {
    event.preventDefault()

    let formText = document.getElementById('name').value

    if (formText.length > 20 && formText.length < 500) {

        fetch('http://localhost:8001/posting', {
            method: 'POST',
            headers: { 'Content-type': 'application/json'},
            body: JSON.stringify({formText})
        })
        .then(getData('http://localhost:8001/getting'))
    }
    else {
        document.getElementById('results').innerHTML = 'Text should be between 20 and 500 characters. Please try again!'
    }
}

async function getData(url) {
    const apidata = await fetch(url)
    try {
        const apiJson = await apidata.json()
        const results = apiJson.str
        const capResults = results.charAt(0).toUpperCase() + results.slice(1)
        document.getElementById('results').innerHTML = capResults
        const type = (typeof capResults)
        return {type}
    } catch (error) {
        console.log('error', error)
    }
}

export { handleSubmit }
export { getData }
