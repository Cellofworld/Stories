
import {currAlias,theme,body} from './stories.js'
import CreateLeaderSlide from './leader.js'

   export default class CreateVoteSlide extends CreateLeaderSlide {
        constructor(title,subtitle,emoji,users) {
            super(title,subtitle,emoji,users)
        }
        usersFor() {

        let usersVote = this.users;
        let sliceVoteFirst = this.users.slice(0,6);
        let sliceVoteSecond = this.users.slice(6,12)
console.log(sliceVoteSecond)
       
          let titleList = ``;
          titleList = `
               <div class="contentTitle"> 
                <div class = "title ${currAlias} ${theme}">${this.title}</div>
                <div class = "subtitle ${currAlias} ${theme}">${this.subtitle}</div>
                </div>
               `

            let content = ``
            let emoji = `<div class = "emoji ${currAlias} ${theme}">${this.emoji}</div>`
            usersVote.forEach(el => {
                 content += `
                 <div class="mainContentVote ${theme}">
                 <img src="img/${el.avatar}" alt="${el.name}" class="imgUserVote">
                 <div class="userNameVote_${theme}">${el.name}</div>
                 <div class="userValueTextVote">${el.valueText} </div>
                 </div>
                 `
             });
            let button = `
        <div class="buttonUp button_${theme} buttonHover"></div>
        <div class="buttonDown button_${theme} buttonNonHover"></div>
        `
        body.innerHTML += titleList + `<div class="contentContainerVote">${content + button}</div>`
      
        const evtClickUp = document.querySelector(".buttonUp");
        const evtClickDown = document.querySelector(".buttonDown");
        const evtClickVote = document.querySelectorAll(".mainContentVote")
       console.log(evtClickVote)

       for (let i = 6; i < evtClickVote.length; i++) {
        evtClickVote[i].classList.add("displayHidden")
        console.log(evtClickVote[i])
    }
     
       for (let i = 0; i < evtClickVote.length; i++) {
        evtClickVote[i].addEventListener("click", function() {


            for (let j =0; j < evtClickVote.length;j++) {
                evtClickVote[j].classList.remove("clickVoteButoon")
            }
            
            evtClickVote[i].classList.add("clickVoteButoon")

           
           
        })
    }
   

     evtClickUp.addEventListener("click", function() {
     console.log("evt click Up")
     evtClickUp.classList.add(`buttonHoverClick_${theme}`)
        evtClickDown.classList.remove(`buttonHoverClick_${theme}`)
        for (let i = 6; i < evtClickVote.length; i++) {
            evtClickVote[i].classList.add("displayHidden")
            console.log(evtClickVote[i])
        }
        for (let i = 0; i < evtClickVote.length - 6; i++) {
            evtClickVote[i].classList.remove("displayHidden")
            console.log(evtClickVote[i])
        }
       
       console.log(evtClickVote)
       
     })
     evtClickDown.addEventListener("click", function() {
        console.log("evt click Down")
        evtClickDown.classList.add(`buttonHoverClick_${theme}`)
        evtClickUp.classList.remove(`buttonHoverClick_${theme}`)
        for (let i = 0; i < evtClickVote.length - 6; i++) {
            evtClickVote[i].classList.add("displayHidden")
            console.log(evtClickVote[i])
        }
        for (let i = 6; i < evtClickVote.length; i++) {
            evtClickVote[i].classList.remove("displayHidden")
            console.log(evtClickVote[i])
        }
        })
      

        }
       
    }