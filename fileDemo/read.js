const fs = require('fs')
const file = fs.createWriteStream('./newText.txt')

for (let i=0; i < 1e5; i++) {
  file.write('Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate, labore voluptates. Vero, deserunt repellat delectus quas sunt quam nemo officiis, iure tempora vel ratione quis, odit eligendi excepturi error suscipit!\n')
}

file.end()
