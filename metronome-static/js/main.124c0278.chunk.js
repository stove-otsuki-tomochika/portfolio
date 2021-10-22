(this.webpackJsonpmetronome=this.webpackJsonpmetronome||[]).push([[0],{13:function(t,e,n){t.exports={root:"Inputs_root__3w1C3",button:"Inputs_button__1Mhxr",barButtonText:"Inputs_barButtonText__3Q_M2",modal:"Inputs_modal__3EVSV",modalWindow:"Inputs_modalWindow__WKajK",setStateForm:"Inputs_setStateForm__ieiKV"}},14:function(t,e,n){t.exports={root:"StatusWindow_root__1TbUV",stateWrapper:"StatusWindow_stateWrapper__bzLUU",state:"StatusWindow_state__1hExZ"}},21:function(t,e,n){t.exports={root:"CountDisplay_root__35akm",iconWrapper:"CountDisplay_iconWrapper__3ZXxM",lensIcon:"CountDisplay_lensIcon__3wFCX",panoramaFishEyeIcon:"CountDisplay_panoramaFishEyeIcon__2C0_4",hide:"CountDisplay_hide__PIl97"}},22:function(t,e,n){t.exports={root:"ModalButton_root__3J2Sl",button:"ModalButton_button__3p6ET",buttonText:"ModalButton_buttonText__ccFmA"}},36:function(t,e,n){t.exports={root:"BpmInput_root__3LCYi",bpmInputLabel:"BpmInput_bpmInputLabel__Ili_2",bpmInput:"BpmInput_bpmInput__1u792"}},40:function(t,e,n){t.exports={root:"Header_root__20deQ"}},46:function(t,e,n){t.exports={root:"App_root__1vUZu"}},60:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var o=n(0),a=n.n(o),c=n(9),s=n.n(c),r=n(40),u=n.n(r),i=n(2),l=function(){return Object(i.jsx)("div",{className:u.a.root,children:Object(i.jsx)("h1",{children:"\u30e1\u30c8\u30ed\u30ce\u30fc\u30e0"})})},d=n(6),b=n(21),m=n.n(b),p=n(41),j=n.n(p),f=n(42),_=n.n(f),h=n(5),O=n(17),x=Object(O.c)({name:"metronome",initialState:{count:0,bpm:120,musicNote:4,beatCountNumerator:4,beatCountDenominator:4,soundCount:1,isPlay:!1,isModalOpen:!1,inputsModal:{index:"",buttonsData:[]}},reducers:{setCount:function(t,e){t.count=e.payload},setBpm:function(t,e){t.bpm=e.payload},setBeatCount:function(t,e){t.beatCountNumerator=e.payload.Numerator,t.beatCountDenominator=e.payload.Denominator},setMusicNote:function(t,e){t.musicNote=e.payload},setSoundCount:function(t,e){t.soundCount=e.payload},togglePlay:function(t){t.isPlay=!t.isPlay},modalOpen:function(t,e){t.isModalOpen=e.payload},setInputsButtonsData:function(t,e){t.inputsModal=e.payload}}}),C=x.actions,v=C.setCount,N=C.setBpm,y=C.setBeatCount,I=C.togglePlay,S=C.setMusicNote,B=C.modalOpen,D=C.setInputsButtonsData,M=C.setSoundCount,g=function(t){return t.metronome.count},w=function(t){return t.metronome.bpm},W=function(t){return t.metronome.musicNote},P=function(t){return t.metronome.beatCountNumerator},T=function(t){return t.metronome.beatCountDenominator},k=function(t){return t.metronome.isModalOpen},F=function(t){return t.metronome.inputsModal},L=function(t){return t.metronome.isPlay},A=function(t){return t.metronome.soundCount},E=x.reducer,V=function(){var t=Object(h.c)(P);return Object(i.jsx)("div",{className:m.a.root,children:Object(d.a)(Array(t)).map((function(t){return Object(i.jsxs)("div",{className:m.a.iconWrapper,children:[Object(i.jsx)(j.a,{fontSize:"large",className:"".concat(m.a.lensIcon," ").concat(m.a.hide)}),Object(i.jsx)(_.a,{fontSize:"large",className:m.a.panoramaFishEyeIcon})]},t)}))})},z=n.p+"static/media/bigSound.9a602878.mp3",U=n.p+"static/media/smallSound.3797798e.mp3",J=n(43),K=n.n(J),X=n(45),Z=n.n(X),Q=n(44),q=n.n(Q),H=n(77),Y=n(13),$=n.n(Y),G=n(22),R=n.n(G),tt=function(t){var e=Object(h.b)(),n=t.buttonIndex,o={dispatchModalClose:function(){e(B(!1))},dispatchSetMusicNote:function(){var n=Number(t.buttonData);e(S(n)),o.resetCount(),o.resetSoundCount(),o.dispatchModalClose()},dispatchSetBeatCount:function(){var n=t.buttonData.split("/"),a={Numerator:Number(n[0]),Denominator:Number(n[1])};e(y(a)),o.resetCount(),o.resetSoundCount(),o.dispatchModalClose()},resetCount:function(){e(v(0))},resetSoundCount:function(){e(M(0))}};return Object(i.jsx)("div",{className:R.a.root,children:"musicNote"===n?Object(i.jsx)("button",{className:R.a.button,defaultValue:t.buttonData,onClick:o.dispatchSetMusicNote,children:Object(i.jsxs)("p",{className:R.a.buttonText,children:[" ",t.buttonData,"\u9023\u7b26 "]})}):"beat"===n&&Object(i.jsx)("button",{className:R.a.button,defaultValue:t.buttonData,onClick:o.dispatchSetBeatCount,children:Object(i.jsxs)("p",{className:R.a.buttonText,children:[" ",t.buttonData," "]})})})},et="musicNote",nt="beat",ot=function(){var t=Object(h.b)(),e=Object(h.c)(k),n=Object(h.c)(L),a=Object(h.c)(F),c=Object(h.c)(g),s=Object(h.c)(w),r=Object(h.c)(P),u=Object(h.c)(W),l=Object(h.c)(A),d=60/s*1e3,b=new Audio(z);b.preload="auto",b.load();var m=new Audio(U);m.preload="auto",b.load();var p={dispatchModalOpen:function(){t(B(!0))},dispatchModalClose:function(){t(B(!1))},dispatchTogglePlay:function(){t(I())},dispatchSetInputsButtonsData:function(e){var n=[];if(e===et)for(var o=1;o<=16;o++)n.push(o.toString());else e===nt&&(n=["1/4","2/4","3/4","4/4"]);t(D({index:e,buttonsData:n}))},dispatchSetSoundCount:function(e){t(M(e))}},j=function(t){p.dispatchSetInputsButtonsData(t),p.dispatchModalOpen()},f=function(){var e=document.querySelectorAll(".CountDisplay_lensIcon__3wFCX");if(1===l){if(b.play(),b.currentTime=0,0===c){e[0].classList.remove("CountDisplay_hide__PIl97");for(var n=1;n<=e.length-1;n++)e[n].classList.add("CountDisplay_hide__PIl97")}else e[c].classList.remove("CountDisplay_hide__PIl97"),e[c-1].classList.add("CountDisplay_hide__PIl97");t(v(c>=r-1?0:c+1))}else m.play(),m.currentTime=0;p.dispatchSetSoundCount(l===u?1:l+1)};return Object(o.useEffect)((function(){if(n&&0!==s){var t=setInterval(f,Math.floor(d/u));return function(){clearInterval(t)}}})),Object(i.jsxs)("div",{className:$.a.root,children:[Object(i.jsx)("button",{id:"musicNoteButton",className:$.a.button,onClick:function(){return j(et)},children:Object(i.jsx)(K.a,{fontSize:"large"})}),Object(i.jsx)("button",{className:$.a.button,onClick:p.dispatchTogglePlay,children:!0===n?Object(i.jsx)(q.a,{fontSize:"large"}):Object(i.jsx)(Z.a,{fontSize:"large"})}),Object(i.jsx)("button",{id:"beatButton",className:$.a.button,onClick:function(){return j(nt)},children:Object(i.jsx)("p",{className:$.a.barButtonText,children:" \u62cd\u5b50 "})}),Object(i.jsx)(H.a,{open:e,onClose:p.dispatchModalClose,"aria-labelledby":"simple-modal-title","aria-describedby":"simple-modal-description",className:$.a.modal,children:Object(i.jsx)("div",{children:Object(i.jsx)("div",{className:$.a.modalWindow,children:Object(i.jsx)("div",{className:$.a.setStateForm,children:a.buttonsData.map((function(t,e){return Object(i.jsx)(tt,{buttonData:t,buttonIndex:a.index},t)}))})})})})]})},at=n(39),ct=n(47),st=n(36),rt=n.n(st),ut=function(){var t=Object(h.b)(),e=Object(ct.a)(),n=e.register,o=e.handleSubmit,a=function(e){t(N(e.setBpm)),t(v(0))};return Object(i.jsx)("div",{className:rt.a.root,children:Object(i.jsx)("form",{onSubmit:o(a),children:Object(i.jsxs)("label",{className:rt.a.bpmInputLabel,children:["bpm:",Object(i.jsx)("input",Object(at.a)(Object(at.a)({type:"text",className:rt.a.bpmInput,defaultValue:"120"},n("setBpm")),{},{onBlur:o(a)}))]})})})},it=n(14),lt=n.n(it),dt=function(){var t=Object(h.c)(W),e=Object(h.c)(P),n=Object(h.c)(T),o=Object(h.c)(L);return Object(i.jsxs)("div",{className:lt.a.root,children:[Object(i.jsx)("div",{className:lt.a.stateWrapper,children:Object(i.jsxs)("p",{className:lt.a.state,children:[t,"\u9023\u7b26"]})}),Object(i.jsx)("div",{className:lt.a.stateWrapper,children:o?Object(i.jsx)("p",{className:lt.a.state,children:"\u518d\u751f\u4e2d"}):Object(i.jsx)("p",{className:lt.a.state,children:"\u505c\u6b62\u4e2d"})}),Object(i.jsx)("div",{id:"beatButton",className:lt.a.stateWrapper,children:Object(i.jsxs)("p",{className:lt.a.state,children:[e,"/",n,"\u62cd\u5b50"]})})]})},bt=n(46),mt=n.n(bt),pt=function(){return Object(i.jsxs)("div",{className:mt.a.root,children:[Object(i.jsx)(l,{}),Object(i.jsx)(ut,{}),Object(i.jsx)(V,{}),Object(i.jsx)(dt,{}),Object(i.jsx)(ot,{})]})},jt=n(3),ft=n.n(jt),_t=n(8);function ht(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return new Promise((function(e){return setTimeout((function(){return e({data:t})}),500)}))}Object(O.b)("counter/fetchCount",function(){var t=Object(_t.a)(ft.a.mark((function t(e){var n;return ft.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,ht(e);case 2:return n=t.sent,t.abrupt("return",n.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());var Ot=Object(O.c)({name:"counter",initialState:{value:0,status:"idle"},reducers:{increment:function(t){t.value+=1},decrement:function(t){t.value-=1},incrementByAmount:function(t,e){t.value+=e.payload}}}),xt=Ot.actions,Ct=(xt.increment,xt.decrement,xt.incrementByAmount,Ot.reducer),vt=Object(O.a)({reducer:{counter:Ct,metronome:E}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(60);s.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(h.a,{store:vt,children:Object(i.jsx)(pt,{})})}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.124c0278.chunk.js.map