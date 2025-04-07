import { Inter } from "@next/font/google";
import { useEffect } from "react";
import "@/styles/global.css";
import type { AppProps } from "next/app";

const inter = Inter({ subsets: ["latin"] });

const App = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    document.querySelector("#__next")?.classList.add(inter.className);
  }, []);
  return <Component {...pageProps} />;
};

export default App;
