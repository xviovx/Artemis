$(document).ready(function(){
    
});

$(function(){

    // API Call Area

    api_key= "75a323382db7ff01be82ef7731a82c9e";

    var endPoint = "https://api.themoviedb.org/3/movie/popular?api_key="+ api_key +"&language=en-US&page=1";
    var data = $.getJSON(endPoint, function(result){
        
        console.log(result);

        for(i = 0; i < result.results.length; i++){
            imageReturned = result.results[i].poster_path;
            genreCode= result.results[i].genre_ids[0];

            if (genreCode === 28){
                genreName = "Action";
            } else if (genreCode === 12){
                genreName = "Adventure";
            } else if (genreCode === 16){
                genreName = "Animation";
            } else if (genreCode === 35){
                genreName = "Comedy";
            } else if (genreCode === 80){
                genreName = "Crime";
            } else if (genreCode === 18){
                genreName = "Documentry";
            } else if (genreCode === 10751){
                genreName = "Drama";
            } else if (genreCode === 14){
                genreName = "Family";
            } else if (genreCode === 36){
                genreName = "Fantasy";
            } else if (genreCode === 8782){
                genreName = "History";
            } else if (genreCode === 878){ //Unknown
                genreName = "Sci-Fi";
            }

            $(".col-6.col-sm-6.col-md-4.col-lg-3.d-xl-flex.grid-4-desktop.testing").append("<div class='poster-4-image-container.testing "+genreName+"'><img src='https://image.tmdb.org/t/p/w500/"+imageReturned+"'><p>"+genreName);
        }

    }); /// End of API Call