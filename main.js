/*To finish:
	- add play buttons
	- only one player at a time
	- merge search bars
	*/

$( document ).ready(function() {
	console.log( "ready!" );

	//Search Artist
    $('#search').keypress(function(event) {
		if (event.which==13) {

			$('#results').html('');
			var artist=$('#search').val();
			$.ajax({
			url: "https://itunes.apple.com/search?term="+artist+"&country=fr&limit=10&media=music",
			cache:false
			

			})
			.done(function( json ) {

				var obj=jQuery.parseJSON(json);  
				console.log(obj.resultCount);

				//# of results
				$("#nrresult").html( obj.resultCount + " artists found:" ); 
				
				//DEMO CODE
				/*var artwork=document.getElementById('artwork');
				artwork.src=obj.results[0].artworkUrl100;
				$("#artist").html(obj.results[0].artistName); 
				$("#album").html( obj.results[0].collectionName ); 
				$("#track").html( obj.results[0].trackName );
				$("#duration").html(millisToMinutesAndSeconds(obj.results[0].trackTimeMillis));
				var player=document.getElementsByTagName('audio')[0];
				player.setAttribute('src', obj.results[0].previewUrl); */


				
				//Boucle functionne pas, pareil avec le FOR
				obj.results.forEach(function(element,index) {
				console.log(index);
					

					//Generation
					//Container for result
					var padre=document.createElement('div');
					padre.classList.add('padre');

					//Mini-Container for text/player
					var figlio=document.createElement('div')
					figlio.classList.add('figlio');

					//Mini-Container for text/player
					var figlio2=document.createElement('div')
					figlio2.classList.add('figlio2');


					//Creat clasa pt artwork; dar trebuia?
					var artwork=document.createElement('img');
					artwork.classList.add('artwork');
					artwork.src=obj.results[index].artworkUrl100;

					//De RECOPIAT
					var artist=document.createElement('a');
					artist.innerText=obj.results[index].artistName;
					artist.classList.add('artist');
					artist.href=obj.results[index].artistViewUrl;
					artist.target='_blank';

					var album=document.createElement('div');
					album.innerText=obj.results[index].collectionName;
					album.classList.add('album'); 	

					var track=document.createElement('div');
					track.innerText=obj.results[index].trackName;
					track.classList.add('track');

					var duration=document.createElement('div');
					duration.innerText= "Duration: " + millisToMinutesAndSeconds(obj.results[index].trackTimeMillis);
					duration.classList.add('duration');

					//GENRE
					var genre=document.createElement('div');
					genre.innerText=obj.results[index].primaryGenreName;
					genre.classList.add('genre');

					var player=document.createElement('audio');
					//player.setAttribute('src', obj.results[0].previewUrl);
					player.controls = 'controls';
					player.volume=0.5;
					player.src = obj.results[index].previewUrl;
					player.classList.add('player');

					//Link peste ARTWORK
					var artworklink=document.createElement('a');
					artworklink.href=obj.results[index].collectionViewUrl;
					artworklink.target='_blank';
					artworklink.classList.add('artworklink'); // DE COPIAT
												

					//Relationships
					padre.appendChild(artwork);

					//Toate astea vor merge in FIGLIO
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
					$('#results').append(padre);
					

					});
						// Je doit faire la dif entre JAVA Pur et jQuery
			
			});
		} 
	});


	//Search an ALBUM
	$('#search2').keypress(function(event) {
		if (event.which==13) {

			$('#results').html('');
			var album=$('#search2').val();
			$.ajax({
			url: "https://itunes.apple.com/search?term="+album+"&country=fr&limit=15&media=music&entity=album",
			cache:false
			

			})
			.done(function( json ) {

				var obj=jQuery.parseJSON(json);  
				console.log(obj.resultCount);

				//# of results
				$("#nrresult").html( obj.resultCount + " artists found:" ); 
				
				//DEMO CODE
				/*var artwork=document.getElementById('artwork');
				artwork.src=obj.results[0].artworkUrl100;
				$("#artist").html(obj.results[0].artistName); 
				$("#album").html( obj.results[0].collectionName ); 
				$("#track").html( obj.results[0].trackName );
				$("#duration").html(millisToMinutesAndSeconds(obj.results[0].trackTimeMillis));
				var player=document.getElementsByTagName('audio')[0];
				player.setAttribute('src', obj.results[0].previewUrl); */


				
				//Boucle functionne pas, pareil avec le FOR
				obj.results.forEach(function(element,index) {
				console.log(index);
					

					//Generation
					//Container for result
					var padre=document.createElement('div');
					padre.classList.add('padre');

					//Mini-Container for text/player
					var figlio=document.createElement('div')
					figlio.classList.add('figlio');

					//Mini-Container for text/player
					var figlio2=document.createElement('div')
					figlio2.classList.add('figlio2');


					//Creat clasa pt artwork; dar trebuia?
					var artwork=document.createElement('img');
					artwork.classList.add('artwork');
					artwork.src=obj.results[index].artworkUrl100;

					//De RECOPIAT
					var artist=document.createElement('a');
					artist.innerText=obj.results[index].artistName;
					artist.classList.add('artist');
					artist.href=obj.results[index].artistViewUrl;
					artist.target='_blank';

					var album=document.createElement('div');
					album.innerText=obj.results[index].collectionName;
					album.classList.add('album'); 	

					var track=document.createElement('div');
					track.innerText=obj.results[index].trackName;
					track.classList.add('track');

					var trackCount=document.createElement('div');
					trackCount.innerText= "Nr. of tracks: " + obj.results[index].trackCount;
					trackCount.classList.add('duration');

					//GENRE
					var genre=document.createElement('div');
					genre.innerText="Genre: " + obj.results[index].primaryGenreName;
					genre.classList.add('genre');

					var player=document.createElement('audio');
					//player.setAttribute('src', obj.results[0].previewUrl);
					player.controls = 'controls';
					player.volume=0.5;
					player.src = obj.results[index].previewUrl;
					player.classList.add('player');

					//Link peste ARTWORK
					var artworklink=document.createElement('a');
					artworklink.href=obj.results[index].collectionViewUrl;
					artworklink.target='_blank';
					artworklink.classList.add('artworklink'); // DE COPIAT
												

					//Relationships
					padre.appendChild(artwork);

					//Toate astea vor merge in FIGLIO
					figlio.appendChild(artist);
					figlio.appendChild(album);
					figlio.appendChild(track);
					figlio2.appendChild(trackCount);
					figlio2.appendChild(genre);
					figlio.appendChild(player);
					
					artworklink.appendChild(artwork);

					padre.appendChild(artworklink);

					padre.appendChild(figlio);
					padre.appendChild(figlio2);
					$('#results').append(padre);
					

					});
						// Je doit faire la dif entre JAVA Pur et jQuery
			
			});
		} 
	});

	//Search a TRACK
	$('#search3').keypress(function(event) {
		if (event.which==13) {

			$('#results').html('');
			var track=$('#search3').val();
			$.ajax({
			url: "https://itunes.apple.com/search?term="+track+"&country=fr&limit=20&media=music&entity=musicTrack",
			cache:false
			

			})
			.done(function( json ) {

				var obj=jQuery.parseJSON(json);  
				console.log(obj.resultCount);

				//# of results
				$("#nrresult").html( obj.resultCount + " tracks found:" ); 
				
				//DEMO CODE
				/*var artwork=document.getElementById('artwork');
				artwork.src=obj.results[0].artworkUrl100;
				$("#artist").html(obj.results[0].artistName); 
				$("#album").html( obj.results[0].collectionName ); 
				$("#track").html( obj.results[0].trackName );
				$("#duration").html(millisToMinutesAndSeconds(obj.results[0].trackTimeMillis));
				var player=document.getElementsByTagName('audio')[0];
				player.setAttribute('src', obj.results[0].previewUrl); */


				
				//Boucle functionne pas, pareil avec le FOR
				obj.results.forEach(function(element,index) {
				console.log(index);
					

					//Generation
					//Container for result
					var padre=document.createElement('div');
					padre.classList.add('padre');

					//Mini-Container for text/player
					var figlio=document.createElement('div')
					figlio.classList.add('figlio');

					//Mini-Container for text/player
					var figlio2=document.createElement('div')
					figlio2.classList.add('figlio2');



					var artwork=document.createElement('img');
					artwork.classList.add('artwork');
					artwork.src=obj.results[index].artworkUrl100;


					var artist=document.createElement('a');
					artist.innerText=obj.results[index].artistName;
					artist.classList.add('artist');
					artist.href=obj.results[index].artistViewUrl;
					artist.target='_blank';

					var album=document.createElement('div');
					album.innerText=obj.results[index].collectionName;
					album.classList.add('album');	

					var track=document.createElement('div');
					track.innerText=obj.results[index].trackName;
					track.classList.add('track');

					var duration=document.createElement('div');
					duration.innerText= "Duration: " + millisToMinutesAndSeconds(obj.results[index].trackTimeMillis);
					duration.classList.add('duration');

					//2B COPIED
					var genre=document.createElement('div');
					genre.innerText=obj.results[index].primaryGenreName;
					genre.classList.add('genre');

					var player=document.createElement('audio');
					//player.setAttribute('src', obj.results[0].previewUrl);
					player.controls = 'controls';
					player.src = obj.results[index].previewUrl;
					player.classList.add('player');
					player.volume=0.5;


					//Cand dau click pe poza, caut toate piesele din album
						// ajung pe itunes la album
						// trebuie sa pun ARTWORK intr-un <A>	
						
					//Link peste ARTWORK
					var artworklink=document.createElement('a');
					artworklink.href=obj.results[index].collectionViewUrl;
					artworklink.target='_blank';
					artworklink.classList.add('artworklink'); // DE COPIAT

					//Relationships
					
					

					//Toate astea vor merge in FIGLIO
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
					$('#results').append(padre);
					

					});
						// Je doit faire la dif entre JAVA Pur et jQuery
			
			});
		} 
	});
});




//Misc
function millisToMinutesAndSeconds(millis) {
	var minutes = Math.floor(millis / 60000);
	var seconds = ((millis % 60000) / 1000).toFixed(0);
	return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }


