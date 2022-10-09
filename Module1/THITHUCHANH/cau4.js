// function Staff (fullname, email) {
//     this.fullname = fullname;
//     this.email = email;
//     this.setFullname = function (fullname) {
//         this.fullname = fullname;
//     }
//     this.getFullname = function () {
//         return this.fullname;
//     }
//     
// }
class Staff {
    
    constructor(fullname,email){
        this.fullname = fullname;
        this.email = email;
    }

    setFullName(fullname) {
        this.fullname = fullname
   } 
   getFullName() {
        return this.fullname ;
  }
   setEmail(email){
        this.email = email;
}
    getEmail(){
        return this.email;
    }
    toString(){
        return `Fullname: ${this.fullname}  Email: ${this.email}`;
    }
}

let david = new Staff("David","david@gmail.com");
david.setFullName("David Do");
david.setEmail("david.do.@gmail.com");
console.log(david.toString());

let array=[
    new Staff("David","david@gmail.com"),
    new Staff("Nhat","nhat@gmail.com"),
    new Staff("huy","huy@mmai.com")
]

for(let i = 0; i < array.length; i++){
    console.log(array[i].toString());
}

