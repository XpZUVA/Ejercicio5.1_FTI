let cont = true;
const nums = [];
while(cont){
    let num = prompt("Introduzca números");
    if(num == null || num == '0'){
        cont = false;
    }else{
        num = parseInt(num);
        if(isNaN(num)){
            alert("No es un número");
        }else{
            nums.push(num);
        }
    }

}
console.log(nums);




function Object(){
    this.sum = sum();
    this.length = nums.length;
    this.mult = mult();
}

function sum(){
    let sum = 0;
    for(let i = 0; i < nums.length; i++){
        sum += nums[i];
    }
    return sum;
}

function mult(){    
        let mult = 1;
        for(let i = 0; i < nums.length; i++){
            mult *= nums[i];
        }
        return mult;
    
}

let obj = new Object();
console.log(obj);
