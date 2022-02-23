function squareRoot(){
    var num = document.getElementById("num").value;
    
    url = "/square_root";

    axios({
        method: "post",
        url: url,
        data: {
            num: Math.sqrt(num),
        },
        headers: {
            "Content-Type": "application/json",
        }
    }).then(
        (response) => {
            var results = response.data;
            console.log(response);
            document.getElementById("squareRootResult").innerHTML = results["result"];
        },
        (error) => {
            console.log(error);
        }
    )
}