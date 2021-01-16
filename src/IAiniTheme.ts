export interface IThemeColor {
    idle: string;
    hover: string;
}

export interface IAiniTheme {
    colors: {
        default: IThemeColor;
        primary: IThemeColor;
        danger: IThemeColor;
        success: IThemeColor;
    };
}
