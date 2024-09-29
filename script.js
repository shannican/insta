var users = [
  {
    username: "Babita kumari",
    story:
      "https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    dp: "https://images.unsplash.com/photo-1549570652-97324981a6fd?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    username: "Lovely Kumari",
    story:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    dp: "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    username: "Sweeti kumari",
    story:
      "https://images.unsplash.com/photo-1562572159-4efc207f5aff?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    dp: "https://images.unsplash.com/photo-1553782376-b2e8256ab838?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    username: "Babita kumari",
    story:
      "https://images.unsplash.com/photo-1541216970279-affbfdd55aa8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    dp: "https://images.unsplash.com/photo-1549570652-97324981a6fd?q=80&w=1885&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    username: "Lovely Kumari",
    story:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    dp: "https://images.unsplash.com/photo-1574015974293-817f0ebebb74?q=80&w=1946&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    username: "Sweeti kumari",
    story:
      "https://images.unsplash.com/photo-1562572159-4efc207f5aff?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    dp: "https://images.unsplash.com/photo-1553782376-b2e8256ab838?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

var clutter = "";

users.forEach(function (elem, idx) {
  clutter += `<div class="story">
            <img id=${idx} src="${elem.dp}" alt="">
          </div>`;
});

var storiyan = document.querySelector("#storiyan");
var full = document.querySelector("#full");
var growth = document.querySelector("#growth")
var dp = document.querySelector(".dp")
var username = document.querySelector("#full h4")
var close = document.querySelector(".close")

storiyan.innerHTML = clutter;

var time = 0

storiyan.addEventListener("click", function (dets) {
  var targetObject = users[dets.target.id] 
  
  full.style.display = "block"
  full.style.backgroundImage = `url(${targetObject.story})`
  dp.style.backgroundImage = `url(${targetObject.dp})`
  username.innerHTML = targetObject.username


  var storyInterval = setInterval(function(){
    time++
    growth.style.width = time+"%"
    console.log("Hello",time)
  },30)

  setTimeout(function(){
    clearInterval(storyInterval)
    time = 0
    full.style.display = "none"
  },3000)

  close.addEventListener("click",function(){
    clearInterval(storyInterval)
    time = 0
    full.style.display = "none"
  })


});
