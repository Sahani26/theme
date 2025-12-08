import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Theme",
  description: "Erepair HTML 5 Template",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicons */}
        <link rel="apple-touch-icon" sizes="180x180" href="/assets/images/favicons/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/assets/images/favicons/power.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/assets/images/favicons/power.png" />
        <link rel="manifest" href="/assets/images/favicons/site.webmanifest" />

        {/* Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Archivo:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Titillium+Web:ital,wght@0,200;0,300;0,400;0,600;0,700;0,900;1,200;1,300;1,400;1,600;1,700&display=swap"
          rel="stylesheet"
        />

        {/* Core CSS */}
        <link rel="stylesheet" href="/assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="/assets/css/animate.min.css" />
        <link rel="stylesheet" href="/assets/css/custom-animate.css" />
        <link rel="stylesheet" href="/assets/css/swiper.min.css" />
        <link rel="stylesheet" href="/assets/css/font-awesome-all.css" />
        <link rel="stylesheet" href="/assets/css/jarallax.css" />
        <link rel="stylesheet" href="/assets/css/jquery.magnific-popup.css" />
        <link rel="stylesheet" href="/assets/css/odometer.min.css" />
        <link rel="stylesheet" href="/assets/css/flaticon.css" />
        <link rel="stylesheet" href="/assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="/assets/css/owl.theme.default.min.css" />
        <link rel="stylesheet" href="/assets/css/nice-select.css" />
        <link rel="stylesheet" href="/assets/css/jquery-ui.css" />
        <link rel="stylesheet" href="/assets/css/twentytwenty.css" />
        <link rel="stylesheet" href="/assets/css/mycustom.css" />

        {/* Module CSS */}
        <link rel="stylesheet" href="/assets/css/module-css/slider.css" />
        <link rel="stylesheet" href="/assets/css/module-css/footer.css" />
        <link rel="stylesheet" href="/assets/css/module-css/service.css" />
        <link rel="stylesheet" href="/assets/css/module-css/about.css" />
        <link rel="stylesheet" href="/assets/css/module-css/testimonial.css" />
        <link rel="stylesheet" href="/assets/css/module-css/brand.css" />
        <link rel="stylesheet" href="/assets/css/module-css/video.css" />
        <link rel="stylesheet" href="/assets/css/module-css/counter.css" />
        <link rel="stylesheet" href="/assets/css/module-css/project.css" />
        <link rel="stylesheet" href="/assets/css/module-css/pricing.css" />
        <link rel="stylesheet" href="/assets/css/module-css/blog.css" />
        <link rel="stylesheet" href="/assets/css/module-css/cta.css" />
        <link rel="stylesheet" href="/assets/css/module-css/page-header.css" />
        <link rel="stylesheet" href="/assets/css/module-css/team.css" />
        <link rel="stylesheet" href="/assets/css/module-css/contact.css" />
        <link rel="stylesheet" href="/assets/css/module-css/shop.css" />
        <link rel="stylesheet" href="/assets/css/module-css/faq.css" />
        <link rel="stylesheet" href="/assets/css/module-css/coming-soon.css" />
        <link rel="stylesheet" href="/assets/css/module-css/error-page.css" />

        {/* Template Styles */}
        <link rel="stylesheet" href="/assets/css/style.css" />
        <link rel="stylesheet" href="/assets/css/responsive.css" />
      </head>

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        {children}

   
        {/* <Script src="/assets/js/jquery-3.6.0.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/bootstrap.bundle.min.js" strategy="afterInteractive" />

  
        <Script src="/assets/js/jarallax.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.ajaxchimp.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.appear.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/swiper.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.circle-progress.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.magnific-popup.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.validate.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/odometer.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/wNumb.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/wow.js" strategy="afterInteractive" />
        <Script src="/assets/js/isotope.js" strategy="afterInteractive" />
        <Script src="/assets/js/owl.carousel.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery-ui.js" strategy="afterInteractive" />
        <Script src="/assets/js/jquery.nice-select.min.js" strategy="afterInteractive" />
        <Script src="/assets/js/countdown.min.js" strategy="afterInteractive" />

     
        <Script src="/assets/js/gsap/gsap.js" strategy="afterInteractive" />
        <Script src="/assets/js/gsap/ScrollTrigger.js" strategy="afterInteractive" />
        <Script src="/assets/js/gsap/SplitText.js" strategy="afterInteractive" />

        <Script src="/assets/js/script.js" strategy="afterInteractive" /> */}

      </body>
    </html>
  );
}
