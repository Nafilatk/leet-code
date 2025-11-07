function naff(){
    let a=0
    function naff2(){
        return a++
    }
            return naff2

}
let counter=naff()
console.log(counter())
console.log(counter())
console.log(counter())
console.log(counter())