import Navbar from "../components/Navbar";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head></Head>
      <Navbar />
      <Component {...pageProps}></Component>
    </>
  );
}

export default MyApp;
