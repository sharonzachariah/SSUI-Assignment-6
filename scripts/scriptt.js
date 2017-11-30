//rating
    document.getElementById("s-1").addEventListener("mouseover", function(){ magnify("1");});
    document.getElementById("s-2").addEventListener("mouseover", function(){ magnify("2");});
    document.getElementById("s-3").addEventListener("mouseover", function(){ magnify("3");});
    document.getElementById("s-4").addEventListener("mouseover", function(){ magnify("4");});
    document.getElementById("s-5").addEventListener("mouseover", function(){ magnify("5");});

    document.getElementById("s-1").addEventListener("mouseout", function(){ shrink("1");});
    document.getElementById("s-2").addEventListener("mouseout", function(){ shrink("2");});
    document.getElementById("s-3").addEventListener("mouseout", function(){ shrink("3");});
    document.getElementById("s-4").addEventListener("mouseout", function(){ shrink("4");});
    document.getElementById("s-5").addEventListener("mouseout", function(){ shrink("5");});

    document.getElementById("s-1").addEventListener("click", function(){ select("1");});
    document.getElementById("s-2").addEventListener("click", function(){ select("2");});
    document.getElementById("s-3").addEventListener("click", function(){ select("3");});
    document.getElementById("s-4").addEventListener("click", function(){ select("4");});
    document.getElementById("s-5").addEventListener("click", function(){ select("5");});
    


function magnify(i)
{
    for (var j = 1; j <= Number(i); j++) {
        var str="s-"+j;
        document.getElementById(str).style.width="5.5%";
        document.getElementById(str).style.height="5.5%";
    }
  
}

function shrink(i)
{
    for (var j = 1; j <= Number(i); j++) {
        var str="s-"+j;
        document.getElementById(str).style.width="5%";
        document.getElementById(str).style.height="5%";
    }

}

function select(i)
{
    for (var j = 1; j <= 5; j++) {
        var str="s-"+j;
        document.getElementById(str).src="img/bstar.png";
    }
    for (var j = 1; j <= Number(i); j++) {
        var str="s-"+j;
        document.getElementById(str).src="img/star.png";
        
    }
    //add rating to database/local storage here

}












// Outfit layering animation
let active = false;
// and define our dom elements to make it easier to read
let scrollerMiddle = document.querySelector('.scroller-middle');
let scrollerTop = document.querySelector('.scroller-top');


// First we'll have to set up our event listeners
// We want to watch for clicks on our scroller
scrollerMiddle.addEventListener('mousedown',function(){
  active = "middle";
  // Add our scrolling class so the scroller has full opacity while active
  scrollerMiddle.classList.add('scrolling');
});
// We also want to watch the body for changes to the state,
// like moving around and releasing the click
// so let's set up our event listeners
document.body.addEventListener('mouseup',function(){
  active = false;
  scrollerMiddle.classList.remove('scrolling');
});
document.body.addEventListener('mouseleave',function(){
  active = false;
  scrollerMiddle.classList.remove('scrolling');
});
// We'll have to do the same for our top scroller
scrollerTop.addEventListener('mousedown',function(){
    active = "top";
    scrollerTop.classList.add('scrolling');
});
document.body.addEventListener('mouseup',function(){
  active = false;
  scrollerTop.classList.remove('scrolling');
});
document.body.addEventListener('mouseleave',function(){
  active = false;
  scrollerTop.classList.remove('scrolling');
});

// Let's figure out where their mouse is at
document.body.addEventListener('mousemove',function(e){
  if (!active) return;
  // Their mouse is here...
  let x = e.pageX;
  // but we want it relative to our wrapper
  x -= document.querySelector('.wrapper').getBoundingClientRect().left;
  // Okay let's change our state
  scrollIt(x);
});

// Let's use this function
function scrollIt(x){
  // Calculate our transform
  let transform = Math.max(0,(Math.min(x,document.querySelector('.wrapper').offsetWidth)));
  // we show all our bottom image but how much of our middle and top,
  // that'll depend on what we're dragging
  // if we're dragging the middle slider
  if (active==="middle"){
    document.querySelector('.middle').style.width = transform+"px";
    scrollerMiddle.style.left = transform-25+"px";
    // if we're using scroller-middle, middle must always be to the right of top
    if (scrollerTop.getBoundingClientRect().left>scrollerMiddle.getBoundingClientRect().left-5){
      document.querySelector('.top').style.width = transform-5+"px";
      scrollerTop.style.left = transform-30+"px";
    }
  }
  // if we're dragging the top slider
  if (active==="top"){
    document.querySelector('.top').style.width = transform+"px";
    scrollerTop.style.left = transform-25+"px";
    // if we're using scroller-top, top must always be to the left
    if (scrollerTop.getBoundingClientRect().left>scrollerMiddle.getBoundingClientRect().left-5){
      document.querySelector('.middle').style.width = transform+5+"px";
      scrollerMiddle.style.left = transform-20+"px";
    }
  }
}

// Let's set our opening state based off the width, 
// we want to show a bit of both images so the user can see what's going on
active = "middle";
scrollIt(460);
active = "top";
scrollIt(230);
active = false;


// And finally let's repeat the process for touch events
// first our middle scroller...
scrollerMiddle.addEventListener('touchstart',function(){
    active = "middle";
    scrollerMiddle.classList.add('scrolling');
});
document.body.addEventListener('touchend',function(){
    active = false;
    scrollerMiddle.classList.remove('scrolling');
});
document.body.addEventListener('touchcancel',function(){
    active = false;
    scrollerMiddle.classList.remove('scrolling');
});

// then scroller top, our second scroller
scrollerTop.addEventListener('touchstart',function(){
    active = "top";
    scrollerTop.classList.add('scrolling');
});
document.body.addEventListener('touchend',function(){
    active = false;
    scrollerTop.classList.remove('scrolling');
});
document.body.addEventListener('touchcancel',function(){
    active = false;
    scrollerTop.classList.remove('scrolling');
});

document.querySelector('.wrapper').addEventListener('touchmove',function(e){
    if (!active) return;
    e.preventDefault();
    let x = e.touches[0].pageX;
    x -= document.querySelector('.wrapper').getBoundingClientRect().left;
    scrollIt(x);
});


var noll = Number(localStorage.getItem("nol"));

        if(noll == 4)
            {
                $(document).ready(function() {
     if($(window).width() > 600) {
         $("#ll1").attr("src", "img/la1.png");
         $("#ll2").attr("src", "img/la2.png");
         $("#ll3").attr("src", "img/la3.png");
     } 
     else {
         $("#ll1").attr("src", "img/lay1.png");
         $("#ll2").attr("src", "img/lay2.png");
         $("#ll3").attr("src", "img/lay3.png");
     }
}); 

            }
        else if(noll == 3)
            {
                $(document).ready(function() {
     if($(window).width() > 600) {
         $("#ll1").attr("src", "img/la1.png");
         $("#ll2").attr("src", "img/tsh1.png");
         $("#ll3").attr("src", "img/la3.png");
     } 
     else {
         $("#ll1").attr("src", "img/lay1.png");
         $("#ll2").attr("src", "img/tsh2.png");
         $("#ll3").attr("src", "img/lay3.png");
     }
}); 
    document.getElementById("layer2").innerHTML="<strong>T-shirt</strong> <p>Throw on your favorite t-shirt. You could find some cute ones at the stores below.</p><p class='redd'><i>Available at: Forever21, Macy's, American Eagle</i></p>"

            }
        else if(noll == 2)
            {
                $(document).ready(function() {
     if($(window).width() > 600) {
         $("#ll1").attr("src", "img/la1.png");
         $("#ll2").attr("src", "img/tsh1.png");
         $("#ll3").attr("src", "img/hood1.png");
     } 
     else {
         $("#ll1").attr("src", "img/lay1.png");
         $("#ll2").attr("src", "img/tsh2.png");
         $("#ll3").attr("src", "img/hood2.png");
     }
}); 
    document.getElementById("layer3").innerHTML="<strong>Your trusted Hoodie</strong> <p>These got their name from the hood that keeps your head warm. Get one with good pockets so that you can keep your hands warm while you walk outside.</p><p class='redd'><i>Available at: Debanhams, Target, Amazon</i></p>"
    document.getElementById("layer2").innerHTML="<strong>T-shirt</strong> <p>Throw on your favorite t-shirt. You could find some cute ones at the stores below.</p><p class='redd'><i>Available at: Forever21, Macy's, American Eagle</i></p>"

            }
        else if(noll == 1)
            {
                $(document).ready(function() {
     if($(window).width() > 600) {
         $("#ll1").attr("src", "");
         $("#ll2").attr("src", "img/ts1.png");
         $("#ll3").attr("src", "img/hood1.png");
     } 
     else {
         $("#ll1").attr("src", "");
         $("#ll2").attr("src", "img/ts2.png");
         $("#ll3").attr("src", "img/hood2.png");
     }
}); 
    document.getElementById("layer3").innerHTML="<strong>Your trusted Hoodie</strong> <p>These got their name from the hood that keeps your head warm. Get one with good pockets so that you can keep your hands warm while you walk outside.</p><p class='redd'><i>Available at: Debanhams, Target, Amazon</i></p>"
    document.getElementById("layer2").innerHTML="<strong>T-shirt</strong> <p>Throw on your favorite t-shirt. You could find some cute ones at the stores below.</p><p class='redd'><i>Available at: Forever21, Macy's, American Eagle</i></p>"
    document.getElementById("layer1").style.visibility="hidden";
    

            }
        else if(noll == 0)
            {
         document.getElementById("arr").style.visibility="hidden";
         document.getElementById("sizing").style.visibility="hidden";
         document.getElementById("layz").style.visibility="hidden";
         document.getElementById("ra").style.visibility="hidden";

         document.getElementById("cya").innerHTML="<br><br><i>See you when it's cold again! :)</i>";
         
            }









