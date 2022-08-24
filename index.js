const posts = [
    {
        name: "Vincent van Gogh",
        username: "vincey1853",
        location: "Zundert, Netherlands",
        avatar: "images/avatar-vangogh.jpg",
        post: "images/post-vangogh.jpg",
        comment: "just took a few mushrooms lol",
        likes: 21
    },
    {
        name: "Gustave Courbet",
        username: "gus1819",
        location: "Ornans, France",
        avatar: "images/avatar-courbet.jpg",
        post: "images/post-courbet.jpg",
        comment: "i'm feelin a bit stressed tbh",
        likes: 4
    },
        {
        name: "Joseph Ducreux",
        username: "jd1735",
        location: "Paris, France",
        avatar: "images/avatar-ducreux.jpg",
        post: "images/post-ducreux.jpg",
        comment: "gm friends! which coin are YOU stacking up today?? post below and WAGMI!",
        likes: 152
    }
]

const contentEl = document.getElementById("content")

for(let i=0 ;i<posts.length;i++)
{
    contentEl.innerHTML+=`
    <div class=post>
            <div class="user-details">
            <img src=${posts[i].avatar}>
                <div class="name-location">
                <h4>${posts[i].name}</h4>
                <p>${posts[i].location}</p>
            </div>       
            </div>
            <img class="post-img" src=${posts[i].post}>
            <div class="icons">
                <img class="heart" src="images/icon-heart.png">
                <img src="images/icon-comment.png">
                <img src= "images/icon-dm.png">
            </div>
            <div class="username-coment">
                <h5 class="likes" >${posts[i].likes} likes</h5>
                <p><h5>${posts[i].username}</h5> ${posts[i].comment}</p>
            </div>
    </div>
    `
}
const likesEl =document.getElementsByClassName("likes")
const hearts=document.getElementsByClassName("heart")
//likesEl[0].textContent=` `

for(let j=0;j<hearts.length;j++ ) 
{    
    let heart = hearts[j]
    
    heart.addEventListener("click",function(){
        if ( heart.src.match("images/icon-heart.png")) {
            heart.src="images/icon-heart-red.png"
            posts[j].likes+=1
            likesEl[j].textContent =`${ posts[j].likes} likes `
          }
        else{
            heart.src="images/icon-heart.png"
            posts[j].likes-=1
            likesEl[j].textContent =`${ posts[j].likes} likes `
        }
    })
}

