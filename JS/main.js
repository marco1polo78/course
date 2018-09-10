var array_color=[
    {
        color:"silver",
        price:0
    },
    {
        color:"red",
        price:30
    },
    {
        color:"gold",
        price:40
    },
    {
        color:"spacegray",
        price:50
    }];
var array_memory=[
    {
        memory:16 ,
        price:50
    },
    {
        memory:32 ,
        price:100
    },
    {
        memory:64 ,
        price:150
    }];
n = 0 ;
str1=str2="";
price=0;
while(n<1){
    color=prompt(str1+"Який колір телефону Ви бажаєте. З можливих варіантів є silver,red,gold,spacegray","");
    for(var i=0;i<array_color.length;i++){
        if (color===array_color[i].color    ){
            n=1;
            a=i;
            break;
        }
    str1="Кольору, який був введений, немає.";
    }
}
n=0;
while(n<1){
    memory=prompt(str2+"Яку кількість пам'яті телефону Ви бажаєте. З можливих варіантів є 16 Gb,32 Gb, 64 Gb","");
    for(var i=0;i<array_memory.length;i++){
        if (+memory===array_memory[i].memory){
            n=1;
            b=i;
            break;            
        }
    str2="Кількості пам'яті, яка була введена, немає.";
    }
}
var price= 300+ +array_color[a].price+ +array_memory[b].price;
br="<br>";
document.write("<img height='400' src='img/"+color+".jpg'>"+br);
document.write("<h3>Memory:"+memory+" Gb</h3>"+br);
document.write("<h3>Proice:"+price+"$</h3>"+br);