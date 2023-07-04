import { type AppType } from "next/dist/shared/lib/utils";
import "@/styles/globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "@/components/ui/toaster";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <Component {...pageProps} />
      <Toaster />
    </ThemeProvider>
  );
};

export default MyApp;
