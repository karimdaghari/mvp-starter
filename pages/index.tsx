import Head from "next/head";
import Image from "next/image";
import Link from "next/link";

export default function Index() {
  return (
    <div className="container">
      <Head>
        <title>MVP Starter</title>
      </Head>

      <header className="flex items-center justify-between">
        <h1 className="text-lg font-semibold">
          <Link href="/">MVP Starter</Link>
        </h1>
        <div className="space-x-3">
          <span className="text-lg text-gray-700 uppercase hover:font-medium hover:text-black">
            <Link href="/why">Why</Link>
          </span>
          <button className="px-6 py-2 font-medium uppercase border-2 border-orange-600 rounded-md hover:text-white hover:bg-orange-600">
            Sign up
          </button>
        </div>
      </header>

      <main className="grid grid-cols-1 md:grid-cols-2 gap-y-5 md:gap-y-0">
        <div className="p-4 space-y-4 text-lg md:p-0 md:px-6 md:pt-40">
          <div>
            <h2 className="text-xl italic font-bold">
              Craft your MVP in under 5 minutes!
            </h2>
            <p className="text-justify">
              MVP starter is a template made for the busy minded maker. You take
              care of the copy, and the template takes care of the rest for you:
              the design, and seo.
            </p>
          </div>
          <div className="space-y-4">
            <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-3">
              <div className="flex flex-col space-y-1 md:w-1/2">
                <label htmlFor="name" className="text-base font-semibold">
                  Your name
                </label>
                <input
                  id="name"
                  type="text"
                  className="p-2 border rounded-md"
                  placeholder="Elon"
                />
              </div>
              <div className="flex flex-col space-y-1 md:w-1/2">
                <label htmlFor="name" className="text-base font-semibold">
                  Your email
                </label>
                <input
                  id="name"
                  type="email"
                  className="p-2 border rounded-md"
                  placeholder="u@me.love"
                />
              </div>
            </div>
            <button className="w-full px-6 py-2 font-medium text-white uppercase bg-orange-500 border-2 border-transparent rounded-md hover:bg-transparent hover:border-orange-500 hover:text-black">
              Sign up
            </button>
          </div>
        </div>
        <div className="flex items-center justify-center order-first md:order-last">
          <Image src="/app.svg" width={600} height={300} />
        </div>
      </main>

      <footer className="flex items-center justify-center p-4 space-x-4 border border-t">
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/twitter.svg" width={30} height={30} />
        </a>
        <a
          href="https://facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/facebook.svg" width={30} height={30} />
        </a>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/instagram.svg" width={30} height={30} />
        </a>
      </footer>
    </div>
  );
}
