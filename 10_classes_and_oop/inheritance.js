class User{
    constructor(username){
        this.username = username;
    }
    logMe(){
        console.log(`Username is ${this.username}`);
        
    }
}

class Teacher extends User{
    constructor(username,email,pasword){
        super(username)
        this.email = email;
        this.password = pasword;

    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
        
    }
}

const chai = new Teacher("chai", "chai@teacher.com","123442")

chai.addCourse()
chai.logMe()

const masalaChai = new User("masalaChai")

masalaChai.logMe();

console.log(chai instanceof User);
