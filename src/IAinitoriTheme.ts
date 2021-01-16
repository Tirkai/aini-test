export interface IThemeColor {
    idle: string;
    hover: string;
}

export interface IAinitoriTheme {
    colors: {
        default: IThemeColor;
        primary: IThemeColor;
        danger: IThemeColor;
        success: IThemeColor;
    };
}
