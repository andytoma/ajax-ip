function getInformation( e) {
    e.preventDefault(); // ca sa nu sa se faca REFRESH

    // gasiti INPUT -> scoateti textul din input ->
    var input = e.target.firstElementChild.lastElementChild;
    console.log(input.value);

    var xhr = new XMLHttpRequest();

    xhr.open("GET", `http://ip-api.com/line/${input.value}`);

    xhr.send();
   
    xhr.onload = function () {
        // raspunsul in partea serverului
        var result = document.getElementById('result');
        result.innerHTML = xhr.responseText
        console.log(xhr.responseText.split("\n") );
    }

}