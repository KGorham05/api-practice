// A $( document ).ready() block.
$(document).ready(function () {
    // when the user clicks submit
    $("#add-movie").on('click', function (event) {
        // prevent the page from reloading on click
        event.preventDefault();
        // Capture the form data from the page
        var movie = $("#movie-input").val().trim();
        // build the URL to query (with our title and api key concatenated in it)
        var apiKey = "trilogy"
        var queryURL = `http://www.omdbapi.com/?apikey=${apiKey}&t=${movie}&plot=full`

        // Send the form data to the omdb api
        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            // store key pieces of response as variables
            var posterURL = response.Poster;
            // var title = response.Title;
            // var plot = response.Plot;
            var rating = response.Ratings[1].Value;

            // use jquery to build html elements
            var posterImg = $("<img>");
            var tomatoes = $("<p>");

            tomatoes.text('Tomatoes: ' + rating)
            posterImg.attr('src', posterURL);
            // add correct text to html elements
            // append the elements to the page
            $("#movie-results")
                .append(posterImg)
                .append(tomatoes);
        
        });
    });
});


