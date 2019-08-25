'use strict'

const input = document.getElementById('input')
const minimum = document.getElementById('min')
const maximum = document.getElementById('max')
const number = document.getElementById('num')
const button = document.getElementById('generate')
const result = document.getElementById('result')

// prepare the input
const inputText = () => {
  // split based on any punctuation, line breaks, or spaces
  return input.value.toLowerCase().split(/[\n .,\/#!$%\^&\*;:{}=\-_`~\[\]()]/).filter(word => word.length > 0)
}

let errorText = ''

// make a random choice, given options
const choose = arr => arr[Math.floor(arr.length * Math.random())]

const build = min => {
  // if the minimum length is greater than the maximum
  if (minimum > maximum) {
    errorText = 'Maximum length must be greater or equal to minimum length.'
    return false
  }

  const text = inputText()

  const starters = []
  const terminals = {}
  const dictionary = {}

  // build the dictionary, terminals, and starters
  for (let i = 0; i < text.length; i++) {
    // grab the word and split it into an array of letters
    const word = text[i].split('')
    // add the word-initial letter to the list of possible starters
    starters.push(word[0])
    // add the word-final letter to the list of possible terminals
    terminals[word[word.length - 1]] = true
    // build the dictionary and stats
    for (let j = 0; j < word.length - 1; j++) {
      if (dictionary.hasOwnProperty(word[j])) {
        // if the letter is already in the dictionary, add its following letter
        dictionary[word[j]].push(word[j + 1])
      } else {
        // otherwise, add the letter and its following letter
        dictionary[word[j]] = [word[j + 1]]
      }
    }
  }

  const generate = min => {
    // build words
    if (text.length > 0) {
      // start with a starter letter
      let letter = choose(starters)
      let word = [letter]

      while (dictionary.hasOwnProperty(letter)) {
        // choose the next letter and add it to the word
        const next = dictionary[letter]
        letter = choose(next)
        word.push(letter)
        // if the word is long enough and the current letter is a terminal, end the loop
        if (word.length >= min && terminals.hasOwnProperty(letter)) {
          break
        }
      }

      // if the word isn't long enough, try again
      if (word.length < min) {
        return generate(min)
      } else {
        return word.join('')
      }
    }
  }

  return generate(min)
}

const makeWords = () => {
  let results = []
  let errored = false

  // convert values from strings to numbers
  const min = +minimum.value
  const max = +maximum.value

  // randomize the length of the words between the min and max
  for (let i = 0; i < num.value; i++) {
    const length = min + Math.floor((max + 1 - min) * Math.random())
    results.push(build(length))
  }

  // if the results array includes a falsy value, it errored
  for (let i = 0; i < results.length; i++) {
    if (!results[i]) {
      errored = true
    }
  }

  if (errored) {
    result.innerHTML = errorText
  } else {
    result.innerHTML = results.join(' ')
  }
}

button.addEventListener("click", makeWords)
