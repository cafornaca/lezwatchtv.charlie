/*
https://lezwatchtv.com/wp-json/lwtv/v1/stats/shows/complex/
Work on the combineData function next time.
*/

var pageNum = 1;
var showData;

function getAllShowData(){
// Ajax is always going to give you succ with data object or error with err object.
  $.ajax({
  url: 'https://lezwatchtv.com/wp-json/lwtv/v1/stats/shows/complex/?page=' + pageNum,
  method: 'GET',
  timeout: 2000,

  success: function(data) {
    pageNum++;
    console.log(data);  // For debugging.
    // Call a function here to append each page of JSON.
    combineData();
  },

// If this doesn't work, it might be because it's specific to GitHub's API:
  error: function(jqXHR, textStatus, err) {
    // Show error message:
    console.log('text status ' +textStatus+', err '+err);
  }
  }); // End of Ajax method call.
}

function combineData(input) {
  // TO-DO
}

/*
function name(param, param2){ //standard
//do stuff here
}

let name = function (param, param2){ // same as previous
//do stuff here
}

function(param, param2){ //anonymous function, usable only when called once when defined (basically a code block)
//do stuff here
}

(param, param2) => { //same as previous
//do stuff here
}

let name = (param, param2) => { //same as standard example
//do stuff here
}

*/