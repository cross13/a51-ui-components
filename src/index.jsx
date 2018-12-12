import React from "react";
import ReactDOM from "react-dom";

import DownloadButton from './components/download-button/download-button.tsx';

const Index = () => {
  return <div>Hello React! <DownloadButton /></div>;
};

ReactDOM.render(<Index />, document.getElementById("root"));