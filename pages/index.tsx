import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Form from "../components/Form";

export default function Index() {
  return (
    <>
      <Head>
        <title>MVP Starter</title>
      </Head>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-y-0">
        <div className="p-4 space-y-4 text-lg md:p-0 md:px-6 md:pt-40">
          <div>
            <h2 className="text-xl italic font-bold">
              Craft your MVP in under 5 minutes!
            </h2>
            <p className="text-justify">
              MVP starter is a template made for the busy minded maker. You take
              care of the copy, and the template takes care of the rest for you.
              Minus the deployment. It's not a miracle worker 🤷🏻‍♂️
            </p>
          </div>
          <Form />
        </div>
        <div className="flex items-center justify-center order-first md:order-last">
          <Image src="/app.svg" width={600} height={300} />
        </div>
      </main>
    </>
  );
}
