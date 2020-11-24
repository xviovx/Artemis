$(function(){

    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var pageID = parseInt(urlParams.get('id'));

    api_key= "4c72fa62556dd6e032a91d50c5f47265";

    var endPoint = "https://api.themoviedb.org/3/movie/popular?api_key="+ api_key +"&language=en-US&page=1";
    var data = $.getJSON(endPoint, function(result){

        for(i = 0; i < result.results.length; i++) {
            if(result.results[i].id === pageID){
                var poster = result.results[i].poster_path;
                var title = result.results[i].title.substr(0, 30);
                var genre = result.results[i].genre_ids;//WORK OUT GENRE BASED ON IDS!!!!!
                var releaseDate = result.results[i].release_date;
                var description = result.results[i].overview;
                description = description.substr(0, 213);
                
                    if ((genre[0] || genre[1] || genre[2] || genre[3] || genre[4]) === 28){
                        genreName = "Action";
                    } else if ((genre[0] || genre[1] || genre[2] || genre[3] || genre[4]) === 12){
                        genreName = "Adventure";
                    } else if ((genre[0] || genre[1] || genre[2] || genre[3] || genre[4]) === 16){
                        genreName = "Animation";
                    } else if ((genre[0] || genre[1] || genre[2] || genre[3] || genre[4]) === 35){
                        genreName = "Comedy";
                    } else if ((genre[0] || genre[1] || genre[2] || genre[3] || genre[4]) === 80){
                        genreName = "Crime";
                    } else if ((genre[0] || genre[1] || genre[2] || genre[3] || genre[4]) === 99){
                        genreName = "Documentary";
                    } else if ((genre[0] || genre[1] || genre[2] || genre[3] || genre[4]) === 18){
                        genreName = "Drama";
                    }else if ((genre[0] || genre[1] || genre[2] || genre[3] || genre[4]) === 10751){
                        genreName = "Family";
                    } else if ((genre[0] || genre[1] || genre[2] || genre[3] || genre[4]) === 14){
                        genreName = "Fantasy";
                    } else if ((genre[0] || genre[1] || genre[2] || genre[3] || genre[4]) === 36){
                        genreName = "History";
                    } else if ((genre[0] || genre[1] || genre[2] || genre[3] || genre[4]) === 878){
                        genreName = "Sci-Fi";
                    } else {
                        genreName = "Unknown";
                    };


                $("#my-list-content-con").append("<div class='ml-poster-con col-12 col-lg-6 set one'><div class='movie-poster-container'><div class='poster-ratio'><img id='coming-later-poster-1' src='https://image.tmdb.org/t/p/w500/"+poster+"' class='poster-ratio-image-container'></div></div><div class='movie-info-container'><h1 class='poster-title-x'>"+title+"</h1><p class='genre-text-display'>"+genreName+"</p><p class='release-date-display'>Release date: <b><span id='list-release-date'>"+releaseDate+"</span></p></b><p class='synopsis-text'>"+description+"</p><button class='remove-from-list-button'>Remove</button></div></div>")    
            };
        };

        //REMOVE FROM LIST
        $(".remove-from-list-button").click(function(){
            $(this).closest(".set").fadeOut(500);

});

    });
})

