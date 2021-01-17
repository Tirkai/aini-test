import { createUseStyles } from "react-jss";
import { IAiniTheme } from "../../IAiniTheme";

export const useGhostBaseStyles = createUseStyles<IAiniTheme>((theme) => ({
    ghostBase: {
        background: theme.colors.ghost.idle,

        animation: "ease 3s $ghostBackgroundPulse infinite",
    },
    "@keyframes ghostBackgroundPulse": {
        from: {
            // background: theme.colors.ghost.idle,
            opacity: 0.5,
        },
        "50%": {
            // background: theme.colors.ghost.pulse,
            opacity: 1,
        },
        to: {
            // background: theme.colors.ghost.idle,
            opacity: 0.5,
        },
    },
}));
