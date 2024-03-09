window.onload = (event) => {
    setInterval(() => {
        let bannerId = document.getElementById('bannerId')
        var errorText =
            bannerId?.childNodes[0]?.childNodes[1]?.childNodes[0].textContent
        if (errorText == 'Please try again or select a different event') {
            location.reload()
        }
    }, 1000)
}
