import WhatsappButton from "@/components/atoms/WhatsappButton";
import type { Metadata } from "next";
import "./globals.css";
import ThemeProvider from "./materialTheme";
import { GoogleTagManager } from "@next/third-parties/google";
import Script from "next/script";

export const metadata: Metadata = {
  title: "MUG Filmes",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Script
          id="fb-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '404716565374311');
            fbq('track', 'PageView');`,
          }}
        />
        <ThemeProvider>
          <WhatsappButton />
          {children}
        </ThemeProvider>
      </body>
      <GoogleTagManager gtmId="GTM-NST3RNSF" />
    </html>
  );
}
