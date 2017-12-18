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

const postColor = (value) => {
  $.post(url + 'colors', { color: { value: `${value}` } })
  .then( response => console.log(response))
}

// responses
const appendSwatch = (color_array) => {
  color_array.forEach(function(element) {
    $('article.colorized-text').append(`
      <div class="swatch" style="background-color:${COLORS[element]};"></div>
    `)
  })
}


const appendTopColor = (data) => {
  console.log(data)
}

const returnTopColor = (data) => {
  $('.top-color').append(`${data['value']}: ${data['color_count']}`)
  $('.top-color').css({"background-color": `${data['value']}`})
}

const returnUnique = (array) => {
  array.forEach(function(element) {
    if (COLORS[element]) {
      postColor(element)
  }})
  return [...new Set(array)]
}


// event handlers
$( document ).ready(function() {
  getColor('top_color');

  $(":button").on('click', function(event) {
    const text_input = $('input[type=text], textarea').val().replace(/\./g,' ').split(" ")
    const uniqueText = returnUnique(text_input)
    console.log(`line 63#: ${uniqueText}`)
    })

  })
