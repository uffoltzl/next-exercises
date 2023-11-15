import React from "react";
import ToastProvider from "../../../components/ToastProvider/ToastProvider";
import ToastShelf from "../../../components/ToastShelf/ToastShelf";

import "./styles.css";

function FlashMsgLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ToastProvider>
          {children}
          <ToastShelf />
        </ToastProvider>
      </body>
    </html>
  );
}

export default FlashMsgLayout;
