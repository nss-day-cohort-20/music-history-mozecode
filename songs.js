//iterate through and remove unwanted characters and words
//replace > with -
//add a song to the beginning and end of the array
//add each string to the DOM in the right place

var songs = [];

songs[songs.length] = "Legs > by Z*ZTop on the album Eliminator";
songs[songs.length] = "The Logical Song > by Supertr@amp on the album Breakfast in America";
songs[songs.length] = "Another Brick in the Wall > by Pink Floyd on the album The Wall";
songs[songs.length] = "Welco(me to the Jungle > by Guns & Roses on the album Appetite for Destruction";
songs[songs.length] = "Ironi!c > by Alanis Moris*ette on the album Jagged Little Pill";

var newSong = songs.push("Eyes Of The World - by The Grateful Dead on the album One From The Vault");

var newSong2 = songs.unshift("Arsonist's Lullabye - by Hozier on the album From Eden");

for(var j=0; j<songs.length; j++){

    songs[j] = songs[j].replace (/@/g, '');
    songs[j] = songs[j].replace (/\(/g, '');
    songs[j] = songs[j].replace (/\*/g, '');
    //have to use an escape character to do ( and *
    songs[j] = songs[j].replace (/!/g, '');
    songs[j] = songs[j].replace (/>/g, "-");
}

 //need song title, artist, album separated from
 //string

function addSongToDiv(message) {
    var wrapperDiv = document.getElementById("wrapper");
    wrapperDiv.innerHTML = message;
}

for (var i = 0; i < songs.length; i++){

songs[i] = songs[i].split(/ - by | on the album /);
console.log ("songs[i]",songs[i]);
}

console.log ("songs", songs);

var html = "";

function iterateThroughArray(arr) {
    for (var i = 0; i < songs.length; i++) {

         message =`<div class="songinfo">
				<h2>${songs[i][0]}</h2>
				<ul>
					<li>${songs[i][1]}</li>
					<li>${songs[i][2]}</li>
					<li>Genre</li>
				</ul>
			</div>`

            html += message;

    }
 addSongToDiv(html);
}

iterateThroughArray(songs);