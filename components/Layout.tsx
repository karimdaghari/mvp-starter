import Link from "next/link";
import Image from "next/image";
import { ReactNode, useState } from "react";
import Modal from "react-modal";
import Form from "./Form";

type Props = {
  children: ReactNode;
};
export default function Layout({ children }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  Modal.setAppElement(".container");

  return (
    <div className="container">
      <Modal
        isOpen={isOpen}
        className="max-w-sm p-6 mx-auto my-32 bg-white border rounded-md shadow-md outline-none"
        overlayClassName="fixed inset-0 bg-gray-900 bg-opacity-25 h-full p-4"
      >
        <div className="flex items-end justify-between mb-4">
          <h1 className="text-xl font-medium">Sign up</h1>
          <button onClick={() => setIsOpen(false)}>
            <Image src="/close.svg" width={22} height={22} />
          </button>
        </div>
        <Form inModal />
      </Modal>
      <header className="flex items-center justify-between">
        <h1 className="text-lg font-semibold border-b-4 border-black">
          <Link href="/">MVP Starter</Link>
        </h1>
        <button
          className="border-2 border-orange-600 hover:text-white hover:bg-orange-600"
          onClick={() => setIsOpen(true)}
        >
          Sign up
        </button>
      </header>

      {children}

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
          href="https://instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image src="/instagram.svg" width={30} height={30} />
        </a>
      </footer>
    </div>
  );
}
