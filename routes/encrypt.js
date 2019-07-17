var express = require("express");
var router = express.Router();
const encrypt = {
  "a": "q",
  "b": "w",
  "c": "e",
  "d": "r",
  "e": "t",
  "f": "y",
  "g": "u",
  "h": "i",
  "i": "o",
  "j": "p",
  "k": "a",
  "l": "s",
  "m": "d",
  "n": "f",
  "o": "g",
  "p": "m",
  "q": "h",
  "r": "j",
  "s": "k",
  "t": "l",
  "u": "z",
  "v": "x",
  "w": "c",
  "x": "v",
  "y": "b",
  "z": "n",
  " ": "#",
  "0": ")",
  "1": "(",
  "2": "*",
  "3": "&",
  "4": "^",
  "5": "%",
  "6": "$",
  "7": "#",
  "8": "@",
  "9": "!",
}
const cycle = {
  "a": "p",
  "b": "o",
  "c": "i",
  "d": "u",
  "e": "y",
  "f": "t",
  "g": "r",
  "h": "e",
  "i": "w",
  "j": "q",
  "k": "l",
  "l": "k",
  "m": "j",
  "n": "h",
  "o": "g",
  "p": "f",
  "q": "d",
  "r": "s",
  "s": "a",
  "t": "m",
  "u": "n",
  "v": "b",
  "w": "v",
  "x": "c",
  "y": "x",
  "z": "z",
  " ": "#",
  "0": "+",
  "1": "=",
  "2": "-",
  "3": "_",
  "4": "]",
  "5": "|",
  "6": "[",
  "7": "~",
  "8": "`",
  "9": "!",
  "10": ">",

};
// router.post("/", (req, res) => {
//   const {
//     tobeencoded
//   } = req.body;

//   function encode(lowerCaseString) {
//     let encryptedString = "";
//     for (const char of lowerCaseString) {
//       encryptedString += encrypt[char];
//     }
//     res.render('render', {
//       code: encryptedString
//     })
//   }
//   encode(tobeencoded);
// });

router.post('/', (req, res) => {
  const {
    string
  } = req.body;
  let errors = [];
  if (!string) {
    errors.push({
      message: 'Please, Enter Text to encrpty'
    });
    res.render('index', {
      errors: errors[0].message
    })

  } else {
    const lowerCaseString = string.toLowerCase();

    function encode(lowerCaseString) {
      let encryptedString = '';
      for (const char of lowerCaseString) {
        encryptedString += encrypt[char];
        encryptedString += cycle[char]
      }
      res.render('render', {
        currentYear: new Date().getFullYear(),
        code: encryptedString
      });
    }
    encode(lowerCaseString);
  }
});

module.exports = router;