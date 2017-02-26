var agumonLeft = 10;
var biyomonLeft = 10;
var gabumonLeft = 10;
var gaumonLeft = 10;

$("#agumon").on("click", function(){
  agumonLeft = agumonLeft+20;
  $("#agumon").css("left", agumonLeft + "px");
})

$("#biyomon").on("click", function(){
  biyomonLeft = biyomonLeft+20;
  $("#biyomon").css("left", biyomonLeft + "px");
})

$("#gabumon").on("click", function(){
  gabumonLeft = gabumonLeft+20;
  $("#gabumon").css("left", gabumonLeft + "px");
})

$("#gaumon").on("click", function(){
  gaumonLeft = gaumonLeft+20;
  $("#gaumon").css("left", gaumonLeft + "px");
})



var position = {
  x:0,
  y:0
}

var digimon = [];

var redraw = function(){
  console.log("redraw")
  for (var i = 0, l = digimon.length; i < l ; i++){
    var digi = digimon[i]
    $("#" + digi.id).css({
      left: digi.x+"px",
      "top": digi.y+"px"
    })
  }
}

$("#up").on("click", function(){
  console.log("up")
  var y = position.y
  if(y > 0){
    position.y = y-100
    redraw()
  }
});

$("#down").on("click", function(){
  console.log("down")
  var y = position.y
  if(y < 400){
    position.y = y+109
    redraw()
  }
});

$("#left").on("click", function(){
  console.log("left")
  var x = position.x
  if(x > 0){
    position.x = x-100
    redraw()
  }
})

$("#right").on("click", function(){
  console.log("right")
  var x = position.x
  if(x < 900){
    position.x = x+100
    redraw()
  }
});

var init = function(){
  var $monsters = $('.monster')

  // for each monster
    // make an object representing that monster
    $monsters.each(function(index){


      var d = {
        id: $(this).attr("id"),
        x:index*260,
        y:0
      }
      digimon.push(d);


    })

    console.log(digimon)
    redraw()
    /*
     {
      name:'name',
      id:'#id',
      x:
      y:
   }*/

   // push each one into the digimon array
}

init()












// var numsArray = [];
// var total = 0;
//
// function beautiful(multiple1,multiple2,upwardBound){
//   	for(var n=0;n<=upwardBound;n++){
// 		if (n % multiple1 === 0 || n % multiple2 === 0){
// 			numsArray.push(n);
//   	}
// 	}
//   sum(numsArray);
// }
//
// 	function sum(multiArr){
// 		multiArr.forEach(function(a){
//       total += a;
//     });
//    console.log(total);
//   }
//
// beautiful(3,5,1000);
