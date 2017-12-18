const $ = require('jquery')
const url = 'https://color-swatch-api.herokuapp.com/api/v1/'
import COLORS from './data/colors'

// const request = require('./requests')
// const response = require('./responses')

// requests
const getColor = (path) => {
  $.get(url + path , {method: 'GET'})
    .then( response => appendTopColor(response))
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
    if (COLORS[element.toLowerCase()]) {
      $('article.colorized-text').append(`
        <div class="swatch" style="background-color:${COLORS[element.toLowerCase()]};"></div>
      `)
    }
  })
}

const appendTopColor = (data) => {
  console.log(`this is the ${data}`)
  $('.top-color').append(`${data['value']}: ${data['color_count']}`)
  $('.top-color').css({"background-color": `${data['value']}`})
}

const returnUniqueAndPost = (array) => {
  array.forEach(function(element) {
    if (COLORS[element]) {
      postColor(element.toLowerCase())
  }})
  return [...new Set(array)]
}

const returnText = () => {
  const text_input = $('input[type=text], textarea').val().replace(/\./g,' ').split(" ")
  const uniqueText = returnUniqueAndPost(text_input)
  console.log(`line 63#: ${uniqueText}`)
  appendSwatch(uniqueText)
}


// event handlers
$( document ).ready(function() {
  getColor('top_color')

  $(":button").on('click', function(event) {
      returnText()
    })

  $('input[type=text], textarea').on('keypress', function(event) {
    let keycode = (event.keyCode ? event.keyCode : event.which)
    if(keycode == '13'){
      returnText()
    }
  })
})
