window.onload = (event) => {
    let stopRefreshing = false
    var intervalId = setInterval(() => {
        let bannerId = document.getElementById('bannerId')
        var errorText =
            bannerId?.childNodes[0]?.childNodes[1]?.childNodes[0].textContent
        if (errorText == 'Please try again or select a different event') {
            stopRefreshing = true
            location.reload()
        }
    }, 1000)

    setInterval(() => {
        if (stopRefreshing) {
            clearInterval(intervalId)
        }
    }, 300)
}
