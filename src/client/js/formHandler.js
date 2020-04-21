function handleSubmit(event) {
    event.preventDefault()

    let formText = document.getElementById('name').value

    const getData = async (url) => {
        const apidata = await fetch(url)
        try {
            const apiJson = await apidata.json()
            const results = apiJson.str
            const capResults = results.charAt(0).toUpperCase() + results.slice(1)
            document.getElementById('results').innerHTML = capResults
        } catch (error) {
            console.log('error', error)
        }
    }

    fetch('http://localhost:8001/posting', {
        method: 'POST',
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify({formText})
    })
    .then(getData('http://localhost:8001/getting'))

}

export { handleSubmit }
