(this.webpackJsonpmy_network=this.webpackJsonpmy_network||[]).push([[5],{323:function(e,a,t){e.exports={login:"Login_login__1raa9",check_in:"Login_check_in__3vwPL",register:"Login_register__Y7s27",form:"Login_form__3A-gp",checkbox:"Login_checkbox__2aE-t",header:"Login_header__8fHXP",header_top:"Login_header_top__1CWUb",header_bottom:"Login_header_bottom__1FuvR",commonError:"Login_commonError__1GFHh",loginButton:"Login_loginButton__2_ngu"}},324:function(e,a,t){"use strict";t.r(a);var n=t(15),o=t(16),r=t(18),c=t(17),i=t(19),l=t(0),m=t.n(l),s=t(323),u=t.n(s),p=t(145),h=t(53),b=t(42),_=t(12),g=t(14),d=t(35),E=t(52),f=t(43),v=Object(p.a)({form:"loginForm",validate:h.b})((function(e){var a=e.handleSubmit,t=e.error,n=e.captcha,o=e.urlCaptcha,r=e.pristine,c=e.submitting,i=e.reset;return m.a.createElement("div",null,m.a.createElement("div",{className:u.a.check_in},m.a.createElement("form",{className:u.a.form,onSubmit:a},Object(E.a)(null,h.a,"email","email","email",null),Object(E.a)(null,h.a,"password","password","password",null),Object(E.a)(u.a.checkbox,h.a,"checkbox","rememberMe",null,"remember me "),t&&m.a.createElement("div",{className:u.a.commonError},t),n&&m.a.createElement("div",{className:u.a.captcha},m.a.createElement("img",{src:o,alt:""})),n&&m.a.createElement("div",null,Object(E.a)(null,h.a,"text","captcha","captcha",null)),m.a.createElement("div",{className:u.a.go},m.a.createElement("button",{type:"button",disabled:r||c,onClick:i},"Clear Values"),m.a.createElement("button",{type:"submit",className:u.a.loginButton},"Login"),m.a.createElement(g.b,{to:"/"},"Forgot the password")),m.a.createElement("div",null,m.a.createElement("u",null,"data of test account:"),m.a.createElement("br",null),m.a.createElement("b",null,"Email:")," margokomilfo@mail.ru",m.a.createElement("br",null),m.a.createElement("b",null,"Password:")," 123456789"))))})),L=function(e){function a(){var e,t;Object(n.a)(this,a);for(var o=arguments.length,i=new Array(o),l=0;l<o;l++)i[l]=arguments[l];return(t=Object(r.a)(this,(e=Object(c.a)(a)).call.apply(e,[this].concat(i)))).onSubmit=function(e){t.props.login(e.email,e.password,e.rememberMe,e.captcha)},t}return Object(i.a)(a,e),Object(o.a)(a,[{key:"componentDidMount",value:function(){}},{key:"componentDidUpdate",value:function(e,a,t){this.props.isLogin!==e.isLogin&&this.props.initializationTriM()}},{key:"render",value:function(){return this.props.isLogin?m.a.createElement(d.a,{to:"/welcome"}):m.a.createElement("div",{className:u.a.login},m.a.createElement(v,{onSubmit:this.onSubmit,urlCaptcha:this.props.urlCaptcha,captcha:this.props.captcha}))}}]),a}(m.a.Component);a.default=Object(_.b)((function(e){return{isLogin:e.auth.isLogin,captcha:e.auth.captcha,urlCaptcha:e.auth.urlCaptcha}}),{login:b.b,setCaptcha:b.e,initializationTriM:f.b})(L)}}]);
//# sourceMappingURL=5.2caaeef2.chunk.js.map