const fs = require('fs')
const file = fs.createWriteStream('./myNewFile.txt')
process.stdin.setEncoding('utf8')

process.stdin.on('readable', () => {
  let userInput;

  while ((userInput = process.stdin.read()) !== null) {
    process.stdout.write(`Your Data: ${userInput}`)
    file.write(`${userInput}`)
    if(userInput.trim() === 'exit'){
      break;
    }
  }
})

process.stdin.on('end', () => {
  process.stdout.write("Done reading\n")
})
process.stdin.on('close', () => {
  process.stdout.write('terminal signing out\n')
})