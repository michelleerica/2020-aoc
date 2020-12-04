import { check } from "prettier";

const data = {
    1: {
        requirement: [16,18],
        letter: 'h',
        password: 'nhff'
    },
    2:{
        requirement: [17,18],
        letter: 'd',
        password: 'ddddddddddddddddzn'
    },
    3: {
        requirement: [15,18],
        letter: 'c',
        password: 'cccccccccccccczcczc'
    }
}

let checkPassword;
let tracker = 0;
let numberOfLetters;

export default function dayTwo(){
    for (const key in data) {
        checkPassword(data[key].requirement, data[key].letter, data[key].password)
    }
    return tracker;
}

checkPassword = ( req, letter, password) => {
    let num = numberOfLetters(letter, password);
    if( req[0] <= num && num <= req[1] ) {
        tracker++
    }
}

numberOfLetters = (letter, password) => {
    return (password.toString().match(new RegExp(letter, "g")) || []).length
}
