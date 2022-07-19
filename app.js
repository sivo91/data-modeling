



const input = document.querySelector('.input')
const select = document.querySelector('.form-select')
const modal = document.querySelector('.modal-body')
const output = document.querySelector('.output')
const reload = document.querySelector('.reload')


document.addEventListener('DOMContentLoaded', () => {
  select.addEventListener('input', handleSelect)

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
   } else if (x === 'odd') {
      totalOddWords(text)
   } else if (x === 'shortest') {
      shortesWord(text)
   } else if ( x === 'longest' ) {
      longestWord(text)
   } else if ( x === 'first' ) {
      findFirstLetter(text)
   } else if ( x === 'last' ) {
     findLastLetter(text)
   } else if ( x === 'avg') {
    findAvg(text)
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

// even
function totalEvenWords(x) {
  let text = x.split(' ')
  console.log(text)
  let count = 1

  for(let i = 1; i < text.length; i++) {
     
    if(text[i].length % 2 === 0) {
      
       count+=1
    }
  }

  output.innerHTML = `Your text has ${count} even words.`
}

// odd
function totalOddWords(t) {
  let text = t.split(' ')
  let count = 1

  for(let i = 1; i < text.length; i++) {
    if( text[i].length % 2 === 1) {
      if(text[i] === '') {
        continue
      }
      count+=1
    }
  }
  output.innerHTML = `Your text has ${count} even words.`
}

// shortest
function shortesWord(t) {
  let text = t.split(' ')
  console.log(text)

  let shortest = text[0]

  for(let i = 0; i < text.length; i++) {
  
    if( text[i].length < shortest.length && text[i] !== '') {
      shortest = text[i]
    }
  }

  output.innerHTML = `Your shortest word is:  " ${shortest} ".`
}

// longest
function  longestWord(x) {
  let text = x.split(' ')
  console.log(text)

  let longest = text[0]
  for(let i = 0; i < text.length; i++) {
    if( text[i].length > longest.length ) {
      longest = text[i]
    }
  }
  output.innerHTML = `Your longest word is:  " ${longest} ".`
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

  output.innerHTML = `Your last letter is:  " ${lastIndex} ".`
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





