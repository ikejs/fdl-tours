(this["webpackJsonpbreakfast-on-the-farm"]=this["webpackJsonpbreakfast-on-the-farm"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,a){},,function(e,t,a){e.exports=a.p+"static/media/2.d6cb6efd.mp3"},function(e,t,a){e.exports=a.p+"static/media/3.fb716f41.mp3"},function(e,t,a){e.exports=a.p+"static/media/4.e549b76b.mp3"},function(e,t,a){e.exports=a.p+"static/media/5.035e3f2d.mp3"},function(e,t,a){e.exports=a.p+"static/media/6.36927f3b.mp3"},function(e,t,a){e.exports=a.p+"static/media/logo.be482a2a.png"},function(e,t,a){e.exports=a(31)},,,,,function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(13),c=a.n(o),l=(a(25),a(2)),i=a(3),s=a(5),m=a(4),u=a(7),d=a(8),p=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return this.props.enabled?r.a.createElement("div",null,r.a.createElement("iframe",{title:"Intro Video",className:"w-100 pb-2",style:{backgroundColor:"#5180AD"},height:"220",src:"https://www.youtube.com/embed/Spb4kmAW0Oc?controls=0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0},"Video not supported on this browser."),r.a.createElement("div",{className:"col-md-12"},r.a.createElement("button",{className:"btn btn-lg mt-4 p-3 btn-block btn-secondary",onClick:function(){e.props.hideIntro()}},"Continue to Tour ",r.a.createElement(u.a,{icon:d.a})))):null}}]),a}(n.Component),b=a(6),h=a.n(b),E=(a(12),a(14)),v=a.n(E),f=a(15),w=a.n(f),g=a(16),y=a.n(g),k=a(17),x=a.n(k),C=a(18),O=a.n(C),A=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return this.props.enabled?r.a.createElement("div",{className:"col-md-12 mt-4"},r.a.createElement("div",{className:"rounded p-3 mb-4 transparent text-center text-white"},r.a.createElement("h3",null,r.a.createElement("strong",null,"Station 2")," | Barn"),r.a.createElement("hr",null),r.a.createElement(h.a,{controls:!0,src:v.a,title:"Vir-Clar Farms Tour"})),r.a.createElement("div",{className:"rounded p-3 mb-4 transparent text-center text-white"},r.a.createElement("h3",null,r.a.createElement("strong",null,"Station 3")," | Calves"),r.a.createElement("hr",null),r.a.createElement(h.a,{controls:!0,src:w.a,title:"Vir-Clar Farms Tour"})),r.a.createElement("div",{className:"rounded p-3 mb-4 transparent text-center text-white"},r.a.createElement("h3",null,r.a.createElement("strong",null,"Station 4")," | Digesters"),r.a.createElement("hr",null),r.a.createElement(h.a,{controls:!0,src:y.a,title:"Vir-Clar Farms Tour"})),r.a.createElement("div",{className:"rounded p-3 mb-4 transparent text-center text-white"},r.a.createElement("h3",null,r.a.createElement("strong",null,"Station 5")," | Equipment"),r.a.createElement("hr",null),r.a.createElement(h.a,{controls:!0,src:x.a,title:"Vir-Clar Farms Tour"})),r.a.createElement("div",{className:"rounded p-3 mb-4 transparent text-center text-white"},r.a.createElement("h3",null,r.a.createElement("strong",null,"Station 6")," | Feed & Grain"),r.a.createElement("hr",null),r.a.createElement(h.a,{controls:!0,src:O.a,title:"Vir-Clar Farms Tour"})),r.a.createElement("div",{className:"col-md-12 mb-4"},r.a.createElement("button",{className:"btn btn-lg mt-4 p-3 mb-4 btn-block btn-secondary",onClick:function(){e.props.hideTour()}},"Continue to Parlor Tour ",r.a.createElement(u.a,{icon:d.a})))):null}}]),a}(n.Component),j=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return this.props.enabled?r.a.createElement("div",null,r.a.createElement("iframe",{title:"Outro Video",className:"w-100 pb-2",style:{backgroundColor:"#5180AD"},height:"219",src:"https://www.youtube.com/embed/dYevheZQPy4?controls=0",frameborder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0},"Video not supported on this browser."),r.a.createElement("div",{className:"col-md-12 mt-4 text-center text-white"},r.a.createElement("h3",null,r.a.createElement("strong",null,"Thank you for visiting!")))):null}}]),a}(n.Component),N=a(19),S=a.n(N),T=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={introActive:!0,tourActive:!1,outroActive:!1},n}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("div",{className:"pb-2",style:{backgroundColor:"#5180AD"}},r.a.createElement("img",{className:"w-100",src:S.a,alt:"Vir Clar",onClick:function(){e.setState({introActive:!0}),e.setState({tourActive:!1}),e.setState({outroActive:!1})}})),r.a.createElement(p,{enabled:this.state.introActive,hideIntro:function(){e.setState({introActive:!1}),e.setState({tourActive:!0})}}),r.a.createElement(A,{enabled:this.state.tourActive,hideTour:function(){e.setState({tourActive:!1}),e.setState({outroActive:!0})}}),r.a.createElement(j,{enabled:this.state.outroActive}))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(T,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[20,1,2]]]);
//# sourceMappingURL=main.6fb1de97.chunk.js.map