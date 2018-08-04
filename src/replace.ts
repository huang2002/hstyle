export const replaceSymbol = '&';

export function replace(raw: string, className: string) {
    className = '.' + className;
    let flag = false;
    return raw.split('').map(char => {
        if (flag) {
            flag = false;
            return char === replaceSymbol ? char : (className + char);
        } else {
            if (char === replaceSymbol) {
                flag = true;
                return '';
            } else {
                return char;
            }
        }
    }).join('');
}
