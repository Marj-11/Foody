window.addEventListener(
    'scroll',
    () => {
        const logo = document.querySelector('.logo');
        let top = window.scrollY;
        const scrollHeight = 2;
        const singlePercent = 1 / scrollHeight;
        const currentOpacity = 2 - singlePercent * top;
        const final = currentOpacity + 140;

        if (top < 150) {
            logo.style.height = `${final}px`;
        } else {
            logo.style.height = `${50}px`;
        }
    },
    false
);