
var arrImg = new Array("./aeso.png");

function test(num){

    console.log(num.id);
    let check = new Object(num);
    console.log(check.value);
    if(check.id=='choice1'){
        console.log(arrImg);
        document.getElementById("photo").src=arrImg[0];
        console.log('하이');
        
    }


}
