import Script from "next/script";

//Add Google Analytics
export default function GTag() {
    const googleAnalyticsId = process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS || null;
    
    return (
        <>
        {googleAnalyticsId ? (
          <>
            <Script
              strategy="lazyOnload"
              src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
            />
  
            <Script strategy="lazyOnload">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${googleAnalyticsId}', {
                page_path: window.location.pathname,
                });
              `}
            </Script>
          </>
        ) : null}
      </>
    );
}