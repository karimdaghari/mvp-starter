import Head from "next/head";
import Image from "next/image";

export default function Index() {
  return (
    <div>
      <Head>
        <title>MVP</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="flex">
        <h1>MVP</h1>
        <button>CTA</button>
      </header>

      <main>
        <div>
          <h2>Tagline here</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
            vero accusantium repellat? Similique tempore illo praesentium
            corrupti numquam! Id praesentium laboriosam adipisci atque dolor
            perferendis voluptatem deleniti aliquam voluptatum repellat.
          </p>
        </div>
        <div>
          <Image
            src="https://opendoodles.s3-us-west-1.amazonaws.com/selfie.png"
            width={250}
            height={250}
          />
        </div>
      </main>

      <footer>
        <a
          href="https://twitter.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          @username
        </a>
      </footer>
    </div>
  );
}
