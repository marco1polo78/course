arr=[3,5,6,7,8,9];
function s(a){
    var b;
    b=a+4;
    return b;
}

function map(fn,array){
    for(var i=0;i<array.length;i++){
        array[i]=fn(array[i]);
    }
    return array;
}

document.write(map(s,arr));