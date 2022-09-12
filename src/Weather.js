import React from "react";
import { Audio } from "react-loader-spinner";

export default function Weather() {
  return (
    <Audio
      // eslint-disable-next-line
      height="80"
      width="80"
      radius="9"
      color="green"
      ariaLabel="loading"
      wrapperStyle
      wrapperClass
    />
  );
}
