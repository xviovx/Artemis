$(function(){
    api_key= "4c72fa62556dd6e032a91d50c5f47265";

    var endPoint = "https://api.themoviedb.org/3/movie/popular?api_key="+ api_key +"&language=en-US&page=1";
    var data = $.getJSON(endPoint, function(result){
        console.log(result);

        //posters for top three
        imagePosterOne = result.results[1].poster_path; // popularity: 2300.002
        imagePosterTwo = result.results[2].poster_path; // popularity: 2007.928
        imagePosterThree = result.results[0].poster_path; // popularity: 1924.26

        //PATHS TO USE FOR NOW SHOWING - 16
        /*nowShowingOne = result.results[3].poster_path; 
        nowShowingTwo = result.results[4].poster_path; 
        nowShowingThree = result.results[5].poster_path; 
        nowShowingFour = result.results[6].poster_path; 
        nowShowingFive = result.results[7].poster_path; 
        nowShowingSix = result.results[8].poster_path; 
        nowShowingSeven = result.results[9].poster_path;
        nowShowingEight = result.results[10].poster_path;
        nowShowingNine = result.results[11].poster_path;
        nowShowingTen = result.results[12].poster_path;
        nowShowingEleven = result.results[13].poster_path;
        nowShowingTwelve = result.results[14].poster_path;
        nowShowingThirteen = result.results[15].poster_path;
        nowShowingFourteen = result.results[16].poster_path;
        nowShowingFifteen = result.results[17].poster_path;
        nowShowingSixteen = result.results[18].poster_path;
        nowShowingSixteen = result.results[19].poster_path;*/

        //append for top three
        $("#top-three-section").append("<div class='row no-gutters d-xl-flex justify-content-xl-start container-1440px'><div class='col-md-4 d-xl-flex grid-3-desktop'><div class='poster-ratio'><p class='top-10-label'>1</p><img id='coming-later-poster-1' src='https://image.tmdb.org/t/p/w500/"+imagePosterOne+"' class='poster-ratio-image-container'></div></div><div class='col-md-4 d-xl-flex grid-3-desktop'><div class='poster-ratio'><p class='top-10-label'>2</p><img id='coming-later-poster-1' src='https://image.tmdb.org/t/p/w500/"+imagePosterTwo+"' class='poster-ratio-image-container'></div></div><div class='col-md-4 d-xl-flex grid-3-desktop'><div class='poster-ratio'><p class='top-10-label'>3</p><img id='coming-later-poster-1' src='https://image.tmdb.org/t/p/w500/"+imagePosterThree+"' class='poster-ratio-image-container'></div></div></div>");

        for (i = 0; i < result.results.length; i++){

            var movieID = result.results[i].id;

            var moviePoster = result.results[i].poster_path;

            var genreCode = result.results[i].genre_ids[0];

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
            } else if (genreCode === 99){
                genreName = "Documentary";
            } else if (genreCode === 18){
                genreName = "Drama";
            }else if (genreCode === 10751){
                genreName = "Family";
            } else if (genreCode === 14){
                genreName = "Fantasy";
            } else if (genreCode === 36){
                genreName = "History";
            } else if (genreCode === 878){
                genreName = "Sci-Fi";
            } else {
                genreName = "Unknown";
            };

            $("#now-showing-movies").append("<div class='col-6 col-sm-6 col-md-3 d-xl-flex grid-4-desktop-stacked'><div class='poster-ratio "+genreName+"'><img id='now-showing-poster-1' src='https://image.tmdb.org/t/p/w500/"+moviePoster+"' class='poster-ratio-image-container'><button class='add-to-list'><a href='my-list.html?id="+ movieID +"'>Add to list</a></button><button class='view-more'><a href='../pages/individual-movie.html?id="+ movieID +"'>View more</a></button></div></div>")
            
    
        };

        //FILTER FUNCTIONALITY

        $(".btn").on("click", function(){
            if ($(this).hasClass("all-movies")){
                $(".poster-ratio").fadeIn();
            } else if ($(this).hasClass("action-movies")){
                $(".poster-ratio").hide();
                $(".Action").fadeIn();
            } else if ($(this).hasClass("adventure-movies")){
                $(".poster-ratio").hide();
                $(".Adventure").fadeIn();
            } else if ($(this).hasClass("animation-movies")){
                $(".poster-ratio").hide();
                $(".Animation").fadeIn();
            } else if ($(this).hasClass("comedy-movies")){
                $(".poster-ratio").hide();
                $(".Comedy").fadeIn();
            } else if ($(this).hasClass("criime-movies")){
                $(".poster-ratio").hide();
                $(".Crime").fadeIn();
            } else if ($(this).hasClass("documentary-movies")){
                $(".poster-ratio").hide();
                $(".Documentary").fadeIn();
            } else if ($(this).hasClass("drama-movies")){
                $(".poster-ratio").hide();
                $(".Drama").fadeIn();
            } else if ($(this).hasClass("family-movies")){
                $(".poster-ratio").hide();
                $(".Family").fadeIn();
            } else if ($(this).hasClass("fantasy-movies")){
                $(".poster-ratio").hide();
                $(".Fantasy").fadeIn();
            } else if ($(this).hasClass("history-movies")){
                $(".poster-ratio").hide();
                $(".History").fadeIn();
            } else if ($(this).hasClass("sci-fi-movies")){
                $(".poster-ratio").hide();
                $(".Sci-Fi").fadeIn();
            };
        });

        
    });
    
});


