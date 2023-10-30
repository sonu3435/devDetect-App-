const get = (param) => document.querySelector(param);
const see = (s) => console.log(s);
const bg = get(".wrapper")
const para = get(".noResult");
const userInfo = get(".userInfo")
const darkMode = get(".darkMode")
const darkModeField = get(".darkMode")
const searchBg = get(".input-container")
const userImage = get(".userImage")
const lightMode = get(".lightMode")
const lightModeField = get(".lightMode")
const input = get("[inputField]")
const repoCards = get(".repo-card")
const button = get(".btn")
const Username = get(".name")
const joinDate = get(".joinDate")
const email = get(".email")
const bio = get(".bio")
const Repo = get(".repository")
const followers = get(".followers")
const following = get(".followings")
const Location = get(".loc p")
const link = get(".link a")
const heading = get("h1")
const twitter = get(".twitter a")
const company = get(".company a")
const darkColor = "#141D2F"
const lightColor = "#F6F8FF"
const API = "https://api.github.com/users/";


const months = ['Jan','Feb','March','Apr','May','June','July','August','Sep','Oct','Nov','Dec']

let currenMode = lightMode;
darkModeField.classList.add("active")

lightMode.addEventListener("click",()=>{
    if(currenMode != lightColor){
        currenMode = lightColor;
        bg.style.backgroundColor = currenMode;
        darkModeField.classList.add("active")
        lightModeField.classList.remove("active")
        heading.classList.remove("active")
        input.classList.remove("active")
        userInfo.classList.remove("active")
        repoCards.classList.remove("active")
        searchBg.classList.remove("active")
        para.style.color = 'black'
        lightmode()
    }
})

darkMode.addEventListener("click",()=>{
    
    see(input.value)
    if(currenMode != darkColor){
        currenMode = darkColor;
        bg.style.backgroundColor = currenMode;
        lightModeField.classList.add("active")
        darkModeField.classList.remove("active")
        heading.classList.add("active")
        input.classList.add("active")
        userInfo.classList.add("active")
        repoCards.classList.add("active")
        searchBg.classList.add("active")
        para.style.color = 'white'
        darkmode()
    }
})

button.addEventListener("click", (event) => {
    event.preventDefault()
    console.log(input.value)
    if(input.value === "" || input.value === null){
        return;
    }
    else{
        let user = input.value;
        input.value = ""
        let data = callAPI(user)
    }
})

callAPI("sonu3435")
async function callAPI (user){
   try{
    let response = await fetch(API + user);
    let data = await response.json();
    await rederData(data)
    para.classList.remove("active")

   }
   catch(e){
    see("wrong user")
    userInfo.style.display = 'none';
    noResult();
   }
}

// rendring data
function rederData(data){
    userInfo.style.display = 'flex';
    Username.innerText = data.name? data.name:data.login;
    userImage.src = data?.avatar_url
    let datesegments = data.created_at.split("T").shift().split("-");
    console.log(datesegments)
    joinDate.innerText = `Joined ${datesegments[2]} ${months[datesegments[1] - 1]} ${datesegments[0]}`;
    email.innerText = data.email?`@${data.email}`: "";
    email.href = data?.email?data.email:"#"
    bio.innerText = data.bio?data.bio:'This Profile has no Bio';
    Repo.innerText = data.public_repos
    followers.innerText = data.followers;
    following.innerText = data.following;
    Location.innerText = data.location?data.location:"Not Available";
    link.innerText = data.link ? data?.link : 'Not Available';
    link.href = data.link? data.link:"#";
    twitter.innerText = data.twitter_username? data.twitter_username:"Not Avaialable";
    twitter.href = data.twitter_username?data.twitter_username:'#';
    company.innerText = data.company?data.company:"Not Available";
    }

function darkmode(){
    Username.style.color = "white"
    joinDate.style.color = 'white'
    Location.style.color = 'white'
    link.style.color = 'white'
    twitter.style.color = 'white'
    company.style.color = 'white'
    bio.style.color = 'white'
}
function lightmode(){
    Username.style.color = "black"
    joinDate.style.color = 'black'
    Location.style.color = 'black'
    link.style.color = 'black'
    twitter.style.color = 'black'
    company.style.color = 'black'
    bio.style.color = 'black'
};

function noResult(){
    para.classList.add('active');
}












