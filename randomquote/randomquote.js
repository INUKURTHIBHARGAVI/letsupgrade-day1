var arr=["Dream Bigger","Everybody is a genious","A life spent making mistakes is not only honourable,but more useful than a life spent doing nothing",
"The harder you work for something,the greater you achieve","Success doesn't just find you thats it ,try again","great things never comes from comfort zones,you should dream it",
"push yourself because no one is going to do it for you ","Be postive"]
function quote()
{
    var a=arr[Math.floor(Math.random()*arr.length)];
    document.getElementById('content').innerText=a;
   

}