function fetchRandomDogImage(){

    var xhrRequest = new XMLHttpRequest();

    xhrRequest.onload = function(){
        console.log(xhrRequest.response);
        var responseJSON = JSON.parse(xhrRequest.response);
        var imageURL= responseJSON.message;
        $('#dog-image').attr('src',imageURL);
    };
    xhrRequest.open('get','https://dog.ceo/api/breeds/image/random',true)
    xhrRequest.send();
}


$('#fetch-dog-image-button').click(fetchRandomDogImage);