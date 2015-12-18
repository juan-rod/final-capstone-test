app.controller("lyricCtrl", function($scope, $window) {

   $scope.songs = [
            {
                url: 'http://www.alexkatz.me/codepen/music/interlude.mp3'
            }        
          ];
//Play and Pause
// $scope.play = function () {
//     // start music

//     if (music.paused) {
//         music.play();
//         console.log(music.play());
//         // remove play, add pause
//         pButton.className = "";
//         pButton.className = "pause";
//     } else { // pause music
//         music.pause();
//         // remove pause, add play
//         pButton.className = "";
//         pButton.className = "play";
//     }
// };


        // $scope.songs = [
        //     {title:'song1',visible:true,url:'http://www.alexkatz.me/codepen/music/interlude.mp3'},
        //     {title:'song2',visible:true,url:'url-song-2'}
        // ];

        $scope.play = function() {
              var sound = $scope.songs.url;
              sound.play();
            };
      

        // $scope.pauseTrack = function(s) {
        //     s.visible = true;
        // };
    




// var music = document.getElementById('music'); // id for audio element
// var duration; // Duration of audio clip
// var pButton = document.getElementById('pButton'); // play button

// var playhead = document.getElementById('playhead'); // playhead

// var timeline = document.getElementById('timeline'); // timeline
// // timeline width adjusted for playhead
// var timelineWidth = timeline.offsetWidth - playhead.offsetWidth;

// // timeupdate event listener
// music.addEventListener("timeupdate", timeUpdate, false);

// //Makes timeline clickable
// timeline.addEventListener("click", function (event) {
//   moveplayhead(event);
//   music.currentTime = duration * clickPercent(event);
// }, false);

// // returns click as decimal (.77) of the total timelineWidth
// function clickPercent(e) {
//   return (e.pageX - timeline.offsetLeft) / timelineWidth;
// }

// // Makes playhead draggable 
// playhead.addEventListener('mousedown', mouseDown, false);
// window.addEventListener('mouseup', mouseUp, false);

// // Boolean value so that mouse is moved on mouseUp only when the playhead is released 
// var onplayhead = false;
// // mouseDown EventListener
// function mouseDown() {
//   onplayhead = true;
//   window.addEventListener('mousemove', moveplayhead, true);
//   music.removeEventListener('timeupdate', timeUpdate, false);
// }
// // mouseUp EventListener
// // getting input from all mouse clicks
// function mouseUp(e) {
//   if (onplayhead == true) {
//     moveplayhead(e);
//     window.removeEventListener('mousemove', moveplayhead, true);
//     // change current time
//     music.currentTime = duration * clickPercent(e);
//     music.addEventListener('timeupdate', timeUpdate, false);
//   }
//   onplayhead = false;
// }
// // mousemove EventListener
// // Moves playhead as user drags
// function moveplayhead(e) {
//   var newMargLeft = e.pageX - timeline.offsetLeft;
//   if (newMargLeft >= 0 && newMargLeft <= timelineWidth) {
//     playhead.style.marginLeft = newMargLeft + "px";
//   }
//   if (newMargLeft < 0) {
//     playhead.style.marginLeft = "0px";
//   }
//   if (newMargLeft > timelineWidth) {
//     playhead.style.marginLeft = timelineWidth + "px";
//   }
// }

// // timeUpdate 
// // Synchronizes playhead position with current point in audio 
// function timeUpdate() {
//   var playPercent = timelineWidth * (music.currentTime / duration);
//   playhead.style.marginLeft = playPercent + "px";
//   if (music.currentTime == duration) {
//     pButton.className = "";
//     pButton.className = "play";
//   }
// }


// // Gets audio file duration
// music.addEventListener("canplaythrough", function () {
//   duration = music.duration;  
// }, false);







});