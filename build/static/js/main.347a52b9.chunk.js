(this.webpackJsonpselphie=this.webpackJsonpselphie||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/selphie.d8fe446d.png"},16:function(e,t,a){e.exports=a.p+"static/media/no-image.f98b32ce.png"},29:function(e,t,a){e.exports=a.p+"static/media/moogle.d8c8ce4f.png"},31:function(e,t,a){e.exports=a(47)},36:function(e,t,a){},46:function(e,t,a){},47:function(e,t,a){"use strict";a.r(t);var l=a(0),n=a.n(l),r=a(13),o=a.n(r),c=a(3),i=(a(36),a(4)),m=a(14),s=Object(l.createContext)();function u(){return Object(l.useContext)(s)}var p=a(30);var d=function(e){var t=e.component,a=Object(p.a)(e,["component"]),l=u().authToken;return n.a.createElement(m.b,Object.assign({},a,{render:function(e){return l?n.a.createElement(t,e):n.a.createElement(m.a,{to:"/login"})}}))},g=a(12),f=a.n(g);var E=function(e){var t=Object(l.useState)(!1),a=Object(i.a)(t,2),r=a[0],o=a[1],m=Object(l.useState)(""),s=Object(i.a)(m,2),p=s[0],d=s[1],g=Object(l.useState)(""),E=Object(i.a)(g,2),v=E[0],h=E[1],b=Object(l.useState)(!1),y=Object(i.a)(b,2),N=y[0],S=y[1],j=u().setAuthToken;function x(e){if(e.preventDefault(),document.getElementById("login-error").style.display="none",document.getElementById("validation-error").style.display="none",p.length>0&&v.length>0||(document.getElementById("validation-error").style.display="block",0)){S(!0);var t={username:p,password:v,audience:"MoogleApi"};fetch("https://chocoboapi.azurewebsites.net/v1/account/login",{method:"post",headers:{Accept:"application/json, text/plain, */*","Content-Type":"application/json"},body:JSON.stringify(t)}).then((function(e){return e.json()})).then((function(e){e.token?(j(e.token),o(!0),localStorage.setItem("user",JSON.stringify(e.user))):(console.log(e.message),document.getElementById("login-error").style.display="block",S(!1))}))}else console.log("validation failed")}return r?(e.history.push("/"),n.a.createElement(c.a,{to:"/"})):n.a.createElement("div",{className:"form-container login-screen"},n.a.createElement("div",{className:"overlay",style:{display:N?"block":"none"}},n.a.createElement("span",{className:"loader text-primary"},n.a.createElement("img",{className:"selphie-lg fa-spin",src:f.a}))),n.a.createElement("p",null,"Enter credentials"),n.a.createElement("form",null,n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"text",className:"form-control login-username",placeholder:"enter username",value:p,onChange:function(e){d(e.target.value)}})),n.a.createElement("div",{className:"form-group"},n.a.createElement("input",{type:"password",className:"form-control",placeholder:"enter password",value:v,onChange:function(e){h(e.target.value)}})),n.a.createElement("div",{id:"login-error"},"invalid credentials"),n.a.createElement("div",{id:"validation-error"},"enter your credentials"),n.a.createElement("button",{type:"submit",className:"btn btn-primary btn-block",onClick:function(e){return x(e)}},"Login")))},v=a(23),h=a.n(v);var b=function(e){var t=null;return localStorage.user&&localStorage.token&&(t=JSON.parse(localStorage.user)),n.a.createElement("nav",{className:"navbar navbar-expand navbar-light"},null!==t?n.a.createElement("span",null,n.a.createElement(c.c,{to:"/"},n.a.createElement("img",{className:"selphie-sm",src:f.a})," ",n.a.createElement("span",{className:"text-secondary"},"for MoogleApi")),n.a.createElement(c.c,{to:"/add"},n.a.createElement("span",{className:"character-add"},n.a.createElement("i",{className:"fas fa-plus-circle fa-2x"}))),n.a.createElement(c.c,{to:"/profile"},n.a.createElement("img",{className:"img-navbar",src:t.photo,alt:t.userName}))):n.a.createElement("span",null,"\xa0"))};var y=function(e){return localStorage.user&&localStorage.token&&JSON.parse(localStorage.user),n.a.createElement("footer",null,n.a.createElement("div",{className:"d-flex justify-content-center"},n.a.createElement(c.c,{to:"/"},n.a.createElement("i",{className:"fas fa-home"})),n.a.createElement(c.c,{to:"/"},n.a.createElement("i",{className:"fab fa-fort-awesome-alt"})),n.a.createElement(c.c,{to:"/add"},n.a.createElement("i",{className:"fas fa-plus-circle"})),n.a.createElement(c.c,{to:"/profile"},n.a.createElement("i",{className:"fas fa-user-circle"}))))};var N=function(e){var t=Object(l.useState)(""),a=Object(i.a)(t,2),r=a[0],o=a[1],m=Object(l.useState)(""),s=Object(i.a)(m,2),u=s[0],p=s[1],d=Object(l.useState)(""),g=Object(i.a)(d,2),f=g[0],E=g[1],v=Object(l.useState)(""),N=Object(i.a)(v,2),S=N[0],j=N[1],x=Object(l.useState)(""),w=Object(i.a)(x,2),O=w[0],k=w[1],q=Object(l.useState)(""),B=Object(i.a)(q,2),I=B[0],C=B[1],D=Object(l.useState)(""),V=Object(i.a)(D,2),A=V[0],P=V[1],J=Object(l.useState)(""),F=Object(i.a)(J,2),T=F[0],z=F[1],Y=Object(l.useState)(""),M=Object(i.a)(Y,2),U=M[0],H=M[1],L=JSON.parse(localStorage.user);function R(e){e.preventDefault();var t=localStorage.token,a=JSON.parse(localStorage.user);document.getElementById("validation-error").style.display="none";var l=new FormData;l.append("id",a.id),l.append("photo",""===U?a.photo:document.forms["profile-form"]["upload-photo"].files[0]),l.append("username",""===r?a.userName:r),l.append("email",""===u?a.email:u),l.append("firstname",""===f?a.firstName:f),l.append("lastname",""===S?a.lastName:S),l.append("age",""===O?a.age:O),l.append("birthdate",""===I?a.birthDate:I),l.append("city",""===A?a.city:A),l.append("state",""===T?a.state:T),fetch("https://chocoboapi.azurewebsites.net/v1/manage/update",{method:"put",headers:{Authorization:"Bearer "+t},body:l}).then((function(e){return e.json()})).then((function(e){e.user?localStorage.setItem("user",JSON.stringify(e.user)):(console.log("update failed"),console.log(e.errors))}))}return n.a.createElement("div",null,n.a.createElement(b,null),n.a.createElement("div",{className:"form-container form-container-profile component"},n.a.createElement("div",{className:"profile-container"},n.a.createElement("img",{id:"profile-photo",className:"profile-photo",src:L.photo,alt:L.userName,onClick:function(){document.getElementById("upload-photo").click()}})),n.a.createElement("form",{name:"profile-form",id:"profile-form",className:"profile-form",encType:"multipart/form-data",method:"put"},n.a.createElement("p",{className:"font-weight-bold login-username"},L.userName),n.a.createElement("p",{className:"font-small text-secondary"},"Joined ",h()(L.joinDate).format("MMMM DD, YYYY")),n.a.createElement("div",{className:"input-group"},n.a.createElement("input",{type:"text",className:"form-control login-username",defaultValue:L.userName,placeholder:"user name",onChange:function(e){o(e.target.value)}}),n.a.createElement("span",null,"\xa0"),n.a.createElement("input",{type:"text",className:"form-control",defaultValue:L.email,placeholder:"email",onChange:function(e){p(e.target.value)}})),n.a.createElement("div",{className:"input-group"},n.a.createElement("input",{type:"text",className:"form-control",defaultValue:L.firstName,placeholder:"first name",onChange:function(e){E(e.target.value)}}),n.a.createElement("span",null,"\xa0"),n.a.createElement("input",{type:"text",className:"form-control",defaultValue:L.lastName,placeholder:"last name",onChange:function(e){j(e.target.value)}})),n.a.createElement("div",{className:"input-group"},n.a.createElement("input",{type:"number",className:"form-control",defaultValue:L.age,placeholder:"00",onChange:function(e){k(e.target.value)}}),n.a.createElement("span",null,"\xa0"),n.a.createElement("input",{type:"date",className:"form-control",defaultValue:h()(L.birthDate).format("YYYY-MM-DD"),onChange:function(e){C(e.target.value)}})),n.a.createElement("div",{className:"input-group"},n.a.createElement("input",{type:"text",className:"form-control",defaultValue:L.city,placeholder:"city",onChange:function(e){P(e.target.value)}}),n.a.createElement("span",null,"\xa0"),n.a.createElement("input",{type:"text",className:"form-control",defaultValue:L.state,placeholder:"state",onChange:function(e){z(e.target.value)}})),n.a.createElement("div",{id:"validation-error"},"form validation failed"),n.a.createElement("input",{id:"upload-photo",type:"file",accept:"image/*",name:"photo",onChange:function(e){!function(e){var t=URL.createObjectURL(e.target.files[0]);t&&(document.getElementById("profile-photo").src=t,H(e.target.value))}(e)}}),n.a.createElement("div",{className:"button-container"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("button",{type:"submit",title:"Logout",className:"btn btn-primary btn-profile",onClick:function(){return localStorage.clear(),e.history.push("/login"),n.a.createElement(c.a,{to:"/login"})}},n.a.createElement("i",{className:"fas fa-door-closed"}))),n.a.createElement("div",{className:"col-md-12"},n.a.createElement("p",{className:"font-small"},"logout"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-md-12"},n.a.createElement("button",{type:"submit",title:"Update Information",className:"btn btn-success btn-profile",onClick:function(e){R(e)}},n.a.createElement("i",{className:"fas fa-user-edit"}))),n.a.createElement("div",{className:"col-md-12"},n.a.createElement("p",{className:"font-small"},"update info")))))),n.a.createElement(y,null))},S=a(15),j=a.n(S),x=a(17),w=a(16),O=a.n(w),k=function(e){var t=Object(l.useState)(null),a=Object(i.a)(t,2),n=a[0],r=a[1];function o(){return(o=Object(x.a)(j.a.mark((function t(){var a,l;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return a=t.sent,t.next=5,a.json();case 5:l=t.sent,r(l);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(l.useEffect)((function(){!function(){o.apply(this,arguments)}()}),[e]),n};var q=function(e){var t=k("https://www.moogleapi.com/api/v1/characters");return t?n.a.createElement(n.a.Fragment,null,n.a.createElement(b,null),n.a.createElement("div",{className:"component"},n.a.createElement("div",{className:"form-container"},n.a.createElement("div",{className:"row mx-3 justify-content-center"},t.map((function(e){return n.a.createElement("div",{className:"card-character",key:e.id},n.a.createElement("div",{className:"col-lg-12 col-md-12 col-sm-12 col-xs-12 text-center"},n.a.createElement(c.c,{to:"/edit/"+e.id},e.pictures[0]?n.a.createElement("img",{className:"img-character",src:e.pictures[0].url,alt:e.name}):n.a.createElement("img",{className:"img-character",src:O.a,alt:e.name}),n.a.createElement("h6",{className:"text-center"},e.name))))}))))),n.a.createElement(y,null)):n.a.createElement(n.a.Fragment,null,n.a.createElement(b,null),n.a.createElement("div",{className:"component"},n.a.createElement("span",{className:"loader text-primary"},n.a.createElement("img",{className:"selphie fa-spin",src:f.a}))),n.a.createElement(y,null))},B=(a(18),a(24),a(9)),I=a(19),C=function(e){var t=Object(l.useState)(null),a=Object(i.a)(t,2),n=a[0],r=a[1];function o(){return(o=Object(x.a)(j.a.mark((function t(){var a,l;return j.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch(e);case 2:return a=t.sent,t.next=5,a.json();case 5:l=t.sent,r(l[0]);case 7:case"end":return t.stop()}}),t)})))).apply(this,arguments)}return Object(l.useEffect)((function(){!function(){o.apply(this,arguments)}()}),[e]),n};var D=function(e){var t=e.match.params.id,a=C("https://www.moogleapi.com/api/v1/characters/"+t),r=Object(l.useState)({}),o=Object(i.a)(r,2),m=(o[0],o[1],Object(l.useState)(!1)),s=Object(i.a)(m,2),u=s[0],p=(s[1],JSON.parse(localStorage.token)),d=Object(l.useState)(!1),g=Object(i.a)(d,2),E=g[0],v=g[1],h=Object(l.useState)(!1),N=Object(i.a)(h,2),S=N[0],j=N[1],x=function(){return j(!1)};if(a){var w,k=a;return k.pictures[0]?k.pictures.map((function(e){w=1===e.primary?e.url:O.a})):w=O.a,n.a.createElement(n.a.Fragment,null,n.a.createElement(b,null),n.a.createElement("div",{className:"component"},n.a.createElement("div",{className:"container top-margin"},n.a.createElement(B.a,Object.assign({show:S,onHide:x},e,{size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),n.a.createElement(B.a.Header,null,n.a.createElement(B.a.Title,null,"Test Account")),n.a.createElement(B.a.Body,null,n.a.createElement("p",null,"Your account doesn't have access to make changes.")),n.a.createElement(B.a.Footer,null,n.a.createElement(I.a,{variant:"secondary",onClick:x},"Close"))),n.a.createElement("div",{className:"overlay",style:{display:E?"block":"none"}},n.a.createElement("span",{className:"loader text-primary"},n.a.createElement("i",{className:"fas fa-circle-notch fa-spin fa-5x"}))),n.a.createElement("form",{name:"character-form",id:"character-form",encType:"multipart/form-data",method:"put"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-8 col-md-8"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-6 col-md-6"},n.a.createElement("img",{className:"img-character-profile",src:w,alt:k.name}),n.a.createElement("div",{className:"button-container"},n.a.createElement("button",{type:"submit",title:"Update Photo",className:"btn btn-primary btn-profile",onClick:function(e){!function(e){e.preventDefault(),console.log("not implemented")}(e)}},"Update Photo"))),n.a.createElement("div",{className:"col-sm-6 col-md-6"},n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("input",{type:"text",className:"form-control floating-input",name:"name",defaultValue:k.name,placeholder:"character name"}),n.a.createElement("label",null,"name")),n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("input",{type:"text",className:"form-control floating-input",name:"japaneseName",defaultValue:k.japaneseName,placeholder:"japanese name"}),n.a.createElement("label",null,"japanese name")),n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("input",{type:"text",className:"form-control floating-input",name:"age",defaultValue:k.age,placeholder:"age"}),n.a.createElement("label",null,"age")),n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("input",{type:"text",className:"form-control floating-input",name:"gender",defaultValue:k.gender,placeholder:"gender"}),n.a.createElement("label",null,"gender")),n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("input",{type:"text",className:"form-control floating-input",name:"race",defaultValue:k.race,placeholder:"race"}),n.a.createElement("label",null,"race")),n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("input",{type:"text",className:"form-control floating-input",name:"job",defaultValue:k.job,placeholder:"job"}),n.a.createElement("label",null,"class")),n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("input",{type:"text",className:"form-control floating-input",name:"height",defaultValue:k.height,placeholder:"height"}),n.a.createElement("label",null,"height")),n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("input",{type:"text",className:"form-control floating-input",name:"weight",defaultValue:k.weight,placeholder:"weight"}),n.a.createElement("label",null,"weight")),n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("input",{type:"text",className:"form-control floating-input",name:"origin",defaultValue:k.origin,placeholder:"origin"}),n.a.createElement("label",null,"origin"))),n.a.createElement("div",{className:"col-sm-12 col-md-12"},n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("textarea",{className:"character-form-control floating-textarea",name:"description",defaultValue:k.description,placeholder:"description"}),n.a.createElement("label",null,"description")),n.a.createElement("div",{className:"button-container"},n.a.createElement("button",{type:"submit",title:"Delete",className:"btn btn-secondary btn-profile mr-2",onClick:function(a){!function(a){a.preventDefault(),v(!0),fetch("https://www.moogleapi.com/api/v1/characters/delete/"+t,{method:"delete",headers:{Authorization:"Bearer "+p}}).then((function(t){return 200===t.status?(e.history.push("/"),n.a.createElement(c.a,{to:"/"})):401===t.status?(localStorage.clear(),e.history.push("/login"),n.a.createElement(c.a,{to:"/login"})):void(403===t.status?(v(!1),j(!0),console.log("user cannot delete character")):(console.log("delete failed"),console.log(t.errors)))}))}(a)}},"Delete Character"),n.a.createElement("button",{type:"submit",title:"Save",className:"btn btn-primary btn-profile ml-2",onClick:function(a){!function(a){a.preventDefault(),v(!0);var l=new FormData;l.append("id",t),l.append("name",document.querySelector('[name="name"]').value),l.append("japaneseName",document.querySelector('[name="japaneseName"]').value),l.append("age",document.querySelector('[name="age"]').value),l.append("gender",document.querySelector('[name="gender"]').value),l.append("race",document.querySelector('[name="race"]').value),l.append("job",document.querySelector('[name="job"]').value),l.append("height",document.querySelector('[name="height"]').value),l.append("weight",document.querySelector('[name="weight"]').value),l.append("origin",document.querySelector('[name="origin"]').value),l.append("description",document.querySelector('[name="description"]').value),fetch("https://www.moogleapi.com/api/v1/characters/update/"+t,{method:"put",headers:{Authorization:"Bearer "+p},body:l}).then((function(a){return 200===a.status?(e.history.push("/edit"+t),n.a.createElement(c.a,{to:"/edit"+t})):401===a.status?(localStorage.clear(),e.history.push("/login"),n.a.createElement(c.a,{to:"/login"})):void(403===a.status?(v(!1),j(!0),console.log("user cannot update character")):(console.log("update failed"),console.log(a.errors)))}))}(a)}},"Update Character"))))),n.a.createElement("div",{className:"col-sm-4 col-md-4"},n.a.createElement("select",{id:"stat-select",className:"form-control stat-select mb-25",onChange:function(e){!function(e){var t,a=document.getElementsByClassName("stat-container");for(t=0;t<a.length;t+=1)a[t].style.display="none";document.getElementById(e.target.value).style.display="block"}(e)}},k.stats.length>0?n.a.createElement("option",{value:"0"},"Select a stat model..."):n.a.createElement("option",{value:"0"},"No stats entered..."),n.a.createElement("option",{value:"1"},"Add a new stat model..."),k.stats.length>0?k.stats.map((function(e){return n.a.createElement("option",{key:e.id,value:e.id},e.platform," - ",e.class," - level: ",e.level)})):n.a.createElement(n.a.Fragment,null)),n.a.createElement("div",{id:"0",style:{display:u?"block":"none"},className:"stat-container"}),n.a.createElement("div",{id:"1",style:{display:u?"block":"none"},className:"stat-container"},n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("input",{type:"text",className:"form-control floating-input",name:"platform",placeholder:"platform"}),n.a.createElement("label",null,"platform")),n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("input",{type:"text",className:"form-control floating-input",name:"class",placeholder:"class"}),n.a.createElement("label",null,"class")),n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("input",{type:"text",className:"form-control floating-input",name:"level",placeholder:"level"}),n.a.createElement("label",null,"level")),n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("input",{type:"text",className:"form-control floating-input",name:"hitPoints",placeholder:"hit points"}),n.a.createElement("label",null,"hit points")),n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("input",{type:"text",className:"form-control floating-input",name:"manaPoints",placeholder:"mana points"}),n.a.createElement("label",null,"mana points")),n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("input",{type:"text",className:"form-control floating-input",name:"attack",placeholder:"attack"}),n.a.createElement("label",null,"attack")),n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("input",{type:"text",className:"form-control floating-input",name:"defense",placeholder:"defense"}),n.a.createElement("label",null,"defense")),n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("input",{type:"text",className:"form-control floating-input",name:"magic",placeholder:"magic"}),n.a.createElement("label",null,"magic")),n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("input",{type:"text",className:"form-control floating-input",name:"magicDefense",placeholder:"magic defense"}),n.a.createElement("label",null,"magic defense")),n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("input",{type:"text",className:"form-control floating-input",name:"agility",placeholder:"agility"}),n.a.createElement("label",null,"agility")),n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("input",{type:"text",className:"form-control floating-input",name:"spirit",placeholder:"spirit"}),n.a.createElement("label",null,"spirit")),n.a.createElement("div",{className:"button-container"},n.a.createElement("button",{type:"submit",title:"Save Stats",className:"btn btn-primary btn-profile",onClick:function(a){!function(a){a.preventDefault(),v(!0);var l=new FormData;l.append("platform",document.getElementById("1").querySelector('[name="platform"]').value),l.append("class",document.getElementById("1").querySelector('[name="class"]').value),l.append("level",document.getElementById("1").querySelector('[name="level"]').value),l.append("hitPoints",document.getElementById("1").querySelector('[name="hitPoints"]').value),l.append("manaPoints",document.getElementById("1").querySelector('[name="manaPoints"]').value),l.append("attack",document.getElementById("1").querySelector('[name="attack"]').value),l.append("defense",document.getElementById("1").querySelector('[name="defense"]').value),l.append("magic",document.getElementById("1").querySelector('[name="magic"]').value),l.append("magicDefense",document.getElementById("1").querySelector('[name="magicDefense"]').value),l.append("agility",document.getElementById("1").querySelector('[name="agility"]').value),l.append("spirit",document.getElementById("1").querySelector('[name="spirit"]').value),l.append("collectionId",t),fetch("https://www.moogleapi.com/api/v1/stats/add/",{method:"post",headers:{Authorization:"Bearer "+p},body:l}).then((function(a){return 200===a.status?(e.history.push("/edit"+t),n.a.createElement(c.a,{to:"/edit"+t})):401===a.status?(localStorage.clear(),e.history.push("/login"),n.a.createElement(c.a,{to:"/login"})):void(403===a.status?(v(!1),j(!0),console.log("user cannot add stats")):(console.log("add failed"),console.log(a.errors)))}))}(a)}},"Add Stats"))),k.stats.map((function(a){return n.a.createElement("div",{id:a.id,key:a.id,style:{display:u?"block":"none"},className:"stat-container"},n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("input",{type:"text",className:"form-control floating-input",name:"platform",defaultValue:a.platform,placeholder:"platform"}),n.a.createElement("label",null,"platform")),n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("input",{type:"text",className:"form-control floating-input",name:"class",defaultValue:a.class,placeholder:"class"}),n.a.createElement("label",null,"class")),n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("input",{type:"text",className:"form-control floating-input",name:"level",defaultValue:a.level,placeholder:"level"}),n.a.createElement("label",null,"level")),n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("input",{type:"text",className:"form-control floating-input",name:"hitPoints",defaultValue:a.hitPoints,placeholder:"hit points"}),n.a.createElement("label",null,"hit points")),n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("input",{type:"text",className:"form-control floating-input",name:"manaPoints",defaultValue:a.manaPoints,placeholder:"mana points"}),n.a.createElement("label",null,"mana points")),n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("input",{type:"text",className:"form-control floating-input",name:"attack",defaultValue:a.attack,placeholder:"attack"}),n.a.createElement("label",null,"attack")),n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("input",{type:"text",className:"form-control floating-input",name:"defense",defaultValue:a.defense,placeholder:"defense"}),n.a.createElement("label",null,"defense")),n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("input",{type:"text",className:"form-control floating-input",name:"magic",defaultValue:a.magic,placeholder:"magic"}),n.a.createElement("label",null,"magic")),n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("input",{type:"text",className:"form-control floating-input",name:"magicDefense",defaultValue:a.magicDefense,placeholder:"magic defense"}),n.a.createElement("label",null,"magic defense")),n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("input",{type:"text",className:"form-control floating-input",name:"agility",defaultValue:a.agility,placeholder:"agility"}),n.a.createElement("label",null,"defense")),n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("input",{type:"text",className:"form-control floating-input",name:"spirit",defaultValue:a.spirit,placeholder:"spirit"}),n.a.createElement("label",null,"spirit")),n.a.createElement("div",{className:"button-container float-right"},n.a.createElement("button",{type:"submit",title:"Delete",className:"btn btn-secondary btn-profile mr-2",onClick:function(l){!function(a,l){a.preventDefault(),v(!0),fetch("https://www.moogleapi.com/api/v1/stats/delete/"+l,{method:"delete",headers:{Authorization:"Bearer "+p}}).then((function(a){return 200===a.status?(e.history.push("/edit"+t),n.a.createElement(c.a,{to:"/edit"+t})):401===a.status?(localStorage.clear(),e.history.push("/login"),n.a.createElement(c.a,{to:"/login"})):void(403===a.status?(v(!1),j(!0),console.log("user cannot delete stats")):(console.log("delete failed"),console.log(a.errors)))}))}(l,a.id)}},"Delete Stats"),n.a.createElement("button",{type:"submit",title:"Update Stats",className:"btn btn-primary btn-profile ml-2",onClick:function(l){!function(a,l){a.preventDefault(),v(!0);var r=new FormData;r.append("id",l),r.append("platform",document.getElementById(""+l).querySelector('[name="platform"]').value),r.append("class",document.getElementById(""+l).querySelector('[name="class"]').value),r.append("level",document.getElementById(""+l).querySelector('[name="level"]').value),r.append("hitPoints",document.getElementById(""+l).querySelector('[name="hitPoints"]').value),r.append("manaPoints",document.getElementById(""+l).querySelector('[name="manaPoints"]').value),r.append("attack",document.getElementById(""+l).querySelector('[name="attack"]').value),r.append("defense",document.getElementById(""+l).querySelector('[name="defense"]').value),r.append("magic",document.getElementById(""+l).querySelector('[name="magic"]').value),r.append("magicDefense",document.getElementById(""+l).querySelector('[name="magicDefense"]').value),r.append("agility",document.getElementById(""+l).querySelector('[name="agility"]').value),r.append("spirit",document.getElementById(""+l).querySelector('[name="spirit"]').value),fetch("https://www.moogleapi.com/api/v1/stats/update/"+l,{method:"put",headers:{Authorization:"Bearer "+p},body:r}).then((function(a){return 200===a.status?(e.history.push("/edit"+t),n.a.createElement(c.a,{to:"/edit"+t})):401===a.status?(localStorage.clear(),e.history.push("/login"),n.a.createElement(c.a,{to:"/login"})):void(403===a.status?(v(!1),j(!0),console.log("user cannot update stats")):(console.log("update failed"),console.log(a.errors)))}))}(l,a.id)}},"Update Stats")))}))))))),n.a.createElement(y,null))}return n.a.createElement(n.a.Fragment,null,n.a.createElement(b,null),n.a.createElement("div",null,n.a.createElement("span",{className:"loader text-primary"},n.a.createElement("img",{className:"selphie fa-spin",src:f.a}))),n.a.createElement(y,null))},V=a(29),A=a.n(V);var P=function(e){var t=Object(l.useState)(!1),a=Object(i.a)(t,2),r=(a[0],a[1],JSON.parse(localStorage.token)),o=Object(l.useState)(!1),m=Object(i.a)(o,2),s=m[0],u=m[1],p=Object(l.useState)(!1),d=Object(i.a)(p,2),g=d[0],f=d[1],E=function(){return f(!1)};return n.a.createElement(n.a.Fragment,null,n.a.createElement(b,null),n.a.createElement("div",{className:"component"},n.a.createElement("div",{className:"container top-margin"},n.a.createElement(B.a,Object.assign({show:g,onHide:E},e,{size:"md","aria-labelledby":"contained-modal-title-vcenter",centered:!0}),n.a.createElement(B.a.Header,null,n.a.createElement(B.a.Title,null,"Test Account")),n.a.createElement(B.a.Body,null,n.a.createElement("p",null,"Your account doesn't have access to make changes.")),n.a.createElement(B.a.Footer,null,n.a.createElement(I.a,{variant:"secondary",onClick:E},"Close"))),n.a.createElement("div",{className:"overlay",style:{display:s?"block":"none"}},n.a.createElement("span",{className:"loader text-primary"},n.a.createElement("i",{className:"fas fa-circle-notch fa-spin fa-5x"}))),n.a.createElement("form",{name:"character-form",id:"character-form",encType:"multipart/form-data",method:"put"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-12 col-md-12"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-sm-6 col-md-6"},n.a.createElement("img",{className:"img-character-profile tilt moogle",src:A.a}),n.a.createElement("p",{className:"mt-5 font-weight-bold"},"You'll be able to upload pictures and add/edit stats after the initial creation.")),n.a.createElement("div",{className:"col-sm-6 col-md-6"},n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("input",{type:"text",className:"form-control floating-input",name:"name",placeholder:"character name"}),n.a.createElement("label",null,"name")),n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("input",{type:"text",className:"form-control floating-input",name:"japaneseName",placeholder:"japanese name"}),n.a.createElement("label",null,"japanese name")),n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("input",{type:"text",className:"form-control floating-input",name:"age",placeholder:"age"}),n.a.createElement("label",null,"age")),n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("input",{type:"text",className:"form-control floating-input",name:"gender",placeholder:"gender"}),n.a.createElement("label",null,"gender")),n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("input",{type:"text",className:"form-control floating-input",name:"race",placeholder:"race"}),n.a.createElement("label",null,"race")),n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("input",{type:"text",className:"form-control floating-input",name:"job",placeholder:"class"}),n.a.createElement("label",null,"class")),n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("input",{type:"text",className:"form-control floating-input",name:"height",placeholder:"height"}),n.a.createElement("label",null,"height")),n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("input",{type:"text",className:"form-control floating-input",name:"weight",placeholder:"weight"}),n.a.createElement("label",null,"weight")),n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("input",{type:"text",className:"form-control floating-input",name:"origin",placeholder:"origin"}),n.a.createElement("label",null,"origin"))),n.a.createElement("div",{className:"col-sm-12 col-md-12"},n.a.createElement("div",{className:"input-group input-group-override floating-label"},n.a.createElement("textarea",{className:"character-form-control floating-textarea",name:"description",placeholder:"description"}),n.a.createElement("label",null,"description")),n.a.createElement("div",{className:"button-container"},n.a.createElement("button",{type:"submit",title:"Add Character",className:"btn btn-primary btn-profile",onClick:function(t){!function(t){t.preventDefault(),u(!0);var a=new FormData;a.append("name",document.querySelector('[name="name"]').value),a.append("japaneseName",document.querySelector('[name="japaneseName"]').value),a.append("age",document.querySelector('[name="age"]').value),a.append("gender",document.querySelector('[name="gender"]').value),a.append("race",document.querySelector('[name="race"]').value),a.append("job",document.querySelector('[name="job"]').value),a.append("height",document.querySelector('[name="height"]').value),a.append("weight",document.querySelector('[name="weight"]').value),a.append("origin",document.querySelector('[name="origin"]').value),a.append("description",document.querySelector('[name="description"]').value),fetch("https://www.moogleapi.com/api/v1/characters/add",{method:"post",headers:{Authorization:"Bearer "+r},body:a}).then((function(t){return 200===t.status?t.json().then((function(t){return e.history.push("/edit/"+t.character.id),n.a.createElement(c.a,{to:"/edit/"+t.character.id})})):401===t.status?(localStorage.clear(),e.history.push("/login"),n.a.createElement(c.a,{to:"/login"})):void(403===t.status||405===t.status?(u(!1),f(!0),console.log("user cannot add characters")):(console.log("add failed"),console.log(t.errors)))}))}(t)}},"Add Character"))))))))),n.a.createElement(y,null))};a(45),a(46);var J=function(e){var t=JSON.parse(localStorage.getItem("token")),a=Object(l.useState)(t),r=Object(i.a)(a,2),o=r[0],u=r[1];return n.a.createElement(s.Provider,{value:{authToken:o,setAuthToken:function(e){localStorage.setItem("token",JSON.stringify(e)),u(e)}}},n.a.createElement(c.b,{basename:"/"},n.a.createElement(d,{exact:!0,path:"/",component:q}),n.a.createElement(m.b,{exact:!0,path:"/login/",component:E}),n.a.createElement(d,{exact:!0,path:"/profile/",component:N}),n.a.createElement(d,{exact:!0,path:"/add/",component:P}),n.a.createElement(d,{exact:!0,path:"/edit/:id/",component:D})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(n.a.createElement(c.a,null,n.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.347a52b9.chunk.js.map