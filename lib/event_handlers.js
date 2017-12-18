const $ = require('jquery')
const url = 'https://color-swatch-api.herokuapp.com/api/v1/'
// cors = require('cors')
// app = express()
// app.use(cors())


// requests


const getColor = (path) => {
  $.get(url + path , {method: 'GET'})
    .then( response => returnTopColor(response))
    .catch( error => {console.log( { error })
  })
}

const appendTopColor = (data) => {
  console.log(data)
}

const returnTopColor = (data) => {
  console.log(data['value'])
}

$( document ).ready(function() {
  getColor('top_color');
  $(":button").on('click', function(event) {

  })
});
