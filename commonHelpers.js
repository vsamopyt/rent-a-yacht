import{S as d,N as a}from"./assets/vendor-fd56fbb6.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const r of t.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&c(r)}).observe(document,{childList:!0,subtree:!0});function f(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=f(e);fetch(e.href,t)}})();function w(){new d(".swiper",{breakpoints:{1280:{slidesPerView:3,spaceBetween:32},768:{slidesPerView:2,spaceBetween:32},360:{slidesPerView:1,spaceBetween:16}},modules:[a],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},simulateTouch:!0})}function y(){new d(".swiper",{breakpoints:{1280:{slidesPerView:3,spaceBetween:32},768:{slidesPerView:2,spaceBetween:32},360:{slidesPerView:1,spaceBetween:16}},modules:[a],navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},keyboard:{enabled:!0,onlyInViewport:!1},mousewheel:{invert:!0},simulateTouch:!0})}const u=document.querySelector(".header-button"),p=document.querySelector(".modal-close-btn"),b=document.querySelector("body"),m=document.querySelector(".backdrop"),g=document.querySelectorAll(".modal-item-menu"),l=document.querySelector(".modal-content");let i=!1;console.log(p);console.log(u);const s=()=>{m.classList.toggle("is-open"),b.classList.toggle("is-scroll")},v=o=>{o.key==="Escape"&&s()},L=o=>{!i&&o.target.classList.contains("backdrop")&&s()},E=o=>{o.target.closest(".modal-content")&&(i=!0)},h=()=>{i=!1},k=()=>{g.forEach(o=>{o.addEventListener("click",s)}),u.addEventListener("click",s),p.addEventListener("click",s),document.addEventListener("keydown",v),m.addEventListener("click",L),l.addEventListener("mouseup",h),l.addEventListener("mousedown",E)};w();y();k();
//# sourceMappingURL=commonHelpers.js.map
