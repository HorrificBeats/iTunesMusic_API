//TODOS: merge search bars

$(document).ready(function () {
  console.log("ready!");


//Search ARTIST
  $("#search").keypress(function (event) {
    if (event.which == 13) {
      $("#results").html("");
      var artist = $("#search").val();
      $.ajax({
        url:
          "https://itunes.apple.com/search?term=" +
          artist +
          "&country=fr&limit=10&media=music",
        cache: false,
      }).done(function (json) {
        var obj = jQuery.parseJSON(json);
        console.log(obj.resultCount);

        //Number of results
		    $("#nrresult").html(obj.resultCount + " artists found:");
		
		    //Removing #initialText
		    document.getElementById("initialText").style.display = "none";

        obj.results.forEach(function (element, index) {
          console.log(index);

          //Elem generation
          //Container for results
          var padre = document.createElement("div");
          padre.classList.add("padre");

          //Mini-Container for text/player
          var figlio = document.createElement("div");
          figlio.classList.add("figlio");
          figlio.classList.add("text-truncate");

          //Mini-Container for text/player
          var figlio2 = document.createElement("div");
          figlio2.classList.add("figlio2");

		  //Artwork
          var artwork = document.createElement("img");
          artwork.classList.add("artwork");
          artwork.src = obj.results[index].artworkUrl100;

          var artist = document.createElement("a");
          artist.innerText = obj.results[index].artistName;
          artist.classList.add("artist");
          artist.href = obj.results[index].artistViewUrl;
          artist.target = "_blank";

          var album = document.createElement("div");
          album.innerText = obj.results[index].collectionName;
          album.classList.add("album");

          var track = document.createElement("div");
          track.innerText = obj.results[index].trackName;
          track.classList.add("track");

          var duration = document.createElement("div");
          duration.innerText =
            "Duration: " +
            millisToMinutesAndSeconds(obj.results[index].trackTimeMillis);
          duration.classList.add("duration");

          //GENRE
          var genre = document.createElement("div");
          genre.innerText = "Genre: " +  obj.results[index].primaryGenreName;
          genre.classList.add("genre");

          var player = document.createElement("audio");
          player.controls = "controls";
          player.volume = 0.5;
          player.src = obj.results[index].previewUrl;
          player.classList.add("player");

          //Link over ARTWORK
          var artworklink = document.createElement("a");
          artworklink.href = obj.results[index].collectionViewUrl;
          artworklink.target = "_blank";
          artworklink.classList.add("artworklink"); // DE COPIAT

          //Relationships
          padre.appendChild(artwork);

          //All will go to FIGLIO
          figlio.appendChild(artist);
          figlio.appendChild(album);
          figlio.appendChild(track);
          figlio2.appendChild(duration);
          figlio2.appendChild(genre);
          figlio.appendChild(player);

          artworklink.appendChild(artwork);

          padre.appendChild(artworklink);

          padre.appendChild(figlio);
          padre.appendChild(figlio2);
          $("#results").append(padre);
        });
		
		//A single player at a time
		$("audio").on("play", function() {
			$("audio").not(this).each(function(index, audio) {
				audio.pause();
			});
		});
      });
    }
  });
//

//Search TRACK
  $("#search2").keypress(function (event) {
    if (event.which == 13) {
      $("#results").html("");
      var track = $("#search3").val();
      $.ajax({
        url:
          "https://itunes.apple.com/search?term=" +
          track +
          "&country=fr&limit=20&media=music&entity=musicTrack",
        cache: false,
      }).done(function (json) {
        var obj = jQuery.parseJSON(json);
        console.log(obj.resultCount);

        //# of results
		$("#nrresult").html(obj.resultCount + " tracks found:");
		
		//Removing initialText
		document.getElementById("initialText").style.display = "none";

        obj.results.forEach(function (element, index) {
          console.log(index);

          //Elem generation
          //Container for results
          var padre = document.createElement("div");
          padre.classList.add("padre");

          //Mini-Container for text/player
          var figlio = document.createElement("div");
          figlio.classList.add("figlio");

          //Mini-Container for text/player
          var figlio2 = document.createElement("div");
          figlio2.classList.add("figlio2");

          var artwork = document.createElement("img");
          artwork.classList.add("artwork");
          artwork.src = obj.results[index].artworkUrl100;

          var artist = document.createElement("a");
          artist.innerText = obj.results[index].artistName;
          artist.classList.add("artist");
          artist.href = obj.results[index].artistViewUrl;
          artist.target = "_blank";

          var album = document.createElement("div");
          album.innerText = obj.results[index].collectionName;
          album.classList.add("album");

          var track = document.createElement("div");
          track.innerText = obj.results[index].trackName;
          track.classList.add("track");

          var duration = document.createElement("div");
          duration.innerText =
            "Duration: " +
            millisToMinutesAndSeconds(obj.results[index].trackTimeMillis);
          duration.classList.add("duration");

          
          //2B COPIED
          var genre = document.createElement("div");
          genre.innerText = "Genre: " + obj.results[index].primaryGenreName;
          genre.classList.add("genre");

          var player = document.createElement("audio");
          //player.setAttribute('src', obj.results[0].previewUrl);
          player.controls = "controls";
          player.src = obj.results[index].previewUrl;
          player.classList.add("player");
          player.volume = 0.5;

          //Link peste ARTWORK
          var artworklink = document.createElement("a");
          artworklink.href = obj.results[index].collectionViewUrl;
          artworklink.target = "_blank";
          artworklink.classList.add("artworklink"); // DE COPIAT


          //Relationships
          //All inside FIGLIO
          figlio.appendChild(artist);
          figlio.appendChild(album);
          figlio.appendChild(track);
          figlio2.appendChild(duration);
          figlio2.appendChild(genre);
          figlio.appendChild(player);

          artworklink.appendChild(artwork);

          padre.appendChild(artworklink);

          padre.appendChild(figlio);
          padre.appendChild(figlio2);
          $("#results").append(padre);
        });
        //A single player at a time
		$("audio").on("play", function() {
			$("audio").not(this).each(function(index, audio) {
				audio.pause();
			});
		});
      });
    }
  });
	});
//

//Misc
function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
}
