import {currAlias,theme,body} from './stories.js'
import CreateVoteSlide from './vote.js'
  
  export default class CreateChartSlide extends CreateVoteSlide  {
        constructor (title,subtitle,users,values) {
            super(title,subtitle,'',users)
           
            this.values = values;
        }
        usersFor() {

           const userSLice = this.users.slice(0,2);
           const dataSlice = this.values.slice(0,11);
        
           const userSelect = this.values.find(userAct => userAct.active === true );
         
           console.log(userSelect)
     

          
          let titleList = ``;
          titleList = `
               <div class="contentTitle"> 
                <div class = "title ${currAlias} ${theme}">${this.title}</div>
                <div class = "subtitle ${currAlias} ${theme}">${this.subtitle}</div>
                </div>
               `
        
            let content = ``
        
            let statusBar = ``;
            dataSlice.forEach(el => {
                statusBar += 
                `<div class = "statusBar">${el.value} </div>`
            })
            userSLice.forEach(el => {
                
               content +=
                `
                <div class="contentContainerUser${currAlias} ${theme}">
               
                <img src="img/${el.avatar}" alt="${el.name}" class="imgUser ${currAlias} ${theme}">
                <div class="containerUserInfo">
                <div class="userName${currAlias}_${theme}">${el.name}</div>
                
                <div class="cardUserValueText${currAlias}_${theme}">${el.valueText} </div>
                
                </div>
                <div class="Slash ${currAlias} ${theme}"></div>
                </div>
                `;
                   
                });

let testBar = ``

                dataSlice.forEach(el => {

                    if (el === userSelect) {
                        testBar += `
                   <div class="bars">
                   <div class="stats">${el.value}</div>
                   <div class="pram_${theme} userSelect" style="width:40px; height:${el.value}px"></div>
                   
                   <div class="titleChartBar">${el.title}</div>
                   </div>
                   ` 
                    } else {
                        testBar += `
                        <div class="bars">
                        <div class="stats">${el.value}</div>
                        <div class="pram_${theme}" style="width:40px; height:${el.value}px"></div>
                        <div class="titleChartBar">${el.title}</div>
                        </div>
                        ` 
                    }
                   
                });

                body.innerHTML += titleList + `<div class="mainBar">${testBar}</div>` + `<div class="containerUser_${currAlias} ${theme}">${content}</div>` 


 
        }
    }