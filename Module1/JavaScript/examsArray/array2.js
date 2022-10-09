let number = []
let row =[]


let result = '<table>'
result += '<tbody>'
for(let i = 0; i < number.length; i ++ ) {
    number[i] = Math.floor(Math.random() * 5);
    result += '<tr>'
    for(let j = 0; j < number[i][row].length; j ++) {
        number[i][row] = Math.floor(Math.random() * 7);
        result += `<td> ${number[i][row][cell]} </td>`
    }

    result += '</tr>'


}
result += '</tbody>'

result += '<table>'
