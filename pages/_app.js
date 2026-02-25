import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <div style={{ overflowX: "hidden" }}>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;