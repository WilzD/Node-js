//arraow function 
const product=(a,b)=>{
    return a*b
}
console.log(product(3,5))

const student={
    name:'wilson',
    age:23,
    add:'bhopal',
    print(){
        console.log('hi my name is '+ this.name +' my age is '+this.age+' and i am from '+this.add)
    }
}
student.print()