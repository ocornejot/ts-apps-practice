interface PasswordGeneratorInterface {
    generatePassword(config: PasswordConfig): string,
    validatePassword(): string
}

type PasswordConfig = {
    length: number,
    useLowercase: boolean,
    useUppercase: boolean,
    useNumbers: boolean,
    useSymbols: boolean
}
/*
1. Obtener la configuración seleccionada por el usuario
2. Generar una contraseña aleatoria a partir de la configuración
3. Validar la contraseña
*/

class PasswordGenerator implements PasswordGeneratorInterface {
    private _password: string;

    static readonly LETTERS = 'abcdefghijklmnopqrstuvwxyz';
    static readonly NUMBERS = '0123456789';
    static readonly SYMBOLS = '!@#$%&_-';
    static readonly OPTIONS = [
        'lowerCase',
        'upperCase',
        'numbers',
        'symbols'
    ];

    public config: PasswordConfig = {
        length: 8,
        useLowercase: true,
        useUppercase: true,
        useNumbers: true,
        useSymbols: true
    }

    constructor() {
        this._password = '';
    }

    get password() {
        return this._password;
    }

    generatePassword(config:PasswordConfig ): string {
        let { length } = config;
        let generatedPassword = '';
        for (let i = 0; i < length; i++) {
            generatedPassword += this.#getRandomOption(config);
        }
        
        return generatedPassword;
    }

    validatePassword(): string {
        //TODO
        return '';
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