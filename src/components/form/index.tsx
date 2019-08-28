import React, { useState, useEffect } from 'react'

import styles from './form.module.sass'

const Form: React.FC = () => {
  interface Terminals {
    [propName: string]: boolean
  }

  interface Dictionary {
    [propName: string]: string[]
  }

  const [input, setInput] = useState('')
  const [min, setMin] = useState(3)
  const [max, setMax] = useState(10)
  const [num, setNum] = useState(100)
  const [text, setText] = useState<string[]>([])
  const [starters, setStarters] = useState<string[]>([])
  const [startersReady, setStartersReady] = useState(false)
  const [terminals, setTerminals] = useState<Terminals>({})
  const [terminalsReady, setTerminalsReady] = useState(false)
  const [dictionary, setDictionary] = useState<Dictionary>({})
  const [dictionaryReady, setDictionaryReady] = useState(false)
  const [output, setOutput] = useState('')

  useEffect(() => {
    setText(
      input
        .toLowerCase() // make everything lowercase
        .split(/[\n ."“”‘’,/#!$#%@^&*;:{}–—=_`~[\]()0-9]/) // split the input based on any punctuation (except ' and -), line breaks, spaces, or numbers
        .filter(word => word.length > 0) // strip out any empty 'words'
    )

    // flag that the data needs to be rebuilt
    setStartersReady(false)
    setTerminalsReady(false)
    setDictionaryReady(false)
  }, [input])

  useEffect(() => {
    // when the data is built, trigger generation
    if (startersReady && terminalsReady && dictionaryReady) {
      makeWords()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startersReady, terminalsReady, dictionaryReady])

  // make a random choice, given options
  const choose = (arr: string[]) => arr[Math.floor(arr.length * Math.random())]

  const build = (): void => {
    // if the input has changed,
    if (!startersReady || !terminalsReady || !dictionaryReady) {
      let newStart: string[] = []
      let newTerm: Terminals = {}
      let newDict: Dictionary = {}

      // build the dictionary, terminals, and starters
      for (let i = 0; i < text.length; i++) {
        // grab the word and split it into an array of letters
        const word = text[i].split('')

        // add the word-initial letter pair to the list of possible starters
        newStart.push(word.slice(0, 2).join(''))

        // add the word-final letter pair to the list of possible terminals
        newTerm[word.slice(-2).join('')] = true

        // build the dictionary and stats
        for (let j = 0; j < word.length - 1; j++) {
          // add lookups for single letters
          if (newDict.hasOwnProperty(word[j])) {
            // if the letter is already in the dictionary, add its following letter
            newDict[word[j]].push(word[j + 1])
          } else {
            // otherwise, add the letter and its following letter
            newDict[word[j]] = [word[j + 1]]
          }

          // add lookups for paired letters after reaching the second letter
          if (j > 0) {
            if (newDict.hasOwnProperty(word[j - 1] + word[j])) {
              // if the letter pair is already in the dictionary, add its following letter
              newDict[word[j - 1] + word[j]].push(word[j + 1])
            } else {
              // otherwise, add the letter pair and its following letter
              newDict[word[j - 1] + word[j]] = [word[j + 1]]
            }
          }
        }
      }

      setStarters([...newStart])
      setTerminals({ ...newTerm })
      setDictionary({ ...newDict })
    }

    // trigger generation with useEffect
    setStartersReady(true)
    setTerminalsReady(true)
    setDictionaryReady(true)
  }

  const generate = (min: number): string => {
    // grab the last letter(s) of the word for lookup
    const getLookup = (word: string[]) => {
      return word.length < 2 ? word[word.length - 1] : word.slice(-2).join('')
    }

    // start with starter letters
    let letter = choose(starters)
    let next = letter.split('')
    let word = next
    let lookup = getLookup(word)

    while (dictionary.hasOwnProperty(lookup)) {
      // choose the next letter and add it to the word
      next = dictionary[lookup]
      letter = choose(next)
      word.push(letter)
      lookup = getLookup(word)

      // if the word is long enough and the current letter is a terminal, end the loop
      if (word.length >= min && terminals.hasOwnProperty(lookup)) {
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

  const makeWords = (): void => {
    if (!startersReady || !terminalsReady || !dictionaryReady) {
      // if the data needs to be built, build it
      build()
    } else {
      // if the data is built, generate the output
      let results = []

      // if the minimum length is greater than the maximum, display an error
      if (min > max) {
        results.push('Maximum length must be greater or equal to minimum length.')
      } else if (text.length === 0) {
        results.push('No input provided.')
      } else if (starters.length === 0 || starters[0] === '') {
        results.push('Internal error.')
      } else {
        // randomize the length of the words between the min and the max
        for (let i = 0; i < num; i++) {
          const length = min + Math.floor((max + 1 - min) * Math.random())
          results.push(generate(length))
        }
      }

      setOutput(results.join(' '))
    }
  }

  return (
    <main className={styles.main}>
      <textarea
        id={styles.textInput}
        className={styles.text}
        name='text input'
        placeholder='Enter as many words as you can. The more the better.'
        value={input}
        onChange={e => setInput(e.target.value)}
      />
      <div id={styles.options} className={styles.options}>
        <label>
          minimum length:{' '}
          <input
            id={styles.min}
            className={styles.num}
            name='minimum length'
            type='number'
            min='1'
            max='10'
            value={min}
            onChange={e => setMin(+e.target.value)}
          />
        </label>
        <label>
          maximum length:{' '}
          <input
            id={styles.max}
            className={styles.num}
            name='maximum length'
            type='number'
            min='3'
            max='20'
            value={max}
            onChange={e => setMax(+e.target.value)}
          />
        </label>
        <label>
          number of words:{' '}
          <input
            id={styles.num}
            className={styles.num}
            name='number of words'
            type='number'
            min='1'
            max='9999'
            value={num}
            onChange={e => setNum(+e.target.value)}
          />
        </label>
      </div>
      <button
        id={styles.generate}
        className={styles.generate}
        name='generate'
        onClick={makeWords}
      >
        Generate
      </button>
      <div className={styles.results}>
        <p className={styles.result}>{output}</p>
      </div>
    </main>
  )
}

export default Form
