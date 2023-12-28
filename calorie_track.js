const btn1= document.querySelector('#find');
btn1.addEventListener('click',function(){
    const foods={
        // "Select":0,
        "Chapati":120,
        "Rice":130,
        "Milk":62,
        "Curd":98,
        "Lassi":246,
        "Apple":95,
        "Banana":110,
        "Orange":60,
        "Moong Dal":236,
        "Chana Dal":252,
    };
    const carbs={
        // "Select":0,
        "Chapati":18,
        "Rice":28.7,
        "Milk":4.6,
        "Curd":4.3,
        "Lassi":44,
        "Apple":25,
        "Banana":28,
        "Orange":16.5,
        "Moong Dal":41,
        "Chana Dal":60,
    };
    const protein={
        // "Select":0,
        "Chapati":3.1,
        "Rice":2.36,
        "Milk":3.4,
        "Curd":3.4,
        "Lassi":6.0,
        "Apple":1,
        "Banana":1,
        "Orange":1,
        "Moong Dal":16,
        "Chana Dal":13,
    };
    const fats={
        // "Select":0,
        "Chapati":3.7,
        "Rice":0.19,
        "Milk":3.6,
        "Curd":4.3,
        "Lassi":5.1,
        "Apple":0,
        "Banana":0,
        "Orange":0,
        "Moong Dal":2,
        "Chana Dal":4,
    };
    const cal_goal=document.querySelector('#calgoal').value;
    const protein_goal=document.querySelector('#proteingoal').value;
    const food1=document.querySelector('#food1').value;
    const quantity1=parseInt(document.querySelector('#quantity1').value);
    const food2=document.querySelector('#food2').value;
    const quantity2=parseInt(document.querySelector('#quantity2').value);
    const food3=document.querySelector('#food3').value;
    const quantity3=parseInt(document.querySelector('#quantity3').value);
    const calorie1= (foods[food1]*quantity1);
    console.log(calorie1)
    const calorie2= (foods[food2]*quantity2);
    const calorie3= (foods[food3]*quantity3);
    const sum=(calorie1+calorie2+calorie3);
    const protein1=(protein[food1]*quantity1);
    const protein2=(protein[food2]*quantity2);
    const protein3=(protein[food3]*quantity3);
    const fats1=(fats[food1]*quantity1);
    const fats2=(fats[food2]*quantity2);
    const fats3=(fats[food3]*quantity3);
    const carbs1=(carbs[food1]*quantity1);
    const carbs2=(carbs[food2]*quantity2);
    const carbs3=(carbs[food3]*quantity3);
    const proteins=Math.floor((protein1+protein2+protein3));
    const fat=Math.floor((fats1+fats2+fats3));
    const carb=Math.floor((carbs1+carbs2+carbs3));
    document.querySelector('#result').innerHTML=sum;
    // const protein=70;
    // const carbs=70;
    // const fats=70;
    const prot_diff= (protein_goal - proteins);
    const cal_diff= (cal_goal - sum);
    swal("Total Calories : "+ sum + "\n" +"Total Protein :"+proteins +"\n" + "Total Fat :"+fat+"\n"+"Total Carbs:"+ carb );
    document.querySelector('#pro_diff').innerHTML=prot_diff;
    document.querySelector('#cal_diff').innerHTML=cal_diff;
    document.querySelector('.goaldiff').style.visibility='visible';
    const arr=[sum,proteins,fat,carb]
    const labels=["Calories","Protein","Fats","Carbs"];
    var barColors = [
        "#b91d47",
        "#00aba9",
        "#2b5797",
        "#e8c3b9",
        "#1e7145"
      ];
    new Chart("myChart", {
        type:"doughnut",
        data:{
            labels: labels,
            datasets:[{
                backgroundColor: barColors,
                data:arr

            }]
        },
        options: {
            title: {
              display: true,
              text: "Total Nutritional chart"
            }
          }
    })
    // document.querySelector('#comment').textContent=status;
})
