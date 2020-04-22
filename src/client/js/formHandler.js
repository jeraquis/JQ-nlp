function handleSubmit(event) {
    event.preventDefault()

    let formText = document.getElementById('name').value



    fetch('http://localhost:8001/posting', {
        method: 'POST',
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify({formText})
    })
    .then(getData('http://localhost:8001/getting'))

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
