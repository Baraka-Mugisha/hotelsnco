import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Navbar from "../components/navbar";
import Categories from "../components/categories";
import Room from "../components/room";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hotels and Co</title>
      </Head>
      <Navbar />
      <Categories />
      <div
        style={{
          display: "flex",
          gap: "20px",
        }}
        className="px-10 py-5"
      >
        <Room />
        <Room />
        <Room />
        <Room />
      </div>
    </div>
  );
}
