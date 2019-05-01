$(document).ready(function() {
    getNews();

    function getNews(){
        var newsCategories = ["google-news","wired","bbc-news"];
        var randomCategory = newsCategories[Math.floor(Math.random() * newsCategories.length)];
            //console.log(newsSource[key]);
            var order = "latest";
            //test API KEY
            //var newsUrl = ("https://newsapi.org/v1/articles?source=the-next-web&sortBy=latest&apiKey=e3aadcf138c842cc8fb14e4461cd4fdd");
            var newsUrl = ("https://newsapi.org/v2/top-headlines?sources="+randomCategory+"&apiKey=de2d16f1de004557b06d5244b8754b77");
            getNewsJson(newsUrl);
    }

    function getNewsJson(newsUrl) {
        //console.log("started getJson with this url: " + newsUrl);
        var article = Math.floor((Math.random() * 10) + 1);
        console.log(article)
        $.ajax({
            format: "json",
            dataType: "json",
            url: newsUrl,
            success: function(json) {
                console.log("great success");
                //$("#publisher").html(json.source);
                //$("#title").html(json.articles[article].content);
                $("#description_1").html(json.articles[article].description);
                $("#description_2").html(json.articles[article-1].description);
                $("#description_3").html(json.articles[article+1].description);
            }

        })
        
    }

    setInterval(function () {
        getNews();
    }, 10000);
})