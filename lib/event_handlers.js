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

// responses
const appendTopColor = (data) => {
  console.log(data)
}

const returnTopColor = (data) => {
  $('.top-color').append(`${data['value']}: ${data['color_count']}`)
  $('.top-color').css({"background-color": `${data['value']}`})
}

// event handlers
$( document ).ready(function() {
  getColor('top_color');
  $(":button").on('click', function(event) {
    console.log($('input[type=text], textarea').val())
  })
});
