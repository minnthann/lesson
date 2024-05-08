alert ("Choose a direction");

var chooseNow = function () {
    var askMe =prompt ("Will you go left or right?");

// debugger;

switch (askMe){
    case "left":
    alert ("You have chosen left!");
    break;
    case "right":
    alert ("You have chose right!");
    break;
    default:
    alert("You stay in place")
    chooseNow("You stay in place!:");
}
};
chooseNow();


alert("Chose a direction");

var chooseNow = function(){
    var askMe = prompt ("Will you goleft or right?");
    // debugger

if (askMe == "left"){
    alert("You have chosen left");
}else if (askMe == "right"){
    alert ("You have chosen right!");
}else{
    alert("You stay in place!")
}
};
chooseNow();