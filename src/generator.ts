import { getClassName, addCSS } from "./style";
import { StyleObject, parseStyleObject } from "./styleObject";

export function styleObj(obj: StyleObject) {
    const className = getClassName();
    addCSS(parseStyleObject(obj), className);
    return className;
}

export function style(template: TemplateStringsArray, ...values: any[]) {
    const className = getClassName();
    addCSS(String.raw(template, ...values), className);
    return className;
}
