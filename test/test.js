/// <reference types="../" />

const id = id => document.getElementById(id);

id('h1').classList.add(
    HStyle.style`
        & {
            color: blue;
        }
    `
);

id('p').classList.add(
    HStyle.styleObj({
        '&::after': {
            content: '" && ::after"'
        }
    })
);
