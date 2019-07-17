var express = require('express');
var router = express.Router();
const cipher = {
    "q": "a",
    "w": "b",
    "e": "c",
    "r": "d",
    "t": "e",
    "y": "f",
    "u": "g",
    "i": "h",
    "o": "i",
    "p": "j",
    "a": "k",
    "s": "l",
    "d": "m",
    "f": "n",
    "g": "o",
    "m": "p",
    "h": "q",
    "j": "r",
    "k": "s",
    "l": "t",
    "z": "u",
    "x": "v",
    "c": "w",
    "v": "x",
    "b": "y",
    "n": "z",
    "#": " ",
    "!": "1",
    "@": "2",
    "?": "3",
    "$": "4",
    "%": "5",
    "^": "6",
    "&": "7",
    "*": "8",
    "(": "9",
    ")": "0",
}

router.post('/', (req, res) => {
    const {
        string
    } = req.body;
    let error = [];
    if (!string) {
        error.push({
            message: 'Please, Enter Text to decrypt'
        });
        res.render('index', {
            error: error[0].message
        })

    } else {
        const lowerCaseString = string.toLowerCase();
        const lowerCaseStringArr = lowerCaseString.split('');
        let decryptthis = ''
        for (let i = 0, len = lowerCaseStringArr.length; i < len; i++) {
            if (i % 2 === 0) {
                decryptthis += lowerCaseStringArr[i]
            } else {
                //Throwey that letter ahbeg;
            }
        }
        console.log(lowerCaseStringArr);

        function decrypt(lowerCaseString) {
            let decryptedString = '';
            for (const char of lowerCaseString) {
                decryptedString += cipher[char]
            }
            res.render('render', {
                currentYear: new Date().getFullYear(),
                code: decryptedString
            });
            // return encryptedString;
        }
        decrypt(decryptthis);
    }
});

module.exports = router;