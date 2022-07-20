import {currAlias,theme,body} from './stories.js'

export default class CreateDiagramSlide  {
    constructor (title,subtitle,totalText,differenceText,categories) {
       this.title = title;
       this.subtitle = subtitle;
       this.totalText = totalText;
       this.differenceText = differenceText;
       this.categories = categories;
    }

    usersFor() {
        let titleList = ``;
        titleList = `
             <div class="contentTitle"> 
              <div class = "title ${currAlias} ${theme}">${this.title}</div>
              <div class = "subtitle ${currAlias} ${theme}">${this.subtitle}</div>
              </div>
             `
             
      

        let mainList = ``;

        this.categories.forEach(el => {
            mainList += `
            <div class = "mainContainer">

            <div class="rollCat_${theme}"></div>
            <div class="titleCat_${theme}">${el.title}</div>
            <div class="valueTextCat">${el.differenceText}</div>
            <div class="differenceTextCat">${el.valueText}</div>

            </div>
            `
        });

        body.innerHTML += titleList + `<div class="diagramContent"><div class="mainContent_diagram">${mainList}</div></div>` 

     
console.log(this.totalText)


let colorDiagram 
if (theme === "theme_light") {
    colorDiagram = ["#FFB800", "#FFEF99", "#CBCBCB", "#E4E4E4"];
} else {colorDiagram = ["#FFA300", "#633F00", "#292929", "#3E3E3E"]}

let colorText
let secondColorText = "#918F8A"
if (theme === "theme_dark") {
  colorText ="#FCFBF7"

} else {colorText ="#261C00" 
}

console.log(colorDiagram)
console.log(theme)
      
const 
width = 270,
height = 270,
margin = 20;


const radius = Math.min(width, height) / 2 - margin


const svg = d3.select(".diagramContent")
.append("svg")
.attr("width", width)
.attr("height", height)
.append("g")
.attr("transform", `translate(${width / 2},${height / 2})`);




const data = {a: 8, b: 6, c:16, d:12}


const color = d3.scaleOrdinal()
.range(colorDiagram)


const pie = d3.pie()
.value(d=>d[1])

const data_ready = pie(Object.entries(data))


svg
.selectAll('whatever')
.data(data_ready)
.join('path')
.attr('d', d3.arc()
.innerRadius(75)        
.outerRadius(radius)
)
.attr('fill', d => color(d.data[0]))
.attr("stroke", "black")
.style("stroke-width", "2px")
.style("opacity", 0.7)


let val = this.differenceText
let cal =val.slice(0,14)
let sal = [val.slice(15,22)]




let textData = [this.totalText,cal]


let barWidth = -20
let barHeight = -40



let myText = svg.selectAll(".mytext")
                .data(textData)
                .enter()
                .append(`text`)
                .text(d => d)
                .style("fill", `${colorText}`)
                .attr("x",(d, i) => barHeight - i*15)
                .attr('y',(d, i) => barWidth + i*20)




let myTexts = svg.selectAll(".mytext")
                .data(sal)
                .enter()
                .append("text")
                .text(d => d)
                .style("fill", `${secondColorText}`)
                .attr("x",-25)
                .attr('y',20)



              
    }

}
