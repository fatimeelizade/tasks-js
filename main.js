//task1
function fesil(ay){
    switch(ay){
        case "Fevral":
        case "Dekabr":
        case "Yanvar":
            console.log("Qis");
            break;
        case "Mart":
        case "Aprel":    
        case "May":
            console.log("Yaz");
            break;
        case "Iyun":
        case "Iyul":
        case "Avqust":
            console.log("Yay");
            break;
        case "Sentyabr":
        case "Oktyabr":
        case "Noyabr":
            console.log("Payiz");
            break;
    } 
    
}
fesil("May");
//task2
function checkSpeed(speed){
    if(speed<=70){
        console.log("Sürət məhdudiyyətinə uyğundur." );
    }
    else if(speed>70 && speed<=80){
        console.log("Sürət həddini aşdınız, 10 azn cərimə!" );
    }
    else if(speed>80 && speed<=90){
        console.log("Sürət həddini aşdınız, 20 azn cərimə!" );
    }
    else if(speed>90 && speed<=100){
        console.log("Sürət həddini aşdınız, 30 azn cərimə!" );
    }
    else{
        console.log("Təhlükəli sürət! 400 AZN cərimə!");
    }
}
checkSpeed(-2);
//task3
function burcler(ay,gun){
    if((gun>=21 && ay=="Mart") || (gun<=20 && ay=="Aprel") ){
        console.log("Goc")
    }
    else if((gun>=21 && ay=="Aprel") || (gun<=21 && ay=="May") ){
        console.log("Buga")
    }
    else if((gun>=22 && ay=="May") || (gun<=21 && ay=="Iyun") ){
        console.log("Ekizler")
    }
    else if((gun>=22 && ay=="Iyun") || (gun<=23 && ay=="Iyul") ){
        console.log("Xerceng")
    }
    else if((gun>=24 && ay=="Iyul" )|| (gun<=23 && ay=="Avqust" )){
        console.log("Sir")
    }
    else if((gun>=24 && ay=="Avqust" )|| (gun<=23 && ay=="Sentyabr") ){
        console.log("Qiz")
    }
    else if((gun>=24 && ay=="Sentyabr") || (gun<=23 && ay=="Oktyabr") ){
        console.log("Terezi")
    }
    else if((gun>=24 && ay=="Oktyabr") || (gun<=22 && ay=="Noyabr" )){
        console.log("Eqreb")
    }
    else if((gun>=23 && ay=="Noyabr") || (gun<=22 && ay=="Dekabr")){
        console.log("Oxatan")
    }
    else if((gun>=23 && ay=="Dekabr" )|| (gun<=20 && ay=="Yanvar") ){
        console.log("Oglaq")
    }
    else if((gun>=21 && ay=="Yanvar") || (gun<=19 && ay=="Fevral" )){
        console.log("Dolca")
    }
    else if((gun>=20 && ay=="Fevral") || (gun<=20 && ay=="Mart")){
        console.log("Baliqlar")
    }
}
burcler("May",10)
//task4
function isSaati(saat){
    if(saat<=8){
        console.log(saat*20)
    }
    else if(saat>8){
        console.log(8*20+(saat-8)*25)
    }
}
isSaati(8)