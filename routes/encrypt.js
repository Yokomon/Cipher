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
  " ": "#"
};
router.post("/", (req, res) => {
  const {
    tobeencoded
  } = req.body;

  function encode(lowerCaseString) {
    let encryptedString = "";
    for (const char of lowerCaseString) {
      encryptedString += encrypt[char];
    }
    res.send(encryptedString)
  }
  encode(tobeencoded);
});

module.exports = router;