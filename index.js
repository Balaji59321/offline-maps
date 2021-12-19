// var a="";
// function test(){
//     // var x = document.getElementsByTagName('button').value;
//     // console.log(document.getElementsByTagName('button'))
//     var x= document.getElementsByTagName('button')[0].innerHTML;
//     document.getElementsByTagName('p')[0].innerHTML = x;
// }

// function clear(){
//     document.getElementsByTagName('p')[0].innerHTML=""
// }


function test(){
var a = document.getElementsByTagName('button');
for(var temp=0;temp<a.length;temp++){
        a[temp].addEventListener("click", function() {
            console.log(a[temp])
            var x= document.getElementsByTagName('button')[temp].value;
            console.log(x);
            // document.getElementsByTagName('p')[0].innerHTML=document.getElementsByTagName('button')[temp].innerHTML;
        });
    }
}
