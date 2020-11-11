$(function(){
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var pageID = urlParams.get('id');

    console.log(pageID);
})