webpackJsonp([4],{"6byf":function(t,e){},O8qS:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("qIga"),o={name:"login",data:function(){return{adminAccountNumber:"",adminPassword:""}},methods:{adminLogin:function(){if(""!=this.adminAccountNumber)if(""!=this.adminPassword){var t=this,e={account:this.adminAccountNumber,password:this.adminPassword};Object(n.B)(e).then(function(e){2e4==e.data.code?(t.$store.state.id=e.data.id,t.$store.state.userName=e.data.username,t.$store.state.token=e.data.token,window.localStorage.setItem("web_user",e.data.id),window.localStorage.setItem("jwt",e.data.token),t.$router.push("/web_admin")):alert(e.data.msg)}).catch(function(t){console.log(t)})}else alert("密码不能为空");else alert("账号不能为空")}}},s={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"log-from-box"},[a("h1",[t._v("网页管理系统")]),t._v(" "),a("label",{attrs:{for:""}},[t._v("账号：")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.adminAccountNumber,expression:"adminAccountNumber"}],attrs:{type:"text"},domProps:{value:t.adminAccountNumber},on:{input:function(e){e.target.composing||(t.adminAccountNumber=e.target.value)}}}),t._v(" "),a("br"),t._v(" "),a("label",{attrs:{for:""}},[t._v("密码：")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.adminPassword,expression:"adminPassword"}],attrs:{type:"password"},domProps:{value:t.adminPassword},on:{input:function(e){e.target.composing||(t.adminPassword=e.target.value)}}}),t._v(" "),a("br"),t._v(" "),a("button",{staticClass:"log-btn",on:{click:t.adminLogin}},[t._v("登录")])])},staticRenderFns:[]},r=a("VU/8")(o,s,!1,function(t){a("6byf")},null,null);e.default=r.exports}});
//# sourceMappingURL=4.c0d860c673fbfc1bfa8f.js.map