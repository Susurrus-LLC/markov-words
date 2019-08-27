import React, { useState, useEffect } from 'react'
import styles from './page.module.sass'

const Page: React.FC = () => {
  interface Terminals {
    [propName: string]: boolean
  }

  interface Dictionary {
    [propName: string]: string[]
  }

  const [input, setInput] = useState('')
  const [changed, setChanged] = useState(false)
  const [min, setMin] = useState(3)
  const [max, setMax] = useState(8)
  const [num, setNum] = useState(50)
  const [err, setErr] = useState('')
  const [text, setText] = useState([''])
  const [starters, setStarters] = useState([''])
  const [terminals, setTerminals] = useState<Terminals>({})
  const [dictionary, setDictionary] = useState<Dictionary>({})
  const [output, setOutput] = useState('')

  useEffect(() => {
    // split the input based on any punctuation, line breaks, or spaces
    setText(
      input
        .toLowerCase()
        .split(/[\n .,/#!$%@^&*;:{}=\-_`~[\]()]/)
        .filter(word => word.length > 0)
    )
  }, [input])

  // make a random choice, given options
  const choose = (arr: string[]) => arr[Math.floor(arr.length * Math.random())]

  const build = (min: number) => {
    // if the minimum length is greater than the maximum, display an error
    if (min > max) {
      setErr('Maximum length must be greater or equal to minimum length.')
      return false
    } else {
      setErr('')
    }

    // if the input has changed,
    if (changed) {
      // build the dictionary, terminals, and starters
      for (let i = 0; i < text.length; i++) {
        // grab the word and split it into an array of letters
        const word = text[i].split('')
        // add the word-initial letter pair to the list of possible starters
        setStarters(starters.concat(word.slice(0, 2).join('')))
        // add the word-final letter pair to the list of possible terminals
        setTerminals({
          ...terminals,
          [word.slice(-2).join('')]: true
        })

        // build the dictionary and stats
        for (let j = 0; j < word.length - 1; j++) {
          // add lookups for single letters
          if (dictionary.hasOwnProperty(word[j])) {
            // if the letter is already in the dictionary, add its following letter
            setDictionary({
              ...dictionary,
              [word[j]]: dictionary[word[j]].concat([word[j + 1]])
            })
          } else {
            // otherwise, add the letter and its following letter
            setDictionary({
              ...dictionary,
              [word[j]]: [word[j + 1]]
            })
          }

          // add lookups for paired letters after reaching the second letter
          if (j > 0) {
            if (dictionary.hasOwnProperty(word[j - 1] + word[j])) {
              // if the letter pair is already in the dictionary, add its following letter
              setDictionary({
                ...dictionary,
                [word[j - 1] + word[j]]: dictionary[
                  word[j - 1] + word[j]
                ].concat([word[j + 1]])
              })
            } else {
              // otherwise, add the letter pair and its following letter
              setDictionary({
                ...dictionary,
                [word[j - 1] + word[j]]: [word[j + 1]]
              })
            }
          }
        }
      }
    }

    const generate = (min: number): string | false => {
      // grab the last letter(s) of the word for lookup
      const getLookup = (word: string[]) => {
        return word.length < 2 ? word[word.length - 1] : word.slice(-2).join('')
      }

      // build words
      if (text.length > 0) {
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
      } else {
        setErr('No input provided.')
        return false
      }
    }

    return generate(min)
  }

  const makeWords = () => {
    let results = []
    let errored = false

    // randomize the length of the words between the min and the max
    for (let i = 0; i < num; i++) {
      const length = min + Math.floor((max + 1 - min) * Math.random())
      results.push(build(length))
    }

    // if the results array includes a falsy value, it errored
    for (let i = 0; i < results.length; i++) {
      errored = !results[i]
      break
    }

    if (errored) {
      setOutput(err)
    } else {
      setOutput(results.join(' '))
    }
  }

  return (
    <main className={styles.main}>
      <textarea
        className={styles.text}
        placeholder='Enter as many words as you can. The more the better.'
        value={input}
        onChange={e => {
          setInput(e.target.value)
          setChanged(true)
        }}
      />
      <div>
        <label>
          minimum length:{' '}
          <input
            id='min'
            type='number'
            min='1'
            max='10'
            defaultValue={min.toString()}
            value={min}
            onChange={e => setMin(+e.target.value)}
          />
        </label>
        <label>
          maximum length:{' '}
          <input
            id='max'
            type='number'
            min='3'
            max='20'
            defaultValue={max.toString()}
            value={max}
            onChange={e => setMax(+e.target.value)}
          />
        </label>
        <label>
          number of words:{' '}
          <input
            id='num'
            type='number'
            min='1'
            max='1000'
            defaultValue={num.toString()}
            value={num}
            onChange={e => setNum(+e.target.value)}
          />
        </label>
      </div>
      <button
        id='generate'
        onClick={() => {
          makeWords()
          setChanged(false)
        }}
      >
        Generate
      </button>
      <div className='results'>
        <p className='result'>{output}</p>
      </div>
    </main>
  )
}

export default Page
