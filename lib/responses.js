const $ = require('jquery')
import COLORS from './data/colors'
const request = require('./requests')
const response = require('./responses')


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
      request.postColor(element.toLowerCase())
  }})
  return [...new Set(array)]
}

const returnText = () => {
  const text_input = $('input[type=text], textarea').val().replace(/\./g,' ').split(" ")
  const uniqueText = returnUniqueAndPost(text_input)
  console.log(`line 63#: ${uniqueText}`)
  appendSwatch(uniqueText)
}

module.exports = {
  appendSwatch,
  appendTopColor,
  returnUniqueAndPost,
  returnText
}
