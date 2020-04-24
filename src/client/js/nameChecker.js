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

function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        alert("Welcome, Captain!")
    }
}

export { getData }
export { checkForName }
