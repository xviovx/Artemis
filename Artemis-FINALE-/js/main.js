//STORING USERNAME TO LOCAL STORAGE (SIGN IN PAGE)
function storeUsername(){
    username = document.getElementById("username_or_email").value;

    localStorage.setItem("username", username);

};


$(function(){
    $("#le-button-ay").click(function(){
        $("#sign-in-text").text(localStorage.username);
    });

    $(window).on("load", function(){
        $("#sign-in-text").text(localStorage.username);
    });
});


console.log(localStorage)

console.log("Users name: " + localStorage.username);

//alert(localStorage.username);
// $("#sign-in-text").text("poop");

$(function(){
    api_key= "4c72fa62556dd6e032a91d50c5f47265";

    var endPoint = "https://api.themoviedb.org/3/movie/popular?api_key="+ api_key +"&language=en-US&page=1";
    var data = $.getJSON(endPoint, function(api_result){
        console.log(api_result);

    //ORGANIZED IN ORDER OF POPULARITY RATING
        //POSTERS FOR TOP 3 BACKDROP
    backdropPosterOne = api_result.results[1].backdrop_path; // popularity: 2300.002
    backdropPosterTwo = api_result.results[2].backdrop_path; // popularity: 2007.928
    backdropPosterThree = api_result.results[0].backdrop_path; // popularity: 1924.26    
    ////////////
    
    imagePosterOne = api_result.results[1].poster_path; // popularity: 2300.002
    imagePosterTwo = api_result.results[2].poster_path; // popularity: 2007.928
    imagePosterThree = api_result.results[0].poster_path; // popularity: 1924.26

    //smaller posters underneath header

    imagePosterFour = api_result.results[3].poster_path; // popularity: 1492.236
    imagePosterFive = api_result.results[4].poster_path; // popularity: 1202.013
    imagePosterSix = api_result.results[7].poster_path; // popularity: 1114.882
    imagePosterSeven= api_result.results[5].poster_path; // popularity: 1004.386
    imagePosterEight = api_result.results[6].poster_path; // popularity: 928.622
    imagePosterNine = api_result.results[8].poster_path; // popularity: 898.868
    imagePosterTen = api_result.results[9].poster_path; // popularity: 806.945

        //DYNAMIC SLIDER HEADER
    $("#slider-container").append("<div id='carouselExampleIndicators2' class='carousel slide' data-ride='carousel'><ol class='carousel-indicators'><li data-target='#carouselExampleIndicators2' data-slide-to='0' class='active'></li><li data-target='#carouselExampleIndicators2' data-slide-to='1'></li><li data-target='#carouselExampleIndicators2' data-slide-to='2'></li></ol><div class='carousel-inner'><div class='carousel-item active'><img class='d-block w-100' src='https://image.tmdb.org/t/p/w500/"+backdropPosterOne+"' alt='First slide' id='image_Poster_One'><div class='carousel-caption d-none d-md-block d-flex h-50 align-items-center justify-content-center'><img id='artemisImg' src='assets/logo/artemis_silver.png' style='opacity: 0.8; text-align: center;'><p id='artemisSlogan'>Experience is everything. Thats why we provide the Best Cinematic Experience in South Africa. <br> (MOVIE 1)</p></div></div><div class='carousel-item'><img class='d-block w-100' src='https://image.tmdb.org/t/p/w500/"+backdropPosterTwo+"' alt='Second slide' id='image_Poster_Two'><div class='carousel-caption d-none d-md-block d-flex h-50 align-items-center justify-content-center'><img id='artemisImg' src='assets/logo/artemis_silver.png' style='opacity: 0.8; text-align: center;'><p id='artemisSlogan'>Experience is everything. Thats why we provide the Best Cinematic Experience in South Africa. <br> (MOVIE 2)</p></div></div><div class='carousel-item'><img class='d-block w-100' src='https://image.tmdb.org/t/p/w500/"+backdropPosterThree+"' alt='Third slide' id='image_Poster_Three'><div class='carousel-caption d-none d-md-block d-flex h-50 align-items-center justify-content-center'><img id='artemisImg' src='assets/logo/artemis_silver.png' style='opacity: 0.8; text-align: center;'><p id='artemisSlogan'>Experience is everything. Thats why we provide the Best Cinematic Experience in South Africa. <br> (MOVIE 3)</p></div></div></div><a class='carousel-control-prev' href='#carouselExampleIndicators2' role='button' data-slide='prev'><span class='carousel-control-prev-icon' aria-hidden='true'></span><span class='sr-only'>Previous</span></a><a class='carousel-control-next' href='#carouselExampleIndicators2' role='button' data-slide='next'><span class='carousel-control-next-icon' aria-hidden='true'></span><span class='sr-only'>Next</span></a></div>");
        //REST OF POSTERS ON HOME PAGE
    $("#restOfPosters").append("<div class='row no-gutters d-xl-flex justify-content-xl-start container-1440px'><div class='col-6 col-sm-6 col-md-4 col-lg-3 d-xl-flex grid-4-desktop'><div class='poster-ratio'><p class='top-10-label'>4</p><img id='coming-later-poster-1' src='https://image.tmdb.org/t/p/w500/"+imagePosterFour+"' class='poster-ratio-image-container'></div></div><div class='col-6 col-sm-6 col-md-4 col-lg-3 d-xl-flex grid-4-desktop'><div class='poster-ratio'><p class='top-10-label'>5</p><img id='coming-later-poster-1' src='https://image.tmdb.org/t/p/w500/"+imagePosterFive+"' class='poster-ratio-image-container'></div></div><div class='col-6 col-sm-6 col-md-4 col-lg-3 d-xl-flex grid-4-desktop'><div class='poster-ratio'><p class='top-10-label'>6</p><img id='coming-later-poster-1' src='https://image.tmdb.org/t/p/w500/"+imagePosterSix+"' class='poster-ratio-image-container'></div></div><div class='col-6 col-sm-6 col-md-4 col-lg-3 d-xl-flex grid-4-desktop'><div class='poster-ratio'><p class='top-10-label'>7</p><img id='coming-later-poster-1' src='https://image.tmdb.org/t/p/w500/"+imagePosterSeven+"' class='poster-ratio-image-container'></div>'</div><div class='col-6 col-sm-6 col-md-4 col-lg-3 d-xl-flex grid-4-desktop'><div class='poster-ratio'><p class='top-10-label'>8</p><img id='coming-later-poster-1' src='https://image.tmdb.org/t/p/w500/"+imagePosterEight+"' class='poster-ratio-image-container'></div></div><div class='col-6 col-sm-6 col-md-4 col-lg-3 d-xl-flex grid-4-desktop'><div class='poster-ratio'><p class='top-10-label'>9</p><img id='coming-later-poster-1' src='https://image.tmdb.org/t/p/w500/"+imagePosterNine+"' class='poster-ratio-image-container'></div></div><div class='col-6 col-sm-6 col-md-4 col-lg-3 d-xl-flex grid-4-desktop'><div class='poster-ratio'><p class='top-10-label'>10</p><img id='coming-later-poster-1' src='https://image.tmdb.org/t/p/w500/"+imagePosterTen+"' class='poster-ratio-image-container'></div></div></div>");

    for(i = 0; i < api_result.results.length; i++){
            imagePoster = api_result.results[i].poster_path;
            genreNumber = api_result.results[i].genre_ids[0];

            if (genreNumber === 28){
                genreName = "Action";
            } else if (genreNumber === 12){
                genreName = "Adventure";
            } else if (genreNumber === 16){
                genreName = "Animation";
            } else if (genreNumber === 35){
                genreName = "Comedy";
            } else if (genreNumber === 80){
                genreName = "Crime";
            } else if (genreNumber === 99){
                genreName = "Documentary";
            } else if (genreNumber === 18){
                genreName = "Drama";
            }else if (genreNumber === 10751){
                genreName = "Family";
            } else if (genreNumber === 14){
                genreName = "Fantasy";
            } else if (genreNumber === 36){
                genreName = "History";
            } else if (genreNumber === 878){
                genreName = "Sci-Fi";
            } else {
                genreName = "Unknown";
            };
           
            
           
        };
    });

});
//  $(".movies").append("<div class='movie_item "+genreName+" '><img src='https://image.tmdb.org/t/p/w500/"+imageReturned+"'><p>"+genreName+"</p></div>");

// $("#slider-container").append("<div id='carouselExampleIndicators2' class='carousel slide' data-ride='carousel'><ol class='carousel-indicators'><li data-target='#carouselExampleIndicators2' data-slide-to='0' class='active'></li><li data-target='#carouselExampleIndicators2' data-slide-to='1'></li><li data-target='#carouselExampleIndicators2' data-slide-to='2'></li></ol><div class='carousel-inner'><div class='carousel-item active'><img class='d-block w-100' src='https://image.tmdb.org/t/p/w500/"+imagePosterOne+"' alt='First slide' id='image_Poster_One'><div class='carousel-caption d-none d-md-block d-flex h-50 align-items-center justify-content-center'><img id='artemisImg' src='assets/logo/artemis_silver.png' style='opacity: 0.8; text-align: center;'><p id='artemisSlogan'>Experience is everything. Thats why we provide the Best Cinematic Experience in South Africa. </p></div></div><div class='carousel-item'><img class='d-block w-100' src='https://image.tmdb.org/t/p/w500/"+imagePosterTwo+"' alt='Second slide' id='image_Poster_Two'><div class='carousel-caption d-none d-md-block d-flex h-50 align-items-center justify-content-center'><img id='artemisImg' src='assets/logo/artemis_silver.png' style='opacity: 0.8; text-align: center;'><p id='artemisSlogan'>Experience is everything. Thats why we provide the Best Cinematic Experience in South Africa. </p></div></div><div class='carousel-item'><img class='d-block w-100' src='https://image.tmdb.org/t/p/w500/"+imagePosterThree+"' alt='Third slide' id='image_Poster_Three'><div class='carousel-caption d-none d-md-block d-flex h-50 align-items-center justify-content-center'><img id='artemisImg' src='assets/logo/artemis_silver.png' style='opacity: 0.8; text-align: center;'><p id='artemisSlogan'>Experience is everything. Thats why we provide the Best Cinematic Experience in South Africa. </p></div></div></div><a class='carousel-control-prev' href='#carouselExampleIndicators2' role='button' data-slide='prev'><span class='carousel-control-prev-icon' aria-hidden='true'></span><span class='sr-only'>Previous</span></a><a class='carousel-control-next' href='#carouselExampleIndicators2' role='button' data-slide='next'><span class='carousel-control-next-icon' aria-hidden='true'></span><span class='sr-only'>Next</span></a></div>");
