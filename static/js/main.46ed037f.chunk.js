(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(t,e,n){},14:function(t,e,n){"use strict";n.r(e);var c=n(7),o=n.n(c),a=n(2),i=n(3),r=n(5),s=n(4),l=n(1),d=n(0),m=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={today:new Date},t.timerId=0,t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){t.setState({today:new Date}),console.info(t.state.today.toUTCString().slice(-12,-4))}),1e3)}},{key:"componentDidUpdate",value:function(t){t.clockName!==this.props.clockName&&console.debug("Renamed from ".concat(t.clockName," to ").concat(this.props.clockName))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId)}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"Clock",children:[Object(d.jsx)("strong",{className:"Clock__name",children:this.props.clockName})," time is ",Object(d.jsx)("span",{className:"Clock__time",children:this.state.today.toUTCString().slice(-12,-4)})]})}}]),n}(l.Component);n(13);function u(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}var k=function(t){Object(r.a)(n,t);var e=Object(s.a)(n);function n(){var t;Object(a.a)(this,n);for(var c=arguments.length,o=new Array(c),i=0;i<c;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={hasClock:!0,clockName:"Clock-0"},t.timerId=0,t.removeClock=function(e){e.preventDefault(),t.setState({hasClock:!1})},t.addClock=function(){t.setState({hasClock:!0})},t}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){t.setState({clockName:u()})}),3300),document.addEventListener("contextmenu",this.removeClock),document.documentElement.addEventListener("click",this.addClock)}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerId),document.documentElement.addEventListener("contextmenu",this.removeClock),document.documentElement.addEventListener("click",this.addClock)}},{key:"render",value:function(){var t=this.state.hasClock;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),t&&Object(d.jsx)(m,{clockName:this.state.clockName})]})}}]),n}(l.Component);o.a.render(Object(d.jsx)(k,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.46ed037f.chunk.js.map