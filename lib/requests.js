const $ = require('jquery')
const url = 'https://color-swatch-api.herokuapp.com/api/v1/'
import COLORS from './data/colors'
const response = require('./responses')

const getColor = (path) => {
  $.get(url + path , {method: 'GET'})
    .then( response => response.appendTopColor(response))
    .catch( error => {console.log( { error })
  })
}

const postColor = (value) => {
  $.post(url + 'colors', { color: { value: `${value}` } })
  .then( response => console.log(response))
}

module.exports = {
  getColor,
  postColor
}
