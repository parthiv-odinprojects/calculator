var a=prompt("enter number1");
var b=prompt("enter operation");
var c=prompt("enter number2");
if(b=="+"){
    console.log(a+c);
}
else if(b=="-"){
    console.log(a-c);
}
else if(b=="*" || b=="x"){
    console.log(a*c);
}
else if(b=="/"){
    console.log(a/c);
}
else{
    console.log("invalid operation!enter valid operantor");
}