export interface IThemeColor {
    idle: string;
    hover: string;
}

export interface IGhostColor {
    idle: string;
    pulse: string;
}

export interface IAiniTheme {
    colors: {
        default: IThemeColor;
        primary: IThemeColor;
        danger: IThemeColor;
        success: IThemeColor;

        ghost: IGhostColor;
    };
}
