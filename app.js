const sentence = [
  `The lake is a long way from here.`,
  `Purple is the best city in the forest.`,
  `He colored deep space a soft yellow.`,
  `She looked into the mirror and saw another person.`,
  `He colored deep space a soft yellow.`]

const form = document.querySelector('.lorem-form')
const amount = document.getElementById('amount')
const result = document.querySelector('.lorem-text')

const input = document.querySelector('.input')
const select = document.querySelector('.form-select')
const modal = document.querySelector('.modal-body')
const output = document.querySelector('.output')
const reload = document.querySelector('.reload')


document.addEventListener('DOMContentLoaded', () => {
  select.addEventListener('input', handleSelect)

  // form for sentence
  form.addEventListener('submit', function(e) {
    e.preventDefault()
    const value = parseInt(amount.value)
    
    random = Math.floor(Math.random() * sentence.length)

    if(isNaN(value) || value <= 0 || value > 4) {

      result.innerHTML = `<p class='result'> ${sentence[random]}</p>`
    } else {
      let tempText = sentence.slice(0, value)
    
      tempText = tempText.map(item => {
        return ` <p> ${item} </p>`
      }).join('')

      result.innerHTML = tempText
    }
  })

  // reload e.listener
  reload.addEventListener('click', () => {
    location.reload();
  })
})

function handleSelect(e) {
  let x = e.target.value // select action
  //console.log(x)
  let text = input.value // text
  //console.log(text)

      if(x === 'chars') {
          totalCharacters(text)
      } else if ( x === 'words' ) {
          totalWords(text)
      } else if (x === 'even') {
          totalEvenWords(text)
      } else if (x === 'shortest') {
          shortesWord(text)
      } else if ( x === 'first' ) {
          findFirstLetter(text)
      } else if ( x === 'last' ) {
        findLastLetter(text)
      } else if ( x === 'avg') {
        findAvg(text)
      } else if ( x === 'count') {
        countLetters(text)
      } else if( x === 'rever') {
        reverseSentence(text)
      } else if ( x === 'pair') {
        findPairWord(text)
      } else if ( x === 'pairL') {
        reverseLetters(text)
      }    
}


// chars
function totalCharacters(text) {
  
  let count = 0

  for(let i = 0; i < text.length; i++) {

    if(typeof text[i] === 'string') {
      if(text[i] === ' ') {
      continue
    }
     count++
    }
  }
   
  output.innerHTML = `Your text has ${count} letters.`
}

// words
function totalWords (x) {
  let text = x.split(' ')
  console.log(text)
  let words = 1

  for(let i = 1; i < text.length; i++) {
    if(text[i] === '') {
      continue
    }
    words += 1
  }

  output.innerHTML = `Your text has ${words} words.`
}

// even & odd
function totalEvenWords(x) {
  let text = x.split(' ')
  
  let even = 0
  let odd = 0

  for(let i = 0; i < text.length; i++) {
    if(text[i].length % 2 === 0) {
      if(text[i] === '') {
        continue
      }
       even+=1
    }
  }

  for(let i = 0; i < text.length; i++) {
    if( text[i].length % 2 === 1) {
      if(text[i] === '') {
        continue
      }
      odd+=1
    }
  }



  output.innerHTML = `Your text has ${even} evens ` + '\n' + `and ${odd} odds words. `
}


// shortest
function shortesWord(t) {
  let text = t.split(' ')

  let shortest = text[0]
  let longest = text[0]

  for(let i = 0; i < text.length; i++) {
    if( text[i].length < shortest.length && text[i] !== '') {
      shortest = text[i]
    }
  }
 
  for(let i = 0; i < text.length; i++) {
    if( text[i].length > longest.length ) {
      longest = text[i]
    }
  }

  output.innerHTML = `Your shortest & longest words are: [ ${shortest} ] ~ [ ${longest} ]`
}


// first letter
function findFirstLetter(x) {
  let text = x.split('')
  console.log(text)

  let first = text[0]
   output.innerHTML = `Your first letter is:  " ${first} ".`
}

// last letter
function  findLastLetter(x) {
  let text = x.split('')
  console.log(text)
  let last = text.length - 1
  let lastIndex = text[last]

  output.innerHTML = `Your last character is:  " ${lastIndex} ".`
}

// avg of letters
function findAvg(t) {
  let text = t.split('')
  console.log(text)
  let sum = 0

  for(let i = 0; i < text.length; i++) {
    if(text[i] === '') {
      continue
    } else {
      sum++
    }
  }

  sum = sum / 2
  output.innerHTML = `Your average of letter are:  " ${sum} ".`
}

// count letter
function countLetters(x) {
  let text = x.split('')
  console.log(text)

  let obj = {}
  for(let i = 0; i < text.length; i++) {
    if(obj[text[i]] === undefined) {
      obj[text[i]] = 1
    } else {
      obj[text[i]] +=1
    }
  }
 
  console.log(obj)
  alert(' see console.log ')
}

function reverseSentence(x) {
  let text = x.split(' ')
  //console.log(text.reverse())
  output.innerHTML = `Your sentence is :  " ${text.reverse()} ".`
}

function findPairWord(x) {
  let text = x.split(' ')
   let pairWords = []
  
  for( let i = 0; i < text.length; i++) {
    if( text[i].length % 2 === 0 ) {
      pairWords.push(text[i])
    } 
  }
 
 pairWords = pairWords.reverse()

  console.log(pairWords)
  output.innerHTML = `Your sentence is: " ${pairWords} ".`
}

function reverseLetters(x) {
  let result = ''
  let chars = x.split('')

  for(let i = 0; i < x.length; i+=2) {
    
    let currentSlice = chars.slice(i, i + 2)
    let reversSlide = currentSlice.reverse()
    let joinSlice = reversSlide.join('')
    result += joinSlice
    
  }

  console.log(result)
  output.innerHTML = `" ${result} ".`
}
