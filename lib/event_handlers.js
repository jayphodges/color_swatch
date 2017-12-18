const $ = require('jquery')
const url = 'https://color-swatch-api.herokuapp.com/api/v1/'
import COLORS from './data/colors'
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
    const text_input = $('input[type=text], textarea').val().replace(/\./g,' ').split(" ")
    const uniqueText = [...new Set(text_input)]
    console.log(uniqueText)
    const array = COLORS
    uniqueText.forEach(function(element) {
      // if (array.indexOf(element) > 0) {
      //   console.log(element)
      // }
      console.log(element)
      console.log(typeof array)
    })

  })

})
