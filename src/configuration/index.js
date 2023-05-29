import React from "react";

const observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: '0px 0px 0px 0px'
};

export const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);


export function Fade() {
    
    React.useEffect(()=> {
        window.scrollTo(0,0)
        const fades = document.querySelectorAll('.fade-up');
        const textFade = document.querySelector('.fade-up-delay')
        const textProfileFade = document.querySelectorAll('.fade-profile-text')
        for (let fade of fades) {
            observer.observe(fade);
            observer.observe(textFade)
            for(let text of textProfileFade){
                observer.observe(text)
            }
        }

    },[])
}


