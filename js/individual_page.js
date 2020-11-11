$(function(){
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var pageID = parseInt(urlParams.get('id'));

    console.log(pageID);

    api_key= "4c72fa62556dd6e032a91d50c5f47265";

    var endPoint = "https://api.themoviedb.org/3/movie/popular?api_key="+ api_key +"&language=en-US&page=1";
    var data = $.getJSON(endPoint, function(result){

        for(i = 0; i < result.results.length; i++) {
            if(result.results[i].id === pageID){
                var backdrop = result.results[i].backdrop_path;
                var poster = result.results[i].poster_path;
                var title = result.results[i].title;
                var genre = result.results[i].genre_ids;//WORK OUT GENRE BASED ON IDS!!!!!
                var releaseDate = result.results[i].release_date;
                var avgVote = result.results[i].vote_average;
                var description = result.results[i].overview;
                var ogLang = result.results[i].original_language;

                    var imgSrc = 'https://image.tmdb.org/t/p/w500/';
                
                $("#backdrop-header").attr("src", imgSrc + backdrop);
                $("#movie-poster-x").attr("src", imgSrc + poster);
                $("#header-text").text(title);

                for(i = 0; i < result.results.length; i++) {
                    if (genre === 28){
                        genreName = "Action";
                    } else if (genre === 12){
                        genreName = "Adventure";
                    } else if (genre === 16){
                        genreName = "Animation";
                    } else if (genre === 35){
                        genreName = "Comedy";
                    } else if (genre === 80){
                        genreName = "Crime";
                    } else if (genre === 99){
                        genreName = "Documentary";
                    } else if (genre === 18){
                        genreName = "Drama";
                    }else if (genre === 10751){
                        genreName = "Family";
                    } else if (genre === 14){
                        genreName = "Fantasy";
                    } else if (genre === 36){
                        genreName = "History";
                    } else if (genre === 878){
                        genreName = "Sci-Fi";
                    } else {
                        genreName = "Unknown";
                    };
                };

                $("#genre-text").text(genreName);
                $("#release-date").text(releaseDate);
                $("#average-vote").text(avgVote);
                $("#description_text").text(description);
                $("#og-lang-text").text(ogLang);

            };
        };

    });
})

