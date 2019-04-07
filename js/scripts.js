$("#start").click(function(){
    if($("name1")=="" || $("name2").val()==""){
        alert("you need to fill n your name to continue");
        location.reload();

    }
    else{
        $(".pdice").hide();
        $(".game").show();
        nameInput1=$("input#name1").val();
        nameInput2=$("input#name2").val();

        $("#ply1").text(nameInput1);
        $("#ply2").text(nameInput2);
    }
})

var Sum1=0;
var Sum1=[];
var Score1=0;
var Sum2=0;
var Sum2=[];
var Score2=0;

function roll1(){
    var roll=parseInt(math.floor((math.random()*6+1)));
    document.getElementById("plyr1").innerHTML=roll1;
    if(roll1==1){
        document.getElementById("img").src="images/img1.png";
    }
    else if(roll1==2){
        document.getElementById("img").src="images/img2.png";
    }
    else if(roll1==3){
        document.getElementById("img").src="images/img3.png";
    }
    else if (roll1==4){
        document.getElementById("img").src="images/img4.png";
    }
    else if (roll1==5){
        document.getElementById("img").src="images/img5.jpeg";
    }
    else{
        document.getElementById("img").src="images/img6.jpeg";
    }
if(roll1!=1){
    Score1+=roll1;
    document.getElementById("Score1").innerHTML=Score1;
}
else{
    Score1=0;
    Sum1=[];
    $(".bt1").hide();
    $(".bt2").show();
}

};

$(document).ready(function(){
    $("hold1").click(function(){
        Sum1.push(Score1);
        //aler(Sum1);
        //document.getElementById("Sum1").innerHTML=Sum1;

        $(".bt1").hide();
        $(".bt2").show();
        Sum1.forEach(function(sum){
            Sum1+=(sum);
        });
        //alert(Sum1);
        document.getElementById("Sum1").innerHTML=Sum1;
        Score1=0;
        Sum1[];
        if (Sum1>=100){
            alert("player1:you've won the game");

            $(.WINNER).hide();

            $(.congrats).show();
            $("#winn").text(nameInput1);
            //document.getElementById("winn").innerHTML=nameInput1;
        }
        // $("#restart").click(function(){
        //   var Sum1=0;
        //   var sum1=[];
        //   var Score1=0;
        //   var Sum2=0;
        //   var Sum2=[];
        //   var Score2=0;
        //
        //
        // })
    });
});


function reload(){
  // return Sum1=0;
  // return Sum1=0;
  // return Score1=0;
  // return Sum2=0;
  // return Sum2=0;
  // return Score2=0;

  location.reload();
}

function roll2() {
    var roll=document.getElementById('plyr2').innerHTML=parseInt(Math.floor((Math.random()*6+1)));
    if(roll2==1){
        document.getElementById("img").src="images/img1.png";
    }
    else if(roll2==2){
        document.getElementById("img").src="img/img2.png";
    }
    else if(roll2==3){
        document.getElementById("img").src="img/img3.png";
    }
    else if(roll2==4){
        document.getElementById("img").src="img/img4.png";
    }
    else if(roll2==5){
        document.getElementById("img").src="img/img5.jpeg";
    }
    else{
        document.getElementById("img").src="img/face 6.jpeg";
    }
    if(roll2!=1){
        Score2+=roll2;
        // alert("the current score is" + Score2);
          document.getElementById('Score2').innerHTML=Score2;

    }
    else{
     Score2=0;
        Sum2=[];
        $(".bt2").hide();
         $(".bt1").show();

    }

};
$(document).ready(function(){
    $("#hold2").click(function(){
        Sum2.push(Score2);
        // alert(Sum2);
          // document.getElementById('Sum2').innerHTML=Sum2;
        $(".bt2").hide();
         $(".bt1").show();

         Sum2.forEach(function(Sums) {
           return Sum2 += Sums;
         });

         // alert(Sum2);
           document.getElementById('Sum2').innerHTML=Sum2;
         Score2=0;
          Sum2=[];
         if (totalSum2>=100) {
           alert("player2 :-you've won the game");
              // document.getElementById('winn').append(nameInput2);

              //  alert("hi")
           $(".winner").hide();
          $("#wins").text(nameInput2);
           $(".congrats").show();
            // document.getElementById('wins').innerHTML=nameInput2;
         }
    });

});
