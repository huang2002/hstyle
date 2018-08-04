import { replace } from "./replace";

export const styleElementId = 'hstyle-stylesheet';

export const classNamePrefix = 'hstyle-class-';

export let styleElement = document.getElementById(styleElementId);

export let styleCount = 0;

if (styleElement) {
    const regExp = new RegExp('\\.' + classNamePrefix + '\\d+', 'g'),
        match = styleElement.innerHTML.match(regExp);
    if (match) {
        match.forEach(className => {
            styleCount = Math.max(styleCount, +className.split('-')[2]);
        });
        styleCount++;
    }
} else {
    styleElement = document.createElement('style');
    styleElement.id = styleElementId;
    styleElement.setAttribute('type', 'text/css');
    document.head.appendChild(styleElement);
}

export function getClassName() {
    return classNamePrefix + styleCount++;
}

export function addCSS(css: string, className: string) {
    (styleElement as HTMLStyleElement).appendChild(
        document.createTextNode(replace(css, className))
    );
}
