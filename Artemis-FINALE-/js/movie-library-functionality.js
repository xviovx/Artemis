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
        $("#top-three-section").append("<div class='row no-gutters d-xl-flex justify-content-xl-start container-1440px'><div class='col-md-4 d-xl-flex grid-3-desktop'><div class='big-top-three'><p class='top-10-label'>1</p><img id='coming-later-poster-1' src='https://image.tmdb.org/t/p/w500/"+imagePosterOne+"' class='poster-ratio-image-container'></div></div><div class='col-md-4 d-xl-flex grid-3-desktop'><div class='big-top-three'><p class='top-10-label'>2</p><img id='coming-later-poster-1' src='https://image.tmdb.org/t/p/w500/"+imagePosterTwo+"' class='poster-ratio-image-container'></div></div><div class='col-md-4 d-xl-flex grid-3-desktop'><div class='big-top-three'><p class='top-10-label'>3</p><img id='coming-later-poster-1' src='https://image.tmdb.org/t/p/w500/"+imagePosterThree+"' class='poster-ratio-image-container'></div></div></div>");

        for (i = 3; i < result.results.length; i++){

            var movieID = result.results[i].id;

            var moviePoster = result.results[i].poster_path;

            var genreCode = result.results[i].genre_ids[0];

            var releaseDate = result.results[i].release_date;

            var avgVote = toString(result.results[i].vote_average);

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

            if (releaseDate === "2020-08-14"){
                releaseYear = "2020";
            } else if (releaseDate === "2020-10-23"){
                releaseYear = "2020";
            } else if (releaseDate === "2020-10-30"){
                releaseYear = "2020";
            } else if (releaseDate === "2020-10-26"){
                releaseYear = "2020";
            } else if (releaseDate === "2020-10-01"){
                releaseYear = "2020";
            } else if (releaseDate === "2020-10-23"){
                releaseYear = "2020";
            } else if (releaseDate === "2020-08-26"){
                releaseYear = "2020";
            } else if (releaseDate === "2020-09-29"){
                releaseYear = "2020";
            } else if (releaseDate === "2020-09-02"){
                releaseYear = "2020";
            } else if (releaseDate === "2020-10-16"){
                releaseYear = "2020";
            } else if (releaseDate === "2020-09-23"){
                releaseYear = "2020";
            } else if (releaseDate === "2020-10-16"){
                releaseYear = "2020";
            } else if (releaseDate === "2020-10-14"){
                releaseYear = "2020";
            } else if (releaseDate === "2020-09-04"){
                releaseYear = "2020";
            } else if (releaseDate === "2020-10-23"){
                releaseYear = "2020";
            } else if (releaseDate === "2020-07-15"){
                releaseYear = "2020";
            } else if (releaseDate === "2020-09-29"){
                releaseYear = "2020";
            } else if (releaseDate === "2020-07-02"){
                releaseYear = "2020";
            } else if (releaseDate === "2020-06-30"){
                releaseYear = "2020";
            } else if (releaseDate === "2020-10-30"){
                releaseYear = "2020";
            };

            /*
            switch (avgVote) {
                case '8.2' || '7.5' || '7.7':
                    voteCount = '8';
                    break;

                case '5' || '4.8':
                    voteCount = '5';
                    break;

                case '6.3' || '6.2' || '6.1' || '5.7':
                    voteCount = '6';
                    break;

                case '6.7' || '7' || '7.2' || '7.4' || '6.7' || '7' || '7.2' || '7.4' || '6.7' || '6.5':
                    voteCount = '7';
                    break;
            };
            */

            
            if (avgVote === "8.2" || "7.5" || "7.7"){
                voteCount = "8";
            } else if (avgVote === "5" || "4.8"){
                voteCount = "5";
            } else if (avgVote === "6.3" || "6.2" || "6.1" || "6.7" || "5.7"){
                voteCount = "6";
            } else if (avgVote === "7" || "7.2" || "7.4" || "6.7" || "6.5"){
                voteCount = "7";
            };
            
        
            
            $("#now-showing-movies").append("<div class='col-6 col-sm-6 col-md-3 d-xl-flex grid-4-desktop-stacked'><div class='poster-ratio "+genreName+" "+releaseYear+" "+voteCount+"'><img id='now-showing-poster-1' src='https://image.tmdb.org/t/p/w500/"+moviePoster+"' class='poster-ratio-image-container'><button class='add-to-list'><a href='my-list.html?id="+ movieID +"'>Add to list</a></button><button class='view-more'><a href='../pages/individual-movie.html?id="+ movieID +"'>View more</a></button></div></div>")
            
    
        };

        //FILTER FUNCTIONALITY FOR ORIGINAL FILTER
        /*
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

        */
        //FILTER FOR GENRE DROPDOWN
        $("#genres").change(function(){
            var filterValue = $(this).val();
            var poster = $(".poster-ratio");

            if(filterValue === "All"){
                poster.fadeIn();
            } else if(filterValue === "Action"){
                poster.hide();
                $(".Action").fadeIn();
            } else if(filterValue === "Adventure"){
                poster.hide();
                $('.Adventure').fadeIn();
            } else if(filterValue === "Animation"){
                poster.hide();
                $('.Animation').fadeIn();
            } else if(filterValue === "Comedy"){
                poster.hide();
                $('.Comedy').fadeIn();
            } else if (filterValue === "Crime"){
                poster.hide();
                $('.Crime').fadeIn();
            } else if (filterValue === "Documentary"){
                poster.hide();
                $('.Documentary').fadeIn();
            } else if (filterValue === "Drama"){
                poster.hide();
                $('.Drama').fadeIn();
            } else if (filterValue === "Family"){
                poster.hide();
                $('.Family').fadeIn();
            } else if (filterValue === "Fantasy"){
                poster.hide();
                $('.Fantasy').fadeIn();
            } else if (filterValue === "History"){
                poster.hide();
                $('.History').fadeIn();
            } else if (filterValue === "Sci-Fi"){
                poster.hide();
                $('.Sci-Fi').fadeIn();
            };
        });

        //FILTER FOR RELEASE YEAR

        $("#release-year").change(function(){
            var filterValue = $(this).val();
            var poster = $(".poster-ratio");

            if (filterValue === "2020"){
                poster.hide();
                $('.2020').fadeIn();
            } else if (filterValue === "2019"){
                poster.hide();
                $('.2019').fadeIn();
            } else if (filterValue === "2018"){
                poster.hide();
                $('.2018').fadeIn();
            } else if (filterValue === "2017"){
                poster.hide();
                $('.2017').fadeIn();
            } else if (filterValue === "2016"){
                poster.hide();
                $('.2016').fadeIn();
            } else if (filterValue === "2015"){
                poster.hide();
                $('.2015').fadeIn();
            } else if (filterValue === "2014"){
                poster.hide();
                $('.2014').fadeIn();
            } else if (filterValue === "2013"){
                poster.hide();
                $('.2013').fadeIn();
            } else if (filterValue === "2012"){
                poster.hide();
                $('.2012').fadeIn();
            } else if (filterValue === "2011"){
                poster.hide();
                $('.2011').fadeIn();
            } else if (filterValue === "2010"){
                poster.hide();
                $('.2010').fadeIn();
            } else if (filterValue === "2009"){
                poster.hide();
                $('.2009').fadeIn();
            };
        });

        // WHY IS THIS NOT WORKING!!!!!!!!!!!!! :'(

        $("#average_vote").change(function(){
            var filterValue = $(this).val();
            var poster = $(".poster-ratio");

            if (filterValue === "1"){
                poster.hide();
                $('.1').fadeIn();
            } else if (filterValue === "2"){
                poster.hide();
                $('.2').fadeIn();
            } else if (filterValue === "3"){
                poster.hide();
                $('.3').fadeIn();
            } else if (filterValue === "4"){
                poster.hide();
                $('.4').fadeIn();
            } else if (filterValue === "5"){
                poster.hide();
                $('.5').fadeIn();
            } else if (filterValue === "6"){
                poster.hide();
                $('.6').fadeIn();
            } else if (filterValue === "7"){
                poster.hide();
                $('.7').fadeIn();
            } else if (filterValue === "8"){
                poster.hide();
                $('.8').fadeIn();
            } else if (filterValue === "9"){
                poster.hide();
                $('.9').fadeIn();
            } else if (filterValue === "10"){
                poster.hide();
                $('.10').fadeIn();
            };
        });

        

        
    });
    
});


