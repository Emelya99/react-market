"use strict";(self.webpackChunkmarket=self.webpackChunkmarket||[]).push([[97],{3208:function(e,t,n){n.r(t),n.d(t,{default:function(){return D}});var r=n(2791),s=n(8683),i=n(5987),a=n(5671),o=n(3144),l=n(136),c=n(3668),d=(n(3037),n(8688),n(5717)),u=n(184);var h=function(){return(0,u.jsx)("svg",{width:10,height:12,viewBox:"0 0 10 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,u.jsx)("path",{d:"M0.5 5.13399C-0.166667 5.51889 -0.166667 6.48114 0.5 6.86604L8 11.1962C8.66667 11.5811 9.5 11.0999 9.5 10.3301V1.66989C9.5 0.900087 8.66667 0.418962 8 0.803863L0.5 5.13399Z"})})};var m=function(){return(0,u.jsx)("svg",{width:10,height:12,viewBox:"0 0 10 12",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,u.jsx)("path",{d:"M9.5 5.13399C10.1667 5.51889 10.1667 6.48114 9.5 6.86604L2 11.1962C1.33333 11.5811 0.5 11.0999 0.5 10.3301V1.66989C0.5 0.900087 1.33333 0.418962 2 0.803863L9.5 5.13399Z"})})};var p=function(e){return(0,u.jsx)("div",{className:"banner__item",children:(0,u.jsx)("div",{className:"container",children:(0,u.jsxs)("div",{className:"banner__body",children:[(0,u.jsx)("img",{alt:"banner",src:e.bannerUrl}),(0,u.jsx)("p",{className:"title-big",children:e.title})]})})})},x=["currentSlide","slideCount"],g=["currentSlide","slideCount"],b=function(e){(0,l.Z)(n,e);var t=(0,c.Z)(n);function n(e){var r;return(0,a.Z)(this,n),(r=t.call(this,e)).state={slides:[{title:"\u0423 \u0442\u0435\u0431\u044f \u043a \u044d\u0442\u043e\u043c\u0443 \u0442\u0430\u043b\u0430\u043d\u0442",bannerUrl:"/img/banner-1.png"},{title:"\u0423 \u0442\u0435\u0431\u044f \u0432\u0441\u0451 \u043f\u043e\u0434 \u043a\u043e\u043d\u0442\u0440\u043e\u043b\u0435\u043c",bannerUrl:"/img/banner-2.png"}]},r}return(0,o.Z)(n,[{key:"render",value:function(){var e=function(e){var t=e.currentSlide,n=(e.slideCount,(0,i.Z)(e,x));return(0,u.jsx)("div",{className:"arrow__wrapper",children:(0,u.jsx)("button",(0,s.Z)((0,s.Z)({},n),{},{className:"prev arrow"+(0===t?" disabled":""),"aria-hidden":"true","aria-disabled":0===t,type:"button",children:(0,u.jsx)(h,{})}))})},t=function(e){var t=e.currentSlide,n=e.slideCount,r=(0,i.Z)(e,g);return(0,u.jsx)("div",{className:"arrow__wrapper",children:(0,u.jsx)("button",(0,s.Z)((0,s.Z)({},r),{},{className:"next arrow"+(t===n-1?" disabled":""),"aria-hidden":"true","aria-disabled":t===n-1,type:"button",children:(0,u.jsx)(m,{})}))})},n={infinite:!1,speed:600,slidesToShow:1,slidesToScroll:1,prevArrow:(0,u.jsx)(e,{}),nextArrow:(0,u.jsx)(t,{}),responsive:[{breakpoint:767,settings:{infinite:!0}}]};return(0,u.jsxs)("section",{className:"banner sec-bottom",children:[(0,u.jsx)(d.Z,(0,s.Z)((0,s.Z)({},n),{},{children:this.state.slides.map((function(e,t){return(0,u.jsx)(p,{title:e.title,bannerUrl:e.bannerUrl},t)}))})),(0,u.jsx)("div",{className:"container",children:(0,u.jsx)("div",{className:"banner__wrapper",children:(0,u.jsx)("span",{})})})]})}}]),n}(r.Component),v=n(885),j=n(3898);var f=function(e){return(0,u.jsxs)("div",{className:"work__item",children:[(0,u.jsx)("span",{children:e.badge}),(0,u.jsx)("img",{src:e.workUrl,alt:e.badge}),(0,u.jsx)("p",{children:e.text})]},e.badge)},w=["currentSlide","slideCount"],Z=["currentSlide","slideCount"];var I=function(){var e=r.useState([]),t=(0,v.Z)(e,2),n=t[0],a=t[1];r.useEffect((function(){fetch("https://625187db2dc339451d2ef136.mockapi.io/workItems").then((function(e){return e.json()})).then((function(e){a(e)}))}),[]);var o=function(e){var t=e.currentSlide,n=(e.slideCount,(0,i.Z)(e,w));return(0,u.jsx)("button",(0,s.Z)((0,s.Z)({},n),{},{className:"prev arrow"+(0===t?" disabled":""),"aria-hidden":"true","aria-disabled":0===t,type:"button",children:(0,u.jsx)(h,{})}))},l=function(e){var t=e.currentSlide,n=e.slideCount,r=(0,i.Z)(e,Z);return(0,u.jsx)("button",(0,s.Z)((0,s.Z)({},r),{},{className:"next arrow"+(t+2===n-1?" disabled":""),"aria-hidden":"true","aria-disabled":t+2===n-1,type:"button",children:(0,u.jsx)(m,{})}))},c={infinite:!1,speed:600,slidesToShow:1,slidesToScroll:1,variableWidth:!0,prevArrow:(0,u.jsx)(o,{}),nextArrow:(0,u.jsx)(l,{}),draggable:!1,responsive:[{breakpoint:861,settings:{draggable:!0}},{breakpoint:376,settings:{infinite:!0,variableWidth:!1,centerMode:!0,draggable:!0}}]};return(0,u.jsx)("section",{className:"work sec-bottom",children:(0,u.jsxs)("div",{className:"container",children:[(0,u.jsx)(j.Z,{title:"\u0432\u0430\u043a\u0430\u043d\u0441\u0438\u0438 \u0432 \u0433\u0440\u043e\u0441\u0441 \u043c\u0430\u0440\u043a\u0435\u0442\u0435"}),(0,u.jsx)(d.Z,(0,s.Z)((0,s.Z)({},c),{},{children:n.map((function(e){return(0,u.jsx)(f,{badge:e.badge,workUrl:e.workUrl,alt:e.badge,text:e.text},e.badge)}))}))]})})},N={wrapper:"Instagram_wrapper__q-2hf",btn:"Instagram_btn__ByBi6",hidden:"Instagram_hidden__QGHh4",item:"Instagram_item__4RsUk"};var _=function(e){return(0,u.jsx)("div",{className:N.item,children:(0,u.jsx)("img",{src:e.imgUrl,alt:e.alt})})},k=function(e){(0,l.Z)(n,e);var t=(0,c.Z)(n);function n(){var e;(0,a.Z)(this,n);for(var r=arguments.length,s=new Array(r),i=0;i<r;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).loadMorePhoto=function(t){e.props.loadMoreInstagram(t)},e}return(0,o.Z)(n,[{key:"componentDidMount",value:function(){this.props.getInstagramItems(this.props.previewPhoto)}},{key:"componentWillUnmount",value:function(){this.props.deleteInstagramItems()}},{key:"render",value:function(){var e=this,t=this.props.instagramItems.map((function(e,t){return(0,u.jsx)(_,{imgUrl:e.imgUrl,alt:e.alt},t)})),n=this.props.currentPhoto;return(0,u.jsx)("section",{className:"".concat(N.instagram," sec-bottom"),children:(0,u.jsxs)("div",{className:"container",children:[(0,u.jsx)(j.Z,{title:"\u043c\u044b \u0432 \u0438\u043d\u0441\u0442\u0430\u0433\u0440\u0430\u043c\u0435"}),(0,u.jsx)("div",{className:N.wrapper,children:t}),this.props.isButtonActive?null:(0,u.jsx)("button",{className:N.btn,disabled:this.props.isLoadMoreDisabled,onClick:function(){e.loadMorePhoto(n)},children:"\u043f\u043e\u043a\u0430\u0437\u0430\u0442\u044c \u0435\u0449\u0451"})]})})}}]),n}(r.Component),C=k,y=n(1831),S=function(e){return e.sectionInstagram.instagramItems},U=function(e){return e.sectionInstagram.previewPhoto},M=function(e){return e.sectionInstagram.currentPhoto},A=function(e){return e.sectionInstagram.isButtonActive},B=function(e){return e.sectionInstagram.isLoadMoreDisabled},P=(0,n(8687).$j)((function(e){return{instagramItems:S(e),previewPhoto:U(e),currentPhoto:M(e),isButtonActive:A(e),isLoadMoreDisabled:B(e)}}),{getInstagramItems:y.JE,loadMoreInstagram:y.Vo,deleteInstagramItems:y.wo})(C);console.log("AIzaSyBs4gl97q0--W9um-atMaflaFU19yektqM");var L=function(){return(0,u.jsx)("section",{className:"geography sec-bottom",children:(0,u.jsx)("div",{className:"container",children:(0,u.jsx)(j.Z,{title:"\u0433\u0435\u043e\u0433\u0440\u0430\u0444\u0438\u044f"})})})};var D=function(){return(0,u.jsxs)(r.Fragment,{children:[(0,u.jsx)(b,{}),(0,u.jsx)(I,{}),(0,u.jsx)(P,{}),(0,u.jsx)(L,{})]})}},3898:function(e,t,n){var r=n(184);t.Z=function(e){return(0,r.jsx)("h2",{className:"title mb-30",children:e.title})}}}]);
//# sourceMappingURL=97.2b6f27f2.chunk.js.map