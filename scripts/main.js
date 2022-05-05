// A function to generate random passwords based on the provided length.

const generatePassword = (passwordLength) => {

    /* 
    passwordLength : Number 
    **/

    const lowerCases = "abcdefghjkmnpqrstuvwxyz";
    const upperCases = "ABCDEFGHJKLMNPQRSTUVWXYZ";
    const numbers = "0123456789";
    const specialCases = "!#$%&*+-=?@^_{}[]()\/'\"`~,;:.<>\\";

    let includedChars = [lowerCases, upperCases, numbers, specialCases];
    let passwordChars = new Array();

    for (let i = 0; i < passwordLength; i++) {

        let chars = includedChars[Math.floor(Math.random() * 4)];
        let index = Math.floor(Math.random() * chars.length);
        passwordChars.push(chars[index]);
    }

    return passwordChars.join('');

}

const showPassword = () => {
    let passwordLength = document.getElementById("passwordLength").value;
    let password = generatePassword(passwordLength);
    alert(password);
}

// document.addEventListener("DOMContentLoaded", () => generatePassword(16))