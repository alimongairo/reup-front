import React, { useRef, useReducer, useLayoutEffect } from 'react'
import { Tooltip, } from "@mui/material";
import cls from 'classnames';
import cx from './index.module.scss';
import './index.scss';
import { intialLabel } from "./initialLabel";

// tooltip который не выходит за границы обертки (помещать в relative блок)

interface IProps {
    className?: string,
    title?: string,
    children?: JSX.Element,
    placement?: "top" | "right" | "bottom" | "left" | "bottom-end" | "bottom-start" | "left-end" | "left-start" | "right-end" | "right-start" | "top-end" | "top-start" | undefined,
}


function MyTooltip({ className, title = "content", children = intialLabel, placement = "bottom-end" }: IProps) {
    const boundingElement = useRef<HTMLDivElement>(null);
    const [, forceUpdate] = useReducer(x => x + 1, 0);

    useLayoutEffect(() => {
        forceUpdate()
    }, [])

    return (
        <div
            ref={boundingElement}
            className={cls(cx.tooltip, className)}
        >
            <Tooltip
                title={title}
                placement={placement}
                PopperProps={{
                    popperOptions: {
                        modifiers: [
                            {
                                name: "preventOverflow",
                                options: {
                                    boundary: boundingElement.current
                                }
                            }
                        ]
                    }
                }}
            >
                {children}
            </Tooltip>
        </div>
    )
}

export { MyTooltip as Tooltip }
