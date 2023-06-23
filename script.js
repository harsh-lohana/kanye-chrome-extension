fetch("https://api.kanye.rest/")
    .then(res => res.json())
    .then(data => document.getElementById("quote").innerHTML = data.quote)