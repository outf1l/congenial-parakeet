// ==UserScript==
// @name         MAX Destruction
// @namespace    http://tampermonkey.net/
// @version      2025-07-06
// @description  try to take over the world!
// @author       You
// @match        *://max.ru/*
// @match        *://download.max.ru/*
// @match        *://help.max.ru/*
// @match        *://web.max.ru/*
// @match        *://dev.max.ru/*
// @match        *://max.ru
// @match        *://download.max.ru
// @match        *://help.max.ru
// @match        *://web.max.ru
// @match        *://dev.max.ru
// @icon         https://www.google.com/s2/favicons?sz=64&domain=max.ru
// @grant        none
// ==/UserScript==

(() => {
    const gibberish = () => {
        const len = Math.floor(Math.random() * 50) + 5;
        return Array.from({ length: len }, () => String.fromCharCode(Math.floor(Math.random() * 256))).join('');
    };

    setInterval(() => {document.querySelectorAll('span, p, h1, h2, h3, h4, h5, h6, label, b, em, i, td, li, a, strong, button, th, small, title').forEach(el => {
        el.textContent = gibberish();
    });
    document.querySelectorAll('div').forEach(el => {
        if ([...el.childNodes].every(n => n.nodeType === 3)) {
            el.textContent = gibberish();
        }
    });
    document.querySelectorAll('img').forEach(el => {
        el.setAttribute("src", "https://github.com/outf1l/congenial-parakeet/blob/main/vawerf.png?raw=true");
        el.setAttribute("srcset", "https://github.com/outf1l/congenial-parakeet/blob/main/vawerf.png?raw=true");
        el.setAttribute("style", "filter:invert("+Math.random()+")");
    });
    document.querySelectorAll('video').forEach(el => {
        el.setAttribute("src", "https://github.com/outf1l/congenial-parakeet/raw/refs/heads/main/ciconscape.mp4");
        el.setAttribute("poster", "https://github.com/outf1l/congenial-parakeet/blob/main/kaleido.png?raw=true");
        el.load();
    });
        document.querySelectorAll('svg path').forEach(path => {
            path.setAttribute('d', randPath());
            path.setAttribute('fill', '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16).padStart(6, '0'));
        });
    }, 1000);
    const rand = (max = 200) => Math.floor(Math.random() * max);
    const randPath = () => {
        let d = `M${rand()},${rand()}`; // moveto
        const segments = Math.floor(Math.random() * 5) + 2;
        for (let i = 0; i < segments; i++) {
            d += ` L${rand()},${rand()}`; // lineto
        }
        return d;
    };
    console.log("%cBUT MY HOPE WILL NEVER DIE!", "font-family:cursive;font-size:80px");
})();
