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
                var title;
                var genre;
                var rating;
                var description;
                
            }
        }

    });
})