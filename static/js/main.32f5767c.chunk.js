(this["webpackJsonphockey-app"]=this["webpackJsonphockey-app"]||[]).push([[0],{13:function(e,t,s){},15:function(e,t,s){},20:function(e,t,s){"use strict";s.r(t);var A=s(1),c=s.n(A),n=s(7),a=s.n(n),r=(s(13),s(2)),j=(s.p,s(14),s(15),s(4)),i=s(0);var l=function(e){return console.log(e.formType),"PlayerCards"===e.formType||"TeamCards"===e.formType?Object(i.jsx)("button",{id:"submitButton",onClick:function(){e.updateType("Players"),e.addCount(1),e.updateReset(e.resetCount+1)},children:"Reset"}):"Players"===e.formType?Object(i.jsx)("button",{id:"submitButton",onClick:function(){e.updateType("PlayerCards")},children:"Submit Players"}):Object(i.jsx)("button",{id:"submitButton",onClick:function(){e.updateType("TeamCards")},children:"Submit Teams "})};var d=s(6),o=s.n(d),h=s(8);var b=function(e){var t=Object(A.useState)({}),s=Object(r.a)(t,2),c=s[0],n=s[1];if(0===Object.keys(c).length){var a=e.season.replace(/-/g,"");fetch("https://statsapi.web.nhl.com/api/v1/people/".concat(e.selectedPlayer.person.id,"/stats?stats=statsSingleSeason&season=").concat(a),{method:"GET"}).then((function(e){return e.json()})).then((function(t){if("Goalie"===e.selectedPlayer.position.name){console.log(t);var s={playerID:e.selectedPlayer.person.id,gamesPlayed:t.stats[0].splits[0].stat.games,savePct:(Math.round(100*t.stats[0].splits[0].stat.evenStrengthSavePercentage)/100).toFixed(2),GAA:(Math.round(100*t.stats[0].splits[0].stat.goalAgainstAverage)/100).toFixed(2),shutouts:t.stats[0].splits[0].stat.shutouts,shotsAgainst:t.stats[0].splits[0].stat.shotsAgainst,wins:t.stats[0].splits[0].stat.wins};n(s)}else{var A={playerID:e.selectedPlayer.person.id,gamesPlayed:t.stats[0].splits[0].stat.games,points:t.stats[0].splits[0].stat.points,goals:t.stats[0].splits[0].stat.goals,assists:t.stats[0].splits[0].stat.assists,plusMinus:t.stats[0].splits[0].stat.plusMinus,PPG:t.stats[0].splits[0].stat.powerPlayGoals,PIM:t.stats[0].splits[0].stat.penaltyMinutes,shots:t.stats[0].splits[0].stat.shots,shotPct:t.stats[0].splits[0].stat.shotPct};n(A)}}))}return"Goalie"===e.selectedPlayer.position.name?Object(i.jsx)("div",{className:"column",children:Object(i.jsxs)("div",{id:"card",children:[Object(i.jsx)("div",{id:"card_head",children:Object(i.jsxs)("div",{className:"centerHead",children:[Object(i.jsx)("h1",{className:"cardHead",children:e.selectedPlayer.person.fullName}),Object(i.jsx)(j.a,{className:"playerFace",src:"http://nhl.bamcontent.com/images/headshots/current/168x168/".concat(e.selectedPlayer.person.id,".jpg"),loader:"https://cache.dominos.com/nolo/ca/en/010048/assets/build/images/img/spinner.gif"}),Object(i.jsx)("h2",{children:e.selectedPlayer.position.name})]})}),Object(i.jsxs)("table",{children:[Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{className:"goalieData",children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:"Games Played:"})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:c.gamesPlayed})})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{className:"goalieData",children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:"Save%:"})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:c.savePct})})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{className:"goalieData",children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:"GAA: "})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:c.GAA})})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{className:"goalieData",children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsxs)("strong",{className:"right",children:[" ",Object(i.jsx)("p",{children:"Shutouts: "})]})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:c.shutouts})})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{className:"goalieData",children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:"Shots Against:"})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:c.shotsAgainst})})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{className:"goalieData",children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:"Wins:"})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:c.wins})})})]})]})]})}):Object(i.jsx)("div",{className:"column",children:Object(i.jsxs)("div",{id:"card",children:[Object(i.jsx)("div",{id:"card_head",children:Object(i.jsxs)("div",{className:"centerHead",children:[Object(i.jsx)("h1",{className:"cardHead",children:e.selectedPlayer.person.fullName}),Object(i.jsx)(j.a,{className:"playerFace",src:"http://nhl.bamcontent.com/images/headshots/current/168x168/".concat(e.selectedPlayer.person.id,".jpg"),loader:"https://cache.dominos.com/nolo/ca/en/010048/assets/build/images/img/spinner.gif"}),Object(i.jsx)("h2",{children:e.selectedPlayer.position.name})]})}),Object(i.jsxs)("table",{children:[Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:"Games Played:"})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:c.gamesPlayed})})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:" Points:"})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:c.points})})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:" Goals: "})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:c.goals})})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsxs)("strong",{className:"right",children:[" ",Object(i.jsx)("p",{children:"Assists: "})]})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:c.assists})})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:" +/-"})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:c.plusMinus})})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:" PPG:"})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:c.PPG})})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:" PIM:"})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:c.PIM})})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:" Shots:"})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:c.shots})})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:" Shot%:"})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:c.shotPct})})})]})]})]})})};var O=function(e){var t=Object(A.useState)(""),s=Object(r.a)(t,2),c=s[0],n=s[1],a=Object(A.useState)([]),j=Object(r.a)(a,2),l=j[0],d=j[1],O=Object(A.useState)(null),x=Object(r.a)(O,2),m=x[0],u=x[1],p=Object(A.useState)([]),g=Object(r.a)(p,2),N=g[0],f=g[1],v=Object(A.useState)(null),P=Object(r.a)(v,2),C=P[0],y=P[1],S=Object(A.useState)(e.formid),T=Object(r.a)(S,2),L=T[0],w=(T[1],Object(A.useState)(e.resetCount)),M=Object(r.a)(w,2),F=M[0],B=M[1];return e.resetCount>F&&(u(null),y(null),f([]),d([]),n(""),B(e.resetCount)),0===c.length&&n("2020-2021"),Object(A.useEffect)((function(){console.log("in");var e=c.replace(/-/g,"");fetch("https://statsapi.web.nhl.com/api/v1/teams?season=".concat(e),{method:"GET"}).then((function(e){return e.json()})).then((function(e){d(e.teams.sort((function(e,t){var s=e.name.toLowerCase(),A=t.name.toLowerCase();return s<A?-1:s>A?1:0})))}))}),[c]),Object(A.useEffect)((function(){if("Teams"!==e.formType){var t=l.find((function(e){return e.name===m}));void 0===t&&(t={id:24});var s=c.replace(/-/g,"");!function(){A.apply(this,arguments)}()}function A(){return(A=Object(h.a)(o.a.mark((function e(){return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://statsapi.web.nhl.com/api/v1/teams/".concat(t.id,"?expand=team.roster&season=").concat(s),{method:"GET"}).then((function(e){return e.json()})).then((function(e){var t=e.teams[0].roster.roster.sort((function(e,t){var s=e.person.fullName.toLowerCase(),A=t.person.fullName.toLowerCase();return s<A?-1:s>A?1:0}));f(t),y(t[0])}));case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}}),[m,c,l]),L>e.formCount?Object(i.jsx)("div",{className:"column is-3",children:Object(i.jsx)("p",{className:"addClick",onClick:function(){e.addCount(e.formCount+1)},children:"+"})}):"Players"===e.formType?Object(i.jsx)("div",{className:"column is-3",children:Object(i.jsxs)("form",{children:[Object(i.jsxs)("h2",{children:["Player ",L]}),Object(i.jsx)("br",{}),Object(i.jsx)("label",{children:"Season: "}),Object(i.jsxs)("select",{value:c,onChange:function(e){return n(e.target.value)},name:"selectList",id:"selectList",children:[Object(i.jsx)("option",{value:"2020-2021",children:"2020-2021"}),Object(i.jsx)("option",{value:"2019-2020",children:"2019-2020"}),Object(i.jsx)("option",{value:"2018-2019",children:"2018-2019"}),Object(i.jsx)("option",{value:"2017-2018",children:"2017-2018"}),Object(i.jsx)("option",{value:"2016-2017",children:"2016-2017"})]}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("label",{children:"Team: "}),Object(i.jsx)("select",{value:m,onChange:function(e){return u(e.target.value)},name:"selectList",id:"selectList",children:l.map((function(e){return Object(i.jsx)("option",{children:e.name})}))}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("label",{children:"Player: "}),Object(i.jsx)("select",{value:null===C?"None":C.person.fullName,onChange:function(e){return y(N.find((function(t){return t.person.fullName===e.target.value})))},name:"selectList",id:"selectList",children:N.map((function(e){return Object(i.jsx)("option",{children:e.person.fullName})}))})]})}):Object(i.jsx)(b,{season:c,selectedPlayer:C,formid:L})};var x=function(e){console.log("i");var t=Object(A.useState)({}),s=Object(r.a)(t,2),c=s[0],n=s[1];if(0===Object.keys(c).length||c.id!==e.selectedTeam.id){var a=e.season.replace(/-/g,"");fetch("https://statsapi.web.nhl.com/api/v1/teams/".concat(e.selectedTeam.id,"/stats?stats=statsSingleSeason&season=").concat(a),{method:"GET"}).then((function(e){return e.json()})).then((function(t){var s={id:e.selectedTeam.id,points:t.stats[0].splits[0].stat.pts,wins:t.stats[0].splits[0].stat.wins,losses:t.stats[0].splits[0].stat.losses,OTL:t.stats[0].splits[0].stat.ot,PP:(Math.round(100*t.stats[0].splits[0].stat.powerPlayPercentage)/100).toFixed(2),PK:(Math.round(100*t.stats[0].splits[0].stat.penaltyKillPercentage)/100).toFixed(2),shots:(Math.round(100*t.stats[0].splits[0].stat.shotsPerGame)/100).toFixed(2),shotsAgainst:(Math.round(100*t.stats[0].splits[0].stat.shotsAllowed)/100).toFixed(2)};n(s)}))}return Object(i.jsx)("div",{className:"column",children:Object(i.jsxs)("div",{id:"card",children:[Object(i.jsxs)("div",{className:"card_head_team",children:[Object(i.jsx)("h1",{className:"cardHead",children:e.selectedTeam.name}),Object(i.jsx)(j.a,{className:"teamLogo",src:"\n                https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/".concat(e.selectedTeam.id,".svg"),loader:"https://cache.dominos.com/nolo/ca/en/010048/assets/build/images/img/spinner.gif"})]}),Object(i.jsxs)("table",{children:[Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:"Points:"})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:c.points})})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:"Wins:"})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:c.wins})})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:"Losses:"})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:c.losses})})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:"OTL:"})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:c.OTL})})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:"PP%:"})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:c.PP})})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:"PK%:"})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:c.PK})})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:"Shots:"})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:c.shots})})})]}),Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("span",{className:"statName",children:Object(i.jsx)("strong",{className:"right",children:Object(i.jsx)("p",{children:"Shots Against:"})})})}),Object(i.jsx)("td",{children:Object(i.jsx)("span",{children:Object(i.jsx)("strong",{children:c.shotsAgainst})})})]})]})]})})};var m=function(e){var t=Object(A.useState)(""),s=Object(r.a)(t,2),c=s[0],n=s[1],a=Object(A.useState)([]),j=Object(r.a)(a,2),l=j[0],d=j[1],o=Object(A.useState)(null),h=Object(r.a)(o,2),b=h[0],O=h[1],m=Object(A.useState)(e.formid),u=Object(r.a)(m,2),p=u[0];return u[1],0===c.length&&n("2020-2021"),Object(A.useEffect)((function(){var e=c.replace(/-/g,"");fetch("https://statsapi.web.nhl.com/api/v1/teams?season=".concat(e),{method:"GET"}).then((function(e){return e.json()})).then((function(e){console.log(e),d(e.teams.sort((function(e,t){var s=e.name.toLowerCase(),A=t.name.toLowerCase();return s<A?-1:s>A?1:0})))}))}),[c]),l.length>0&&null===b&&O(l[0]),e.formid>e.formCount?Object(i.jsx)("div",{className:"column is-3",children:Object(i.jsx)("p",{className:"addClick",onClick:function(){e.addCount(e.formCount+1)},children:"+"})}):"Teams"===e.formType?Object(i.jsx)("div",{className:"column is-3",children:Object(i.jsxs)("form",{children:[Object(i.jsxs)("h2",{children:["Team ",p]}),Object(i.jsx)("br",{}),Object(i.jsx)("label",{children:"Season: "}),Object(i.jsxs)("select",{value:c,onChange:function(e){return n(e.target.value)},name:"selectList",id:"selectList",children:[Object(i.jsx)("option",{value:"2020-2021",children:"2020-2021"}),Object(i.jsx)("option",{value:"2019-2020",children:"2019-2020"}),Object(i.jsx)("option",{value:"2018-2019",children:"2018-2019"}),Object(i.jsx)("option",{value:"2017-2018",children:"2017-2018"}),Object(i.jsx)("option",{value:"2016-2017",children:"2016-2017"})]}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsx)("label",{children:"Team: "}),Object(i.jsx)("select",{value:null===b?"None":b.name,onChange:function(e){return O(l.find((function(t){return t.name===e.target.value})))},name:"selectList",id:"selectList",children:l.map((function(e){return Object(i.jsx)("option",{children:e.name})}))})]})}):"TeamCards"===e.formType?Object(i.jsx)(x,{season:c,selectedTeam:b}):void 0};function u(e){console.log(e.resetCount);var t=Object(A.useState)(e.type),s=Object(r.a)(t,2),c=s[0],n=s[1],a=Object(A.useState)([{prop1:"1",prop2:"2"},{prop3:"3",prop4:"4"}]),j=Object(r.a)(a,2);j[0],j[1];if(c!==e.type&&n(e.type),"Players"===c){for(var l=[],d=0;d<=e.formCount&&!(d>3);d++)l.push(Object(i.jsx)(O,{formType:c,formCount:e.formCount,formid:d+1,addCount:e.addCount,resetCount:e.resetCount}));return Object(i.jsx)("section",{children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{className:"columns is-variable",children:l})})})}if("PlayerCards"===c){for(var o=[],h=0;h<e.formCount;h++)o.push(Object(i.jsx)(O,{formType:c,formCount:e.formCount,formid:h+1,addCount:e.addCount}));return Object(i.jsx)("section",{children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{className:"columns is-variable",children:o})})})}if("Teams"===c){for(var b=[],x=0;x<=e.formCount&&!(x>3);x++)b.push(Object(i.jsx)(m,{formType:c,formCount:e.formCount,formid:x+1,addCount:e.addCount}));return Object(i.jsx)("section",{children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{className:"columns is-variable",children:b})})})}for(var u=[],p=0;p<e.formCount;p++)u.push(Object(i.jsx)(m,{formType:c,formCount:e.formCount,formid:p+1,addCount:e.addCount}));return Object(i.jsx)("section",{children:Object(i.jsx)("div",{className:"container",children:Object(i.jsx)("div",{className:"columns is-variable",children:u})})})}var p=function(){var e=Object(A.useState)("Players"),t=Object(r.a)(e,2),s=t[0],c=t[1],n=Object(A.useState)("typeButton2"),a=Object(r.a)(n,2),j=a[0],d=a[1],o=Object(A.useState)("typeButton"),h=Object(r.a)(o,2),b=h[0],O=h[1],x=Object(A.useState)(1),m=Object(r.a)(x,2),p=m[0],g=m[1],N=Object(A.useState)(0),f=Object(r.a)(N,2),v=f[0],P=f[1],C=Object(A.useRef)();return Object(A.useEffect)((function(){C.current&&C.current.scrollIntoView({behavior:"smooth",block:"end",inline:"nearest"})})),"Players"===s&&"typeButton2"!==j?(d("typeButton2"),O("typeButton")):"Teams"===s&&"typeButton2"!==b&&(O("typeButton2"),d("typeButton")),Object(i.jsxs)("div",{ref:C,id:"mainDiv",children:[Object(i.jsx)("div",{className:"section headerSection",children:Object(i.jsxs)("div",{className:"container",children:[Object(i.jsxs)("h1",{id:"title",children:["NHL Comparison Tool",Object(i.jsx)("img",{className:"headPic",src:"data:image/png;base64,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",alt:"headPic"})]}),Object(i.jsx)("br",{}),Object(i.jsx)("br",{}),Object(i.jsxs)("h2",{children:["Compare: ",Object(i.jsx)("button",{className:j,onClick:function(){c("Players"),g(1)},children:Object(i.jsx)("h2",{children:"Players"})})," ",Object(i.jsx)("button",{className:b,onClick:function(){c("Teams"),g(1)},children:Object(i.jsx)("h2",{children:"Teams"})})]}),Object(i.jsx)(l,{formType:s,updateType:c,resetCount:v,updateReset:P,addCount:g})]})}),Object(i.jsx)(u,{type:s,formCount:p,addCount:g,resetCount:v})]})},g=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,21)).then((function(t){var s=t.getCLS,A=t.getFID,c=t.getFCP,n=t.getLCP,a=t.getTTFB;s(e),A(e),c(e),n(e),a(e)}))};a.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(p,{})}),document.getElementById("root")),g()}},[[20,1,2]]]);
//# sourceMappingURL=main.32f5767c.chunk.js.map