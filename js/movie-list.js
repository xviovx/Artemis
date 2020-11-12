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
                var title = result.results[i].title;
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


                $("#my-list-content-con").append("<div class='col col-sm-12 col-md-12 col-xl-6 set one'><div class='poster-container col-md-5'> <img src='https://image.tmdb.org/t/p/w500/"+poster+"' style='border-radius: 10px;'></div><div class='text-container-list col-lg-5'><h2 class='poster-title-x'>"+title+"</h2><h4 class='genre-text-display'>"+genreName+"</h4><p class='release-date-display'><b>Release date: </b><span id='list-release-date'>"+releaseDate+"</span></p><p class='synopsis-text'>"+description+"</p><button class='remove-from-list-button'>REMOVE FROM LIST</button></div><div class='p-text-for-mobile col-sm-12'><p class='synopsis-text-mobile'>"+description+"</p></div></div>")

                    //REMOVE FROM LIST
                    $(".remove-from-list-button").click(function(){
                    $(this).closest(".set").fadeOut(500);
    });
            };
        };

    });
})

