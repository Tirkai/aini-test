import classNames from "classnames";
import React, { useState } from "react";
import { createUseStyles } from "react-jss";
import { IAinitoriTheme } from "../../IAinitoriTheme";

type ButtonVariant = "default" | "primary" | "success" | "danger";

interface IButtonProps {
    children: JSX.Element | JSX.Element[] | string | number;
    variant?: ButtonVariant;
}

const useStyles = createUseStyles<IAinitoriTheme>((theme) => ({
    Button: {
        position: "relative",
        height: "32px",
        border: "none",
        borderRadius: "4px",
        outline: "none",
        boxSizing: "border-box",
        padding: "4px 12px",
        background: "none",
        color: "white",
        overflow: "hidden",
        transition: "ease 0.3s",
        "&:hover": {
            cursor: "pointer",
            // background: "rgba(0,0,0,0.2)",
        },
    },
    DefaultVariant: {
        background: theme.colors.default.idle,
        "&:hover": {
            background: theme.colors.default.hover,
        },
    },
    SuccessVariant: {
        background: theme.colors.success.idle,
        "&:hover": {
            background: theme.colors.success.hover,
        },
    },
    PrimaryVariant: {
        background: theme.colors.primary.idle,
        "&:hover": {
            background: theme.colors.primary.hover,
        },
    },
    DangerVariant: {
        background: theme.colors.danger.idle,
        "&:hover": {
            background: theme.colors.danger.hover,
        },
    },
    Reveal: {
        position: "absolute",
        top: 0,
        left: "0%",
        transform: "scale(1)",
        width: "100%",
        height: "100%",
        opacity: 0,
        transition: "ease 5s",
        background: `radial-gradient(
            circle, 
            rgba(0,0,0,0) 0%, 
            rgba(255,255,255,1) 45%, 
            rgba(255,255,255,1) 60%, 
            rgba(0,0,0,0) 100%
        );`,
    },
    ActiveReveal: {
        animation: `$revealFade 0.5s`,
    },
    "@keyframes revealFade": {
        from: {
            opacity: 0,
            transform: "scale(0.1)",
        },
        "50%": {
            opacity: 0.2,
        },
        to: {
            opacity: 0,
            transform: "scale(2)",
        },
    },
}));

export const Button = (props: IButtonProps) => {
    const styles = useStyles();

    const [reveal, setReveal] = useState(false);

    const getVariant = () => {
        if (props.variant) {
            switch (props.variant) {
                case "default":
                    return styles.DefaultVariant;
                case "success":
                    return styles.SuccessVariant;
                case "primary":
                    return styles.PrimaryVariant;
                case "danger":
                    return styles.DangerVariant;
                default:
                    return styles.DefaultVariant;
            }
        } else return styles.DefaultVariant;
    };

    return (
        <button
            className={classNames(styles.Button, getVariant())}
            onClick={() => setReveal(!reveal)}
        >
            <div
                className={classNames(styles.Reveal, {
                    [styles.ActiveReveal]: reveal,
                })}
            ></div>
            {props.children}
        </button>
    );
};
