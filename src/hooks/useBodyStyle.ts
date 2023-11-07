function useBodyStyle() {

    return function (style: { [x: string]: string; }) {
        let key: string;
        for (key in style) {
            return window.document.body.style[key as any] = style[key]

        }
    }

}


export default useBodyStyle;
