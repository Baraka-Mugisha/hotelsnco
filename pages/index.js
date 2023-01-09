import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Navbar from "../components/navbar";
import Categories from "../components/categories";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return <div>
    <Navbar />
    <Categories />
  </div>
}
