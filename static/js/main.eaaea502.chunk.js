(this["webpackJsonpclearing-landmines"]=this["webpackJsonpclearing-landmines"]||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);for(var n=a(0),o=a.n(n),r=a(7),s=a.n(r),l=a(1),u=a(2),i=a(4),g=a(3),c=a(5),X={height:30,width:30,fontSize:20,verticalAlign:"top"},h=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(g.a)(t).call(this,e))).setId=function(e){return[Math.floor(e/30),e%30]},a.state={value:""},a}return Object(c.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this;return o.a.createElement("button",{class:"Buttons",style:X,id:this.props.id,onContextMenu:function(){e.props.open(e.setId(e.props.id),!0),e.props.resetNum(),e.props.forceUpdateHandler()},onClick:function(){e.props.open(e.setId(e.props.id),!1),e.props.resetNum(),e.props.forceUpdateHandler(),console.log(e.props.gameLog)}},this.props.gameLog[this.setId(this.props.id)[0]][this.setId(this.props.id)[1]])}}]),t}(o.a.Component),p={height:480,width:900,border:"2px solid #333333"},m=[],f=0;f<480;f++)m.push(f);var k=-1,d=[],T=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(i.a)(this,Object(g.a)(t).call(this,e))).forceUpdateHandler=function(){a.forceUpdate()},a.getRandomNumber=function(e,t){return Math.floor(Math.random()*(t-e+1))+e},a.generateGame=function(){d=[["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]];for(var e=0;e<99;e++)d[a.getRandomNumber(0,15)][a.getRandomNumber(0,29)]="X";a.checkGame(d)?(a.getNumber(d),a.setState({squareTaken:d}),a.state.squareTaken=d):a.generateGame()},a.getNumber=function(e){for(var t=1;t<e.length-1;t++)for(var a=1;a<e[t].length-1;a++)if(""===e[t][a]){var n=0;"X"===e[t-1][a]&&n++,"X"===e[t+1][a]&&n++,"X"===e[t][a-1]&&n++,"X"===e[t][a+1]&&n++,"X"===e[t-1][a-1]&&n++,"X"===e[t-1][a+1]&&n++,"X"===e[t+1][a-1]&&n++,"X"===e[t+1][a+1]&&n++,e[t][a]=n}for(var o=1;o<e.length-1;o++){if(""===e[o][0]){var r=0;"X"===e[o+1][1]&&r++,"X"===e[o-1][0]&&r++,"X"===e[o+1][0]&&r++,"X"===e[o-1][1]&&r++,"X"===e[o][1]&&r++,e[o][0]=r}if(""===e[o][0]){var s=0;"X"===e[o+1][e[o].length-1]&&s++,"X"===e[o-1][e[o].length]&&s++,"X"===e[o+1][e[o].length]&&s++,"X"===e[o-1][e[o].length-1]&&s++,"X"===e[o][e[o].length-1]&&s++,e[o][0]=s}}for(var l=1;l<e[0].length-1;l++){if(""===e[0][l]){var u=0;"X"===e[0][l-1]&&u++,"X"===e[0][l+1]&&u++,"X"===e[1][l-1]&&u++,"X"===e[1][l]&&u++,"X"===e[1][l+1]&&u++,e[0][l]=u}if(""===e[e.length-1][l]){var i=0;"X"===e[e.length-1][l-1]&&i++,"X"===e[e.length-1][l+1]&&i++,"X"===e[e.length-2][l-1]&&i++,"X"===e[e.length-2][l]&&i++,"X"===e[e.length-2][l+1]&&i++,e[e.length-1][l]=i}}if(""===e[0][0]){var g=0;"X"===e[0][1]&&g++,"X"===e[1][0]&&g++,"X"===e[1][1]&&g++,e[0][0]=g}if(""===e[0][15]){var c=0;"X"===e[0][14]&&c++,"X"===e[1][15]&&c++,"X"===e[1][14]&&c++,e[0][15]=c}if(""===e[15][0]){var X=0;"X"===e[15][1]&&X++,"X"===e[14][0]&&X++,"X"===e[14][1]&&X++,e[15][0]=X}if(""===e[15][15]){var h=0;"X"===e[15][14]&&h++,"X"===e[14][14]&&h++,"X"===e[14][15]&&h++,e[15][15]=h}},a.checkGame=function(e){console.log("doing");for(var t=1;t<e.length-1;t++)for(var a=1;a<e[t].length-1;a++)if("X"===e[t][a]&&"X"===e[t-1][a]&&"X"===e[t+1][a]&&"X"===e[t][a-1]&&"X"===e[t][a+1]&&"X"===e[t-1][a-1]&&"X"===e[t-1][a+1]&&"X"===e[t+1][a-1]&&"X"===e[t+1][a+1])return!1;for(var n=1;n<e.length-1;n++){if("X"===e[n][0]&&"X"===e[n-1][0]&&"X"===e[n+1][0]&&"X"===e[n-1][1]&&"X"===e[n][1]&&"X"===e[n+1][1])return!1;if("X"===e[n][e[n].length]&&"X"===e[n-1][e[n].length]&&"X"===e[n+1][e[n].length]&&"X"===e[n-1][e[n].length-1]&&"X"===e[n][e[n].length-1]&&"X"===e[n+1][e[n].length+1])return!1}for(var o=1;o<e[0].length-1;o++){if("X"===e[0][o]&&"X"===e[0][o-1]&&"X"===e[0][o+1]&&"X"===e[1][o-1]&&"X"===e[1][o]&&"X"===e[1][o+1])return!1;if("X"===e[e.length-1][o]&&"X"===e[e.length-1][o-1]&&"X"===e[e.length-1][o+1]&&"X"===e[e.length-2][o-1]&&"X"===e[e.length-2][o]&&"X"===e[e.length-2][o+1])return!1}return("X"!==e[0][0]||"X"!==e[0][1]||"X"!==e[1][0]||"X"!==e[1][1])&&(("X"!==e[0][15]||"X"!==e[0][14]||"X"!==e[1][15]||"X"!==e[1][14])&&(("X"!==e[15][0]||"X"!==e[15][1]||"X"!==e[14][0]||"X"!==e[14][1])&&("X"!==e[15][15]||"X"!==e[15][14]||"X"!==e[14][14]||"X"!==e[14][15])))},a.open=function(e,t){if(e)if(""===a.state.gameLog[e[0]][e[1]]&&(a.state.gameLog[e[0]][e[1]]=a.state.squareTaken[e[0]][e[1]],0===a.state.squareTaken[e[0]][e[1]]&&(console.log("DoingOpenAround"),a.openAround(e))),t&&"X"===a.state.squareTaken[e[0]][e[1]])a.state.gameLog[e[0]][e[1]]=a.state.squareTaken[e[0]][e[1]];else if("X"===a.state.squareTaken[e[0]][e[1]]){var n=30*e[0]+e[1];console.log(n),console.log(n.toString),document.getElementById(n.toString()).style.color="red",a.state.gameLog[e[0]][e[1]]=a.state.squareTaken[e[0]][e[1]],document.getElementById("winOrLose").innerHTML="You lost! Stepped on a bomb"}else t&&"X"!==a.state.squareTaken[e[0]][e[1]]&&(document.getElementById("winOrLose").innerHTML="You lost! This is not a bomb")},a.openAround=function(e){(a.state.squareTaken[e[0]-1]||0===a.state.squareTaken[e[0]-1])&&(console.log("top row",a.state.squareTaken[e[0]-1],"array: ",e,"top left: ",a.state.squareTaken[e[0]-1][e[1]-1]),(a.state.squareTaken[e[0]-1][e[1]-1]||0===a.state.squareTaken[e[0]-1][e[1]-1])&&(console.log("DoingOpenTopLeft"),a.open([e[0]-1,e[1]-1])),console.log("top row",a.state.squareTaken[e[0]-1],"array: ",e,"top: ",a.state.squareTaken[e[0]-1][e[1]]),(a.state.squareTaken[e[0]-1][e[1]]||0===a.state.squareTaken[e[0]-1][e[1]])&&(console.log("DoingOpenTop"),a.open([e[0]-1,e[1]])),console.log("top row",a.state.squareTaken[e[0]-1],"array: ",e,"top right: ",a.state.squareTaken[e[0]-1][e[1]+1]),(a.state.squareTaken[e[0]-1][e[1]+1]||0===a.state.squareTaken[e[0]-1][e[1]+1])&&(console.log("DoingOpenTopRight"),a.open([e[0]-1,e[1]+1]))),(a.state.squareTaken[e[0]]||0===a.state.squareTaken[e[0]-1])&&(console.log("this row: ",a.state.squareTaken[e[0]],"array: ",e,"left",a.state.squareTaken[e[0]][e[1]-1]),(a.state.squareTaken[e[0]][e[1]-1]||0===a.state.squareTaken[e[0]][e[1]-1])&&(console.log("DoingOpenLeft"),a.open([e[0],e[1]-1])),console.log("this row: ",a.state.squareTaken[e[0]],"array: ",e,"right: ",a.state.squareTaken[e[0]][e[1]+1]),(a.state.squareTaken[e[0]][e[1]+1]||0===a.state.squareTaken[e[0]][e[1]+1])&&(console.log("DoingOpenRight"),a.open([e[0],e[1]+1]))),(a.state.squareTaken[e[0]+1]||0===a.state.squareTaken[e[0]+1])&&(console.log("bottom row",a.state.squareTaken[e[0]+1],"array: ",e,"bottom left: ",a.state.squareTaken[e[0]+1][e[1]-1]),(a.state.squareTaken[e[0]+1][e[1]-1]||0===a.state.squareTaken[e[0]+1][e[1]-1])&&(console.log("DoingOpenBottomLeft"),a.open([e[0]+1,e[1]-1])),console.log("bottom row",a.state.squareTaken[e[0]+1],"array: ",e,"bottom: ",a.state.squareTaken[e[0]+1][e[1]]),(a.state.squareTaken[e[0]+1][e[1]]||0===a.state.squareTaken[e[0]+1][e[1]])&&(console.log("DoingOpenBottom"),a.open([e[0]+1,e[1]])),console.log("bottom row",a.state.squareTaken[e[0]+1],"array: ",e,"bottom right: ",a.state.squareTaken[e[0]+1][e[1]+1]),(a.state.squareTaken[e[0]+1][e[1]+1]||0===a.state.squareTaken[e[0]+1][e[1]+1])&&(console.log("DoingOpenBottomRight"),a.open([e[0]+1,e[1]+1])))},a.createBox=function(){return k+=1,o.a.createElement(h,{id:k,open:a.open,squareTaken:a.state.squareTaken,resetNum:a.resetNum,gameLog:a.state.gameLog,forceUpdateHandler:a.forceUpdateHandler})},a.resetNum=function(){k=-1},a.createBoxes=function(){return m.map(a.createBox)},a.state={squareTaken:[["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]],gameLog:[["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""],["","","","","","","","","","","","","","","","","","","","","","","","","","","","","",""]]},a}return Object(c.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.generateGame(),this.resetNum()}},{key:"render",value:function(){return console.log(this.state.squareTaken),console.log(this.state.gameLog),o.a.createElement("div",null,o.a.createElement("div",{style:p},this.createBoxes()))}}]),t}(o.a.Component);var q=function(){return o.a.createElement("div",null,o.a.createElement(T,null),o.a.createElement("h1",{id:"winOrLose",style:{color:"red"}}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(q,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.eaaea502.chunk.js.map