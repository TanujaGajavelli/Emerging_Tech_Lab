function reverse(num){
    let rev=0
    while(num!=0){
        let digit=parseInt(num%10)        
        rev=rev*10+digit
        num=Math.floor(num/10)
    }
    return rev
}
export default reverse