function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('name').value
    // Client.checkForName(formText)

    const getData = async () => {
        console.log('in getData')
        const apidata = fetch('http://localhost:8001/getting')
        return apidata
    }

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8001/posting', {
        method: 'POST',
        headers: { 'Content-type': 'application/json'},
        body: JSON.stringify(formText)
    })
    .then(getData)
    .then(res => res.json())
    .then(function(res) {
        console.log(res)
        document.getElementById('results').innerHTML = res
    })

}

export { handleSubmit }
