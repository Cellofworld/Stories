export const body = document.querySelector("body");

import dataJson from './data.json'

const defPage = window.location.search
const params = (window.location.search || '')
.replace('?','')
.split('&')
.reduce((acc,curr) => {
    const [param,value] = curr.split('=')
    acc[param] = value;
    return acc;
},{})

const slideKey = 'slide';
const themeKey = 'theme'
const currentSlide = params[slideKey];
const currentTheme = params[themeKey];
const slde = dataJson[currentSlide-1]


export const currAlias = slde.alias;

const currTitle = slde.data.title;
const currSubtitle = slde.data.subtitle;
const currEmoji = slde.data.emoji;
const reccUser = slde.data.users;
const reccValues = slde.data.values;
const recTotalText = slde.data.totalText;
const recDifferenceText = slde.data.differenceText;
const recCategories = slde.data.categories;
const recData = slde.data.data;



export const dataLeader = slde.data;
export let theme = 'theme_' + currentTheme;
if (theme === 'theme_undefined') {
        theme = 'theme_dark'
}



body.className = theme;

import CreateLeaderSlide from './leader.js'

import CreateVoteSlide from './vote.js'

import CreateChartSlide from './chart.js'

import CreateDiagramSlide from './diagram.js'

import createActivitySlide from './activity.js'


    const recLeader = new CreateLeaderSlide(currTitle,currSubtitle,currEmoji,reccUser,dataLeader);
    const recVote = new CreateVoteSlide(currTitle,currSubtitle,currEmoji,reccUser);
    const recChart = new CreateChartSlide(currTitle,currSubtitle,reccUser,reccValues);
    const recDiagram = new CreateDiagramSlide(currTitle,currSubtitle,recTotalText,recDifferenceText,recCategories);
    const recActivity = new createActivitySlide(currTitle,currSubtitle,recData)


   if (currAlias === 'leaders') {
    
    recLeader.usersFor();
   } else if (currAlias === 'vote') {
   
    recVote.usersFor();
   } else if (currAlias === 'chart') {
  
    recChart.usersFor();
   } else if (currAlias === 'diagram') {

    recDiagram.usersFor();
   } else if (currAlias === 'activity') {

       recActivity.usersFor()
   }


console.log(defPage)

