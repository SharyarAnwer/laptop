/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-build-pc': "url('./components/HomepageComponents/Custom Builds/CustomBuildPc.svg')",
        'custom-build-pc-tablet': "url('./components/HomepageComponents/Custom Builds/CustomBuildPcTablet.svg')",
        'msi-mobile': "url('./components/HomepageComponents/MSI Laptops/MSILaptop.svg')",
        'msi-tablet': "url('./components/HomepageComponents/MSI Laptops/MSILaptopTabletImage.svg')",
        'desktop-mobile': "url('./components/HomepageComponents/Desktops/desktop-mobile.svg')",
        'desktop-tablet': "url('./components/HomepageComponents/Desktops/desktop-tablet.svg')",
        'gaming-monitors-mobile': "url('./components/HomepageComponents/Gaming Monitors/Gaming-Monitors-Mobile.svg')",
        'gaming-monitors-tablet': "url('./components/HomepageComponents/Gaming Monitors/Gaming-Monitors-Tablet.svg')",
        'tablet-banner': "url('./components/Products-Page-Components/Tablet-Banner/Banner.svg')",
        'desktop-banner-products-page': "url('./components/Products-Page-Components/Tablet-Banner/DesktopBanner.svg')",
        'faq-background-mobile': "url('./components/About-Products/FAQ-sections/FAQ-mobile.svg')",
        'faq-background-tablet': "url('./components/About-Products/FAQ-sections/FAQ-tablet.svg')",
        'faq-background-desktop': "url('./components/About-Products/FAQ-sections/FAQ-desktop.svg')",
      }
    },
  },
  plugins: [],
}

