import React from "react";
import "./loading.scss";

const Loading = (props: { text?: string|null }) => (
  <div className="saving">
    {props.text && "Loading"}
    <span>.</span>
    <span>.</span>
    <span>.</span>
  </div>
);

export default Loading;

export const DotsLoading = () => <Loading text={null}/>;
