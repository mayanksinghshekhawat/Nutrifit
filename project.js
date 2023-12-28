const btn= document.querySelector('#calculate');
btn.addEventListener('click',function(){
    let height=document.getElementById("height").value;
    let weight=document.getElementById("weight").value;
    if(height=='' || weight ==''){
        alert("Please fill the required fields :) ");
        return;
    }
    height=height/100;
    let bmi = (weight/(height*height));
    let res = bmi.toFixed(2);
    // bmi=25;
    console.log(res);
    document.querySelector('#result').innerHTML=res;


    let status='';
    if(bmi<=18.5){
        status="Underweight";
    }
    else if (bmi>18.5 && bmi<=25){
        status="Healthy";
    }
    else if (bmi>25 && bmi<=30){
        status="Overweight";
    }
    else{
        status="Obese";
    }
    document.querySelector('#comment').textContent=status;

});



