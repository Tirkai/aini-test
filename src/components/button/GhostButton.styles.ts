import { createUseStyles } from "react-jss";
import { IAiniTheme } from "../../IAiniTheme";

export const useGhostButtonStyles = createUseStyles<IAiniTheme>({
    ghostButtonBase: {
        background: "red",
    },
});
