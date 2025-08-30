const users = [
    {name:"Anna", age:18, email:"anna@gmail.com"},
    {name:"Denis", age:17, email:"denis@gmail.com"},
    {name:"Elena", age:21, email:"elena@gmail.com"}
]
for (const {name, age, email} of users) {
    console.log(name);
    console.log(age);
    console.log(email);
    console.log("---------");
}