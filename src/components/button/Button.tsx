import classNames from "classnames";
import React, { useContext, useState } from "react";
import { createUseStyles } from "react-jss";
import { IAiniTheme } from "../../IAiniTheme";
import { AiniContext } from "../provider/AiniProvider";

const utilSwitch = (
    source: any,
    data: [a: any, b: any][],
    defaultValue: any = null
) => {
    const item = data.find(([sourceValue, returnalValue]) => {
        return source === sourceValue;
    });

    if (item) {
        const [, result] = item;
        return result;
    }

    return defaultValue;
};

type ButtonVariant = "default" | "primary" | "success" | "danger";

type ButtonApperance = "fill" | "outline";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    children: JSX.Element | JSX.Element[] | string | number;
    variant?: ButtonVariant;
    apperance?: ButtonApperance;
}

const useStyles = createUseStyles<IAiniTheme>(
    (theme) => ({
        Button: {
            position: "relative",
            height: "32px",
            borderWidth: "1px",
            borderStyle: "solid",
            borderColor: theme.colors.default.idle,
            borderRadius: "4px",
            outline: "none",
            boxSizing: "border-box",
            padding: "4px 12px",
            background: theme.colors.default.idle,
            color: "white",
            overflow: "hidden",
            transition: "ease 0.3s",
            "&:hover": {
                cursor: "pointer",
                borderColor: theme.colors.default.idle,
                background: theme.colors.default.hover,
            },
        },
        DefaultVariant: {
            background: theme.colors.default.idle,
            borderColor: theme.colors.default.idle,
            // border: (props: IButtonProps) => props.apperance,
            "&:hover": {
                background: theme.colors.default.hover,
                borderColor: theme.colors.default.hover,
            },
        },
        SuccessVariant: {
            background: theme.colors.success.idle,
            borderColor: theme.colors.success.idle,
            // border: (props: IButtonProps) => props.apperance,
            "&:hover": {
                background: theme.colors.success.hover,
                borderColor: theme.colors.success.hover,
            },
        },
        PrimaryVariant: {
            background: theme.colors.primary.idle,
            borderColor: theme.colors.primary.idle,
            // border: (props: IButtonProps) => props.apperance,
            "&:hover": {
                background: theme.colors.primary.hover,
                borderColor: theme.colors.primary.hover,
            },
        },
        DangerVariant: {
            background: theme.colors.danger.idle,
            borderColor: theme.colors.danger.idle,
            // border: (props: IButtonProps) => props.apperance,
            "&:hover": {
                background: theme.colors.danger.hover,
                borderColor: theme.colors.danger.hover,
            },
        },
        OutlineApperance: {
            background: "none",
            "&:hover": {
                background: "none",
            },
        },
        FillApperance: {
            background: "auto",
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
            background: (props) => `radial-gradient(
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
                transform: "scale(0.5)",
            },
            "10%": {
                opacity: 0.2,
            },
            "50%": {
                opacity: 0.2,
            },
            to: {
                opacity: 0,
                transform: "scale(2)",
            },
        },
    }),
    {
        name: "Button",
    }
);

export const Button = (props: IButtonProps) => {
    const aini = useContext(AiniContext);

    const currentColor = aini.theme?.colors[props.variant ?? "default"];

    const styles = useStyles({ currentColor });

    const getApperanceStyle = () =>
        utilSwitch(props.apperance, [
            ["fill", styles.FillApperance],
            ["outline", styles.OutlineApperance],
        ]);

    console.log(aini.theme);

    const [reveal, setReveal] = useState(false);

    const getVariant = () => {
        return utilSwitch(
            props.variant,
            [
                ["default", styles.DefaultVariant],
                ["success", styles.SuccessVariant],
                ["primary", styles.PrimaryVariant],
                ["danger", styles.DangerVariant],
            ],
            styles.DefaultVariant
        );
    };

    return (
        <button
            className={classNames(
                styles.Button,
                getVariant(),
                getApperanceStyle()
            )}
            {...props}
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
