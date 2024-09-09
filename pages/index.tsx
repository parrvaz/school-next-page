import Image from "next/image";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      {" "}
      <div className="flex  flex-col w-full md:flex-row gap-4">
        <img src="bg.jpeg" />
      </div>
      <div className="flex justify-center items-center mx-auto max-w-screen-xl">
        <Link
          href="/auth/register"
          className="bg-green-300 btn hover:bg-green-400 w-full md:w-1/6 md:ml-10"
        >
          ثبت نام
        </Link>
        <Link
          href="/auth/login"
          className="btn bg-green-300 hover:bg-green-400 w-full md:w-1/6 md:ml-10"
        >
          ورود
        </Link>
      </div>
    </>

    // <main
    //   className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    // >
    // </main>
  );
}
