import classNames from "classnames";
import React from "react";
import { useGhostBaseStyles } from "../../styles/shared/GhostBase.styles";
import { useButtonStyles } from "./Button.styles";

export const GhostButton = () => {
    const buttonStyles = useButtonStyles();
    const ghostBaseStyles = useGhostBaseStyles();
    return (
        <div
            className={classNames(
                buttonStyles.buttonShape,
                ghostBaseStyles.ghostBase
            )}
        ></div>
    );
};
