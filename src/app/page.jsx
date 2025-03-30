
import Categories from "./components/Categories";
import Navbar from "./components/Navbar";

import Footer from "./components/Footer";
import Apple from "./components/Apple";
import Header from "./components/Header";
import PopularProducts from "./components/Popular_products";



export default function Home() {
  return (
    <div >
      <Navbar />
      <Header />
      <Categories />
      <PopularProducts />
      <Apple />
      <Footer />
    </div>
  );
}
