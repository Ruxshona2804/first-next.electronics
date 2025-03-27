import Apple from "./components/Apple";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Popular_products from "./components/Popular_products";


export default function Home() {
  return (
    <div className="">
      <Navbar />
      <Header />
      <Categories />
      <Popular_products />
      <Apple />
      <Footer />
    </div>
  );
}
