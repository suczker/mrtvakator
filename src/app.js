import 'bootstrap/dist/css/bootstrap.min.css';
// import 'babel-polyfill';
import $ from 'jquery';

import mrtvakator from './mrtvakator';

const url = 'https://dl.dropboxusercontent.com/u/47062935/generator%20mrtvakov3.txt';

let mrtvakStorySegments = []; // mrtvacka historka;

$(document.body).html ( `
<div class='row'>
<div class="col-sm-12" style="padding-left: 3em">
<input id='klikMe' type='button' value='Urob mrtvacku historku, inac bic!'>
<p id='genText' style="line-height: 1.68;
    font-size: 1.25em;
    max-width: 40em;"></p>
<!-- <p>Umiem vyrobit <strong>" + total +"</strong> naozaj peknych vynalezov</p>" -->
</div>
</div>
`);


$.get(url).done(function( data ) {
    mrtvakStorySegments = mrtvakator.parseMrtvakLines(data);
    $('#klikMe').click(createMrtvakStory); // navesit udalost, kdy je nahrano
    createMrtvakStory();
  }).fail(function(){alert("Data load failed")});
  

// function that is fired, when the mrtvak story is created
function createMrtvakStory(){
    let storyText = mrtvakator.createMrtvakStory(mrtvakStorySegments);
    $('#genText').html(storyText);
}