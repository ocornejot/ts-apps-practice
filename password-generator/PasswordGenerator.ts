type PasswordConfig = {
    length: number,
    useLowercase: boolean,
    useUppercase: boolean,
    useNumbers: boolean,
    useSymbols: boolean
}

class PasswordGenerator {
    #password: string;

    static readonly LETTERS = 'abcdefghijklmnopqrstuvwxyz';
    static readonly NUMBERS = '0123456789';
    static readonly SYMBOLS = '!@#$%&';
    static readonly OPTIONS = [
        'lowerCase',
        'upperCase',
        'numbers',
        'symbols'
    ];

    #config: PasswordConfig = {
        length: 8,
        useLowercase: true,
        useUppercase: true,
        useNumbers: true,
        useSymbols: true
    }

    constructor() {
        this.#password = '';
    }

    get password() {
        return this.#password;
    }

    get config() {
        return this.#config;
    }

    generatePassword(config:PasswordConfig ): string {

        this.#validateConfig(config);

        this.#config = config;

        let { length } = config;
        let generatedPassword = '';
        for (let i = 0; i < length; i++) {
            generatedPassword += this.#getRandomOption(config);
        }

        this.#password = generatedPassword;
        
        return generatedPassword;
    }

    getPasswordStrength(): string {
        if (this.#password.length === 0) {
            throw new Error('No password generated. Please generate a password first.');
        }
        let { length, useLowercase, useUppercase, useNumbers, useSymbols } = this.#config;

        const enabledOptions = [useLowercase, useUppercase, useNumbers, useSymbols].filter(Boolean);
        let strengthPoints = enabledOptions.length;

        if (length >= 20) {
            strengthPoints += 2;
        } else if (length >= 15) {
            strengthPoints += 1;
        }

        if (strengthPoints >= 5) {
            return 'Strong';
        } else if (strengthPoints >= 3) {
            return 'Medium';
        }
        
        return 'Weak';
    }

    #validateConfig(config: PasswordConfig): boolean {
        const { length, useLowercase, useUppercase, useNumbers, useSymbols } = config;
        if (length < 8) {
            throw new Error('Password length must be at least 8 characters.');
        }

        const enabledOptions = [useLowercase, useUppercase, useNumbers, useSymbols].filter(Boolean);
        if (enabledOptions.length <= 1) {
            throw new Error('At least two options must be enabled.');
        }

        return true;
    }

    #getRandomOption(config: Partial<PasswordConfig>): any {
        const {
            useLowercase,
            useUppercase,    
            useNumbers,
            useSymbols
        } = config;

        let enabledOptions = [];
        if (useLowercase) {
            enabledOptions.push(() => this.#getRandomLetter(false));
        }
        if (useUppercase) {
            enabledOptions.push(() => this.#getRandomLetter(true));
        }
        if (useNumbers) {
            enabledOptions.push(() => this.#getRandomNumber());
        }
        if (useSymbols) {
            enabledOptions.push(() => this.#getRandomSymbol());
        }

        const randomIndex = Math.floor(Math.random() * enabledOptions.length);
        return enabledOptions[randomIndex]?.();
    }

    #getRandomLetter(useUppercase: boolean): string {
        let letter = this.#getRandomElement(PasswordGenerator.LETTERS);
        if (useUppercase) {
            letter = letter.toUpperCase();
        }
        return letter;
    }

    #getRandomNumber(): string {
        return this.#getRandomElement(PasswordGenerator.NUMBERS);
    }

    #getRandomSymbol(): string {
        return this.#getRandomElement(PasswordGenerator.SYMBOLS);
    }

    #getRandomElement(collection: string): string {
        const randomIndex = Math.floor(Math.random() * collection.length);
        return collection.charAt(randomIndex);
    }

}

export default PasswordGenerator;