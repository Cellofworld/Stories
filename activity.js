import {currAlias,theme,body} from './stories.js'

export default class createActivitySlide {
    constructor (title,subtitle,data) {
       this.title = title;
       this.subtitle = subtitle;
       this.data = data
    }

    usersFor() {

const titleList = 

`
<div class="contentTitle">
<div class="title">${this.title}</div>
<div class="subtitle">${this.subtitle}</div>
</div>

`;

const footerList = 

`
<div class="footer">
<div class="footerBlock_${theme}">2 часа</div>
<div class="footerBlock_${theme}">0</div>
<div class="footerBlock_${theme}">1-2</div>
<div class="footerBlock_${theme}">3-4</div>
<div class="footerBlock_${theme}">5-6</div>
</div>
`



const mon = this.data.mon
const tue = this.data.tue
const wed = this.data.wed
const thu = this.data.thu
const fri = this.data.fri
const sat = this.data.sat
const sun = this.data.sun





const themePic = theme.split('_').pop();

const srcPic = {
    "0": `min-${themePic}.png`,
    "1": `mid-${themePic}.png`,
    "2": `mid-${themePic}.png`,
    "3": `mid-${themePic}.png`,
    "4": `max-${themePic}.png`,
    "5": `extra-${themePic}.png`,
    "6": `extra-${themePic}.png`
}



function sliceData(params) {
    const result =[];
    for (let i = 1; i < params.length; i+=2) {
        result.push(params[i]+params[i-1])
         
     }
return result
}



let contentMon = ``

sliceData(mon).forEach(el => {
    contentMon += `
  
    <img src="img/${srcPic[el]}" class="imgAct ${currAlias}">
   
    `
});

let contentTue = ``

sliceData(tue).forEach(el => {
    contentTue += `
  
    <img src="img/${srcPic[el]}" class="imgAct ${currAlias}">
   
    `
});
let contentWed =``
sliceData(wed).forEach(el => {
    contentWed += `
  
    <img src="img/${srcPic[el]}" class="imgAct ${currAlias}">
   
    `
});

let contentThu =``
sliceData(thu).forEach(el => {
    contentThu += `
  
    <img src="img/${srcPic[el]}" class="imgAct ${currAlias}">
   
    `
});

let contentFri =``
sliceData(fri).forEach(el => {
    contentFri += `
  
    <img src="img/${srcPic[el]}" class="imgAct ${currAlias}">
   
    `
});

let contentSat =``
sliceData(sat).forEach(el => {
    contentSat += `
  
    <img src="img/${srcPic[el]}" class="imgAct ${currAlias}">
   
    `
});

let contentSun =``
sliceData(sun).forEach(el => {
    contentSun += `
  
    <img src="img/${srcPic[el]}" class="imgAct ${currAlias}">
   
    `
});





body.innerHTML = titleList + `<div class="mainContentAct">${`<div class="mon">${contentMon}</div>` + `<div class="tue">${contentTue}</div>` + `<div class="wed">${contentWed}</div>` + `<div class="thu">${contentThu}</div>` + `<div class="fri">${contentFri}</div>` + `<div class="sat">${contentSat}</div>` + `<div class="sun">${contentSun}</div>` }   </div>` + footerList
    }
}