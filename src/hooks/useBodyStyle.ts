import { useState, useEffect } from 'react';

function useBodyStyle(style: { [x: string]: string; }) {

    const [retF, setRerF] = useState<() => void>();

    useEffect(() => {
        let key: string;
        for (key in style) {
            setRerF(() => {
                if (style !== undefined && key !== undefined)
                    window.document.body.style[key as any] = style[key]
            });
        }

        return () => {
            setRerF(() => window.document.body.style[key as any] = "");
        }
        
    }, [style])

    return retF;

}


export default useBodyStyle;
