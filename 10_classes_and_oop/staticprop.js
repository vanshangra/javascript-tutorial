class User{
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
        
    }

    createId(){
        return `123`
    }
}

const vansh = new User("vansh")
console.log(vansh.createId());
