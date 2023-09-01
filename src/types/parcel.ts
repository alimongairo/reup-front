declare module '*.module.scss' {
    const classes: Record<string, string>;
    export default classes;
}

declare module '*.svg' {
    import React = require('react')
    export const iconReactComponent: React.FC<React.SVGProps<SVGSVGElement>>
    const src: string
    export default src
}
