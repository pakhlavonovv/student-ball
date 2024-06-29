function studentBall(ball = +prompt("Ballingizni kiriting")){
    if(ball ==  100){
        alert("Siz budjet asosida kirdingiz")
    } else if (ball >= 70){
        alert("Siz kontrakt asosida kirdingiz")
    } else if (ball <= 50){
        alert("Afsuski siz yiqildingiz")
    }
}
console.log(studentBall()) 