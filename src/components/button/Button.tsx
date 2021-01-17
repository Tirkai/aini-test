import classNames from "classnames";
import React from "react";
import { useButtonStyles } from "./Button.styles";

const utilSwitch = (
    source: any,
    data: [a: any, b: any][],
    defaultValue: any = null
) => {
    const item = data.find(([sourceValue]) => {
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

export const Button = (props: IButtonProps) => {
    const styles = useButtonStyles();

    const getApperanceStyle = () =>
        utilSwitch(props.apperance, [
            ["fill", styles.fillApperance],
            ["outline", styles.outlineApperance],
        ]);

    const getVariant = () =>
        utilSwitch(
            props.variant,
            [
                ["default", styles.defaultVariant],
                ["success", styles.successVariant],
                ["primary", styles.primaryVariant],
                ["danger", styles.dangerVariant],
            ],
            styles.DefaultVariant
        );

    return (
        <button
            className={classNames(
                styles.buttonShape,
                styles.buttonBase,
                getVariant(),
                getApperanceStyle()
            )}
            {...props}
        >
            {props.children}
        </button>
    );
};
