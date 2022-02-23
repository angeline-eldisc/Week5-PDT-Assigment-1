function convert(){
    var scoreNum = document.getElementById("score").value;
    
    if (scoreNum <= 100 && scoreNum >= 85){
        var letter = "A";
    } else if (scoreNum <= 84 && scoreNum >= 80){
        var letter = "A-";
    } else if (scoreNum <= 79 && scoreNum >= 75){
        var letter = "B+";
    } else if (scoreNum <= 74 && scoreNum >= 70){
        var letter = "B";
    } else if (scoreNum <= 69 && scoreNum >= 67){
        var letter = "B-";
    } else if (scoreNum <= 66 && scoreNum >= 65){
        var letter = "C+";
    } else if (scoreNum <= 64 && scoreNum >= 60){
        var letter = "C";
    } else if (scoreNum <= 59 && scoreNum >= 55){
        var letter = "D";
    } else if (scoreNum <= 54 && scoreNum >= 50){
        var letter = "D-";
    } else {
        var letter = "E";
    }
    
    url = "/convert_score_to_letter";

    axios({
        method: "post",
        url: url,
        data: {
            letter: letter,
        },
        headers: {
            "Content-Type": "application/json",
        }
    }).then(
        (response) => {
            var results = response.data;
            console.log(response);
            document.getElementById("convertResult").innerHTML = results["result"];
        },
        (error) => {
            console.log(error);
        }
    )
}