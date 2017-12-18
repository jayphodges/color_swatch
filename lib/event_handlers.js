const $ = require('jquery')
const url = 'https://color-swatch-api.herokuapp.com/api/v1/'


// requests
const getColor = (path) => {
  fetch(url + path , {method: 'GET'})
    .then( response => console.log(response))
    .catch( error => {console.log( { error })
  })
}

const appendTopColor = (data) => {

}

const returnTopColor = () => {

}

$( document ).ready(function() {
  getColor('top_color');
  $(":button").on('click', function(event) {

  })
});
