function strokeColorReturner(isActive: boolean): string {
    if (!isActive) {
        return "#000000"
    } else {
        return "#7991F5"
    }
}

function styleParser(val: string) {
    const str = val;
    const test =   "{ 'color': '#6b19e6'; 'fontFamily': 'Dela Gothic One'; 'fontSize': '16px'; 'fontStyle': 'normal'; 'fontWeight': '500'; 'lineHeight': '110%'; 'letterSpacing': '1px'}".replaceAll("'", '"').replaceAll(";", ",");

console.log(test)
   

    return JSON.parse(test);
}

export { strokeColorReturner, styleParser };
