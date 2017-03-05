var content = null;
var isPlaying = true;
if (localStorage.clickcount) {
    localStorage.clickcount = Number(localStorage.clickcount);
} else localStorage.clickcount = 0;

window.onload = function () {
   
var nextOne = window.setInterval(function(){playSlides()},6000);  

document.getElementById("playbutton").onclick = function(){pause()};
document.getElementById("previous").onclick = function(){previous()};
document.getElementById("next").onclick = function(){next()};

$.getJSON("https://app-name-98424.firebaseio.com/.json", function (data) {
    content = data;
    $("#newsHeadline").html(content.news[localStorage.clickcount].headline);
    $("#newsContent").html(content.news[localStorage.clickcount].article);
    $("#newsDate").html(content.news[localStorage.clickcount].date); 
    document.getElementById("newsArticle").style.backgroundImage = (content.news[localStorage.clickcount].image);
});


function playSlides() { 
    console.log(localStorage.clickcount);
    if (localStorage.clickcount < 2) localStorage.clickcount = Number(localStorage.clickcount) + 1;
    else localStorage.clickcount = 0;
    $("#newsHeadline").html(content.news[localStorage.clickcount].headline);
    $("#newsContent").html(content.news[localStorage.clickcount].article);
    $("#newsDate").html(content.news[localStorage.clickcount].date);
    
    document.getElementById("newsArticle").style.backgroundImage = (content.news[localStorage.clickcount].image);
}
    
function pause() {
    if (isPlaying) {
        clearInterval(nextOne);
        isPlaying = false;
        document.getElementById("pause").innerHTML = "PLAY";
    }
    else {
        isPlaying = true;
        nextOne = window.setInterval(function(){playSlides()},3000);
        document.getElementById("pause").innerHTML = "PAUSE";
    }
}
    
    
function next() {
    if (localStorage.clickcount < 2) localStorage.clickcount = Number(localStorage.clickcount) + 1;
    else localStorage.clickcount = 0;
    $("#newsHeadline").html(content.news[localStorage.clickcount].headline);
    $("#newsContent").html(content.news[localStorage.clickcount].article);
    $("#newsDate").html(content.news[localStorage.clickcount].date);
    document.getElementById("newsArticle").style.backgroundImage = (content.news[localStorage.clickcount].image);
}
    
function previous() {
    if (localStorage.clickcount > 0) localStorage.clickcount = Number(localStorage.clickcount) - 1;
    else localStorage.clickcount = 2;
    $("#newsHeadline").html(content.news[localStorage.clickcount].headline);
    $("#newsContent").html(content.news[localStorage.clickcount].article);
    $("#newsDate").html(content.news[localStorage.clickcount].date);
    document.getElementById("newsArticle").style.backgroundImage = (content.news[localStorage.clickcount].image);
}
    
    
 
    
    
    
}