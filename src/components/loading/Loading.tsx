import React from "react";
import { makeStyles } from "@material-ui/core";

const loadingStyle = makeStyles(theme => ({
  "@keyframes blink": {
    "0%": {
      opacity: 0.2
    },
    "20%": {
      opacity: 1
    },
    "100%": {
      opacity: 0.2
    }
  },
  loading: {
    "& span": {
      fontWeight: theme.typography.fontWeightBold,
      animationName: "$blink",
      animationDuration: "1.4s",
      animationIterationCount: "infinite",
      animationFillMode: "both",
      "&:nth-child(2)": {
        animationDelay: "0.2s"
      },
      "&:nth-child(3)": {
        animationDelay: "0.4s"
      }
    }
  }
}));

const Loading = (props: { text?: string | null }) => {
  const classes = loadingStyle();
  return (
  <div className={classes.loading}>
    {props.text || "Loading"}
    <span>.</span>
    <span>.</span>
    <span>.</span>
  </div>
)};

export default Loading;

export const DotsLoading = () => <Loading text={" "}/>;
