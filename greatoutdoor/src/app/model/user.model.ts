export class User{
    userId:string;
    userType:string;
    userPassword:string;
    token: User;
    
    constructor(userId:string,userType:string,userPassword:string){
        this.userId=userId;
        this.userType=userType;
        this.userPassword=userPassword;
    }
}