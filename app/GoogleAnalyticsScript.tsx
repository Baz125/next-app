import React from "react";
import Script from "next/script";

const GoogleAnalytcisScript = () => {
  return (
    <>
      <Script
        async
        src="https://www.googletagmananger.com/gtag/js?id=G-E720JHXSJ2"
      />
      <Script id="google-analytics">
        {`window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', newDate());

        gtag('config', 'G-E720JHXSJ1');`}
      </Script>
    </>
  );
};

export default GoogleAnalytcisScript;
