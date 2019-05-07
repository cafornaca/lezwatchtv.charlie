/*
https://lezwatchtv.com/wp-json/lwtv/v1/stats/shows/complex/
*/
getAllShowData()
console.log("I'm gay. ;)")

var pageNum = 0;
var showData = {};

function getAllShowData(){  // Function that makes ajax call
// Ajax is always going to give you succ with data object or error with err object.
  $.ajax({
  url: 'https://lezwatchtv.com/wp-json/lwtv/v1/stats/shows/complex/?page=' + pageNum,
  method: 'GET',
  timeout: 2000,
  success: function(data) { // Happens when you get back the JSON from the page.
    // End case. Check for length of [] using === to not get 0, null, etc... javascript...
    if (data.length === 0) {
      // Make text file with format JSON, encode storageObj into JSON
      var dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(showData));
      // Set the target
      var dlAnchorElem = document.getElementById('downloadAnchorElem');
      // Reference goes to dataStr
      document.getElementById('downloadAnchorElem').setAttribute("href", dataStr);
      // Give attributes...
      document.getElementById('downloadAnchorElem').setAttribute("download", "showData.json");
      document.getElementById('downloadAnchorElem').click();
      return;
    }
    pageNum++;
    console.log(data);  // For debugging.
    combineData(data);
  },

// If this doesn't work, it might be because it's specific to GitHub's API:
  error: function(jqXHR, textStatus, err) {
    // Show error message:
    console.log('text status ' +textStatus+', err '+err);
  }
  }); // End of Ajax method call.
}

function combineData(data) {
  Object.keys(data).forEach(function(key, index) {
    showData[key] = String(data[key]);  // Done twice because the show "24" goofs this up.
    showData[key] = data[key];
  });
  setTimeout(getAllShowData, 2000)
}



/*
My notes on JS stuff:

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
