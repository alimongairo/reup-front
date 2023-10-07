function strokeColorReturner(isActive:boolean):string {
    if(!isActive){
        return "#000000"
    } else {
        return "#7991F5"
    }
}

import { debounce } from "./debounce";
export {strokeColorReturner, debounce};
