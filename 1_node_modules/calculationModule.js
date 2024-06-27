const calculation ={
    sum : function(){
        let a=5; b= 7;
        let c= a+b;
        console.log("ans = ", c)
    },

    age: function(){
        let n= 19;
        if(n>=18){
            console.log("you can vote")
        }
        else {
            console.log("you can not vote")
        }
    },

    mul: function(a, b){
            return a * b;
    }
}

module.exports = calculation;