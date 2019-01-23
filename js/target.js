/* From https://www.wordgamedictionary.com/word-lists/ */

const ANAG = {};

for (let d in wl) {
  let word = wl[d].word.toUpperCase();
  let nat = word.split('').sort().join('');

  if (ANAG.hasOwnProperty(nat)) {
    ANAG[nat].push(word);
  } else {
    ANAG[nat] = [word];
  }
}

let target_input = document.querySelectorAll('.target');
let target_input2 = document.querySelector('#target_input');

for (let i = 0; i < target_input.length; i++)  {
  target_input[i].oninput = afterInputLetter;
}

function afterInputLetter(e) {
  e.target.value = e.target.value.toUpperCase();
  let id_num = parseInt(e.target.id[6]);
  if (id_num < 9 && e.target.value.length == 1) {
    document.querySelector('#target'+(id_num+1).toString()).focus();
  }

  let letters = '';
  for (let i = 0; i < target_input.length; i++)  {
    letters += target_input[i].value;
  }

  if (letters.length == 9) {
    let sols = ANAG[
      letters.split('').sort().join('')
    ];
    let s = document.querySelector('#sol');
    if (sols == undefined) {
      s.innerHTML = 'No solutions found.'
    } else {
      s.innerHTML = sols.join(', ');
    }

  }
}
