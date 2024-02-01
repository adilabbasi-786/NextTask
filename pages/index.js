import Header from "../components/Header";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Bookmark from "../components/Bookmark";
import ConvertFromPdf from "../components/ConvertFromPdf";
import ConvertToPdf from "../components/ConvertToPdf";
import Footer from "../components/Footer";

const index = () => {
  return (
    <>
      <Head>
        <title>Home Page </title>
        <meta name="description" content="Free Web youtube tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript, next.js" />
        <meta name="author" content="thapa technical" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Header />
      <Navbar />
      <Bookmark />
      <ConvertFromPdf />
      <ConvertToPdf />
      <Footer />
    </>
  );
};

export default index;
