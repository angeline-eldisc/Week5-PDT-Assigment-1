function hypotenuse(){
    var base = document.getElementById("base").value;
    var altitude = document.getElementById("altitude").value;
    
    url = "/hypotenuse";

    axios({
        method: "post",
        url: url,
        data: {
            hypotenuse: Math.hypot(base, altitude),
        },
        headers: {
            "Content-Type": "application/json",
        }
    }).then(
        (response) => {
            var results = response.data;
            console.log(response);
            document.getElementById("hypotenuseResult").innerHTML = results["result"];
        },
        (error) => {
            console.log(error);
        }
    )
}