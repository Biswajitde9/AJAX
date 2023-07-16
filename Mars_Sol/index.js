var nasaimage=$("#nasa-image");
var solinput= $("#sol");
var pageInput= $("#page");

$("form button").click(function (e){
    e.preventDefault();
    
    var sol= solinput.val();
    var page=pageInput.val();
    console.log(sol,page);

    if(sol === " " || page ===" "){
        alert("Plese fill the fields")
        return;
    }
    
    let url="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol="+ sol+ "&page=" + page + "&api_key=VepwQWedRTfVnwhgc4IUOehcF95xU0Tm1faCEudp";

    $.get(url,function(data){
        let photos=data.photos;

        console.log(photos);
        $("#nasa-images img").remove();

        for(let photo of photos){
            console.log(photo);
            console.log("hell",photo.img_src, photo.id);
            nasaimage.append('<img src="' + photo.img_src + '" alt="' + photo.id + '">');
        }
    });
});