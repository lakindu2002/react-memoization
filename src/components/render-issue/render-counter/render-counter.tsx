import { FC, Fragment, useRef } from "react";

export const RenderCounter: FC = () => {
    const renderCount = useRef(0);
    return (
        <Fragment>
            <p>
                The component does not do anything, but this is its render count = {renderCount.current++}.
            </p>
        </Fragment>
    )
};