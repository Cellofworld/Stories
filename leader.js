
import {currAlias,theme,body} from './stories.js'


    
  export default  class CreateLeaderSlide {
        constructor (title,subtitle,emoji,users,data) {
           
            this.title = title;
            this.subtitle = subtitle;
            this.emoji = emoji;
            this.users = users;
            this.data = data;
        }
        usersFor() {
          const sliceLeader = this.users.slice(0,5);
          let createList = `` ;

          const selectedUser = this.data.selectedUserId;          
          const selUser = this.users.find(slide => slide.id === selectedUser)

          let titleList = ``;
          titleList = `
          <div class="contentTitle"> 
           <div class = "title ${theme}">${this.title}</div>
           <div class = "subtitle ${theme}">${this.subtitle}</div>
           </div>
          `
            let place = 0;

        
            sliceLeader.forEach(el => {

               place+= 1;

              if (el === selUser) {
                createList += `
                <div class="mainContent ${currAlias} ${theme}">
                <div class = "emoji ${currAlias} ${theme}">${this.emoji}</div>
                <img src="./img/${el.avatar}" alt="${el.name}" class="imgUser ${currAlias} ${theme}">
                <div class="userName_${theme}">${el.name}</div>
                <div class="userValueText ${currAlias} ${theme}">${el.valueText} </div>
                <div class="containerUser ${currAlias} ${theme}">
                <div class="number_${theme}">${place}</div>
                </div>
                </div>
                `
              } else {
    
               createList += `
                <div class="mainContent ${currAlias} ${theme}">
                <img src="./img/${el.avatar}" alt="${el.name}" class="imgUser ${currAlias} ${theme}">
                <div class="userName_${theme}">${el.name}</div>
                <div class="userValueText ${currAlias} ${theme}">${el.valueText} </div>
                <div class="containerUser ${currAlias} ${theme}">
                <div class="number_${theme}">${place}</div>
                </div>
                </div>
                `
              }
 
            });
            body.innerHTML += titleList + `<div class="contentContainer">${createList}</div>`


        console.log(currAlias)
           
             
               
       
        }
    }



