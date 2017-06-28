//iterate through and remove unwanted characters and words
//replace > with -
//add a song to the beginning and end of the array
//add each string to the DOM in the right place

var songs = [];

let linkView= document.getElementById("linkView");
let linkAdd = document.getElementById("linkAdd");
let addMusic = document.getElementById("addMusic");
let sidebyside = document.getElementById("sidebyside");
let songName= document.getElementById("songName");
let artist= document.getElementById("artist");
let album= document.getElementById("album");
let addBtn= document.getElementById("addBtn");

function getSong(){
    let songInput=songName.value;
    return songInput;
}

function getArtist(){
    let songArtist = artist.value;
    return songArtist;
}

function getAlbum(){
    let songAlbum = album.value;
    return songAlbum;
}

function clearContent(){
    songName.value="";
    artist.value ="";
    album.value ="";
}

addBtn.addEventListener("click", function(){
    let sInput=getSong();
    let sArtist=getArtist();
    let alb=getAlbum();
    let songString = [];
    songString.push(sInput);
    songString.push(sArtist);
    songString.push(alb);
    let newSongInput=songs.unshift(songString);//in the array, but won't print
iterateThroughArray(songs);
 sidebyside.classList.toggle("isHidden");
 addMusic.classList.toggle("isHidden");
clearContent();
})

linkAdd.addEventListener("click", function(){
    addMusic.classList.toggle("isHidden");
    sidebyside.classList.toggle("isHidden");
    linkView.classList.toggle("disabled");
    linkView.addEventListener("click", function(){
        addMusic.classList.toggle("isHidden");
        sidebyside.classList.toggle("isHidden");
    })
})


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


function addSongToDiv(message) {
    var wrapperDiv = document.getElementById("wrapper");
    wrapperDiv.innerHTML = message;
}

 //need song title, artist, album separated from string

for (var i = 0; i < songs.length; i++){

songs[i] = songs[i].split(/ - by | on the album /);
console.log ("songs[i]",songs[i]);
}

console.log ("songs", songs);




function iterateThroughArray(arr) {
    var html = "";//start with a blank slate
    addSongToDiv("");
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

console.log ("songsArray", songs);


