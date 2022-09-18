let letters = 'abcdefghijklmnopqrstuvwxyz'
function alphabetPosition(text) {
    let result = []
    for (let i = 0; i < text.length; i++) {
        let answer = letters.indexOf(text[i]) + 1
        result.push(answer)
    }
    console.log(result);
}
alphabetPosition('developer')
alphabetPosition('decadev')
alphabetPosition('success')

module.exports = alphabetPosition
  