import React from "react";
import "./loading.scss";

export default (props: { text?: string }) => (
  <p className="saving">
    {props.text || "Loading"}
    <span>.</span>
    <span>.</span>
    <span>.</span>
  </p>
);
