var nasaimage=$("#nasa-image");
var input= $("#datepicker").datepicker({dateFormat : 'yy-mm-dd'});

$("form button").click(function (e) { 
    e.preventDefault();

    var date=input.val();
    
    if(date==" "){
        alert("Please fill the Date");
        return;
    }

    let url ="https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date="+ date + "&api_key=B53hq9Z9SUDOA3ZPSirQ1Ryyo954CMR0taeaP7yW";
    console.log(url);
    $.get(url,function(date){
        let photos = date.photos;
        if(photos.length == 0){
            alert("No photos available for this date");
            return;
        }

        $("#nasa-image img").remove();
        
        for(let photo of photos){
            nasaimage.append('<img src="' + photo.img_src + '" alt="' + photo.id + '">');
        }
    });
});