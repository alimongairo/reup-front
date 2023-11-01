function strokeColorReturner(isActive: boolean): string {
    if (!isActive) {
        return "#000000"
    } else {
        return "#7991F5"
    }
}

import { debounce } from "./debounce";

type TParsedStyle = {
    color?: string,
    fontFamily?: string,
    fontSize?: string,
    fontStyle?: string,
    fontWeight?: string,
    lineHeight?: string,
    letterSpacing?: string,
}

function styleParser(val: string | null) {
    if (val === null) return;
    // const str = val;
    const test = "{ 'color': '#6b19e6'; 'fontFamily': 'Dela Gothic One'; 'fontSize': '16px'; 'fontStyle': 'normal'; 'fontWeight': '500'; 'lineHeight': '110%'; 'letterSpacing': '1px'}".replaceAll("'", '"').replaceAll(";", ",");

    return JSON.parse(test);
}

export { strokeColorReturner, styleParser, debounce };
export type { TParsedStyle }
