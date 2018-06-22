var search= $("#search");
var records= $("#records");
var startyear=$("#startyear");
var endyear = $("#endyear");
var searchbtn= $("#searchbutton");
var clear= $("#clear");
var apikey = "7c49d45ee8a145a2980617fc2b0e1960";
var searchParam = "";
     

$("#searchbutton").on("click", function(e) {
	searchParam = search.val();
	recordsParam = records.val();
	startParam = startyear.val();
	endParam = endyear.val();
	e.preventDefault();
     

var queryUrl = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + apikey + "&q=" + searchParam+"&start_date="+startParam+"end_date"+endParam+;
//url = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=2619be17dc964764b86c42003ca23ae1&q="+search+"&;


$.ajax({
  url: queryUrl,
  method: 'GET',
}).then(function(result) {
  console.log(result);
});

});