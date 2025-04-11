class User{
    constructor(email, password){
        this.email = email;
        this.password = password
    }

    get email(){
        return this._email.toUpperCase()
    }
    set email(value){
        this._email = value
    }


    get password(){
        return `${this._password}vansh`
    }


    set password(value){
        this._password = value
    }
}

const vansh = new User("vansh@v.com","abc")
console.log(vansh.email);
