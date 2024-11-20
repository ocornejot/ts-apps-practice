import PasswordGenerator from "./PasswordGenerator";


const passwordGenerator = new PasswordGenerator();
let config = {
    length: 10,
    useLowercase: true,  
    useUppercase: false,
    useNumbers: false,
    useSymbols: false
};
console.log(passwordGenerator.generatePassword(config));

console.log(passwordGenerator.getPasswordStrength());
