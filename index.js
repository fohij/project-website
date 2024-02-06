const divs = document.querySelectorAll('.projects div');

divs.forEach(div => {
    div.addEventListener('mouseover', () => {
        div.style.transform = 'scale(1.2)';
    });

    div.addEventListener('mouseout', () => {
        div.style.transform = 'scale(1)';
    });
});
