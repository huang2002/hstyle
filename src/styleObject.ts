export interface StyleClass {
    [property: string]: string;
}

export interface StyleObject {
    [x: string]: StyleClass | {
        [className: string]: StyleClass;
    };
}

export function parseStyleObject(obj: StyleObject) {
    let result = ''
    for (const x in obj) {

        result += x + ' {\n';

        const y = obj[x];
        for (const key in y) {
            const value = y[key];
            if (typeof value === 'string') {
                result += key + ':' + value + ';\n';
            } else {

                result += key + ' {\n';

                for (const property in value) {
                    result += property + ':' + value[property] + ';\n';
                }

                result += '}\n';

            }
        }

        result += '}\n';

    }
    return result;
}
