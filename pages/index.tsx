import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import Modal from "react-modal";
import Form from "../components/Form";
import { GetStaticProps, InferGetStaticPropsType } from "next";
import Head from "next/head";

export const getStaticProps: GetStaticProps = async () => {
  const data = (await import("../data")).default;
  return {
    props: {
      data
    }
  };
};

export default function Index({
  data
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const [isOpen, setIsOpen] = useState(false);
  const [hasSubbed, setHasSubbed] = useState(false);

  Modal.setAppElement(".container");

  return (
    <>
      <Head>
        <title>
          {data.name}: {data.tagline}
        </title>
        <meta name="description" content={data.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta property="og:title" content={data.name} />
        <meta property="og:description" content={data.tagline} />
        <meta property="og:image" content={`${data.siteUrl}/social.jpg`} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="container">
        <Modal
          isOpen={isOpen}
          className="max-w-sm p-6 mx-auto my-32 bg-white border rounded-md shadow-md outline-none"
          overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-25 h-full p-4"
        >
          <div className="flex items-end justify-between mb-4">
            <h1 className="text-xl font-medium">Sign up</h1>
            <button className="p-0" onClick={() => setIsOpen(false)}>
              <Image src="/close.svg" width={22} height={22} unoptimized />
            </button>
          </div>
          <Form inModal hasSubbed={hasSubbed} setHasSubbed={setHasSubbed} />
        </Modal>
        <header className="flex items-center justify-between">
          <h1 className="text-lg font-semibold border-b-4 border-black">
            <Link href="/">{data.name}</Link>
          </h1>
          <button
            className="border-2 border-orange-600 hover:text-white hover:bg-orange-600"
            onClick={() => setIsOpen(true)}
          >
            Sign up
          </button>
        </header>

        <main className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-y-0">
          <div className="p-4 space-y-4 text-lg md:p-0 md:px-6 md:pt-40">
            <div>
              <h2 className="text-xl italic font-bold">{data.tagline}</h2>
              <p className="text-justify">{data.description}</p>
            </div>
            <Form hasSubbed={hasSubbed} setHasSubbed={setHasSubbed} />
          </div>
          <div className="flex items-center justify-center order-first md:order-last">
            <Image src={data.media} width={600} height={300} unoptimized />
          </div>
        </main>

        <footer className="flex items-center justify-center p-4 space-x-3 border border-t">
          {data.twitter && (
            <a
              href={"https://twitter.com/" + data.twitter}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/twitter.svg" width={30} height={30} unoptimized />
            </a>
          )}
          {data.facebook && (
            <a
              href={"https://facebook.com/" + data.facebook}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/facebook.svg" width={30} height={30} unoptimized />
            </a>
          )}
          {data.instagram && (
            <a
              href={"https://instagram.com/" + data.instagram}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/instagram.svg" width={30} height={30} unoptimized />
            </a>
          )}
          {!data.instagram && !data.twitter && !data.facebook && (
            <p className="text-sm font-medium text-gray-600">
              {data.name} - {new Date().getFullYear()}
            </p>
          )}
        </footer>
      </div>
    </>
  );
}
