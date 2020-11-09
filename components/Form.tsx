import { Controller, useForm } from "react-hook-form";
import Input from "./Input";
import cn from "classnames";
import { useState } from "react";
import Image from "next/image";

type FormData = {
  email: string;
  name: string;
};

type Props = {
  inModal?: boolean;
  hasSubbed: boolean;
  setHasSubbed: (newState: boolean) => void;
};

export default function Form({ inModal, hasSubbed, setHasSubbed }: Props) {
  const { handleSubmit, control, errors } = useForm<FormData>();

  const encode = data => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const onSubmit = async (data: FormData) => {
    await fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "sign-up", ...data })
    })
      .then(() => setHasSubbed(true))
      .catch(error => alert(error));
  };

  return (
    <>
      {hasSubbed ? (
        <div className="flex flex-col items-center justify-center">
          <Image src="/check.svg" width={48} height={48} unoptimized />
          <span className="text-xl font-medium">Thanks for subscribing!</span>
        </div>
      ) : (
        <form
          name="sign-up"
          className="space-y-4"
          onSubmit={handleSubmit(onSubmit)}
          data-netlify="true"
        >
          <div
            className={cn({
              "flex flex-col space-y-4": true,
              "md:flex-row md:space-y-0 md:space-x-3": !inModal
            })}
          >
            <div
              className={cn({
                "flex flex-col space-y-1": true,
                "md:w-1/2": !inModal
              })}
            >
              <label htmlFor="name" className="text-base font-semibold">
                First name
              </label>
              <Controller
                name="name"
                control={control}
                render={({ onChange }) => (
                  <Input
                    id="name"
                    type="text"
                    placeholder="Elon"
                    onChange={({ target: { value } }) => onChange(value)}
                    errors={errors.name}
                    name="name"
                  />
                )}
                defaultValue=""
                rules={{ required: true }}
              />
            </div>
            <div
              className={cn({
                "flex flex-col space-y-1": true,
                "md:w-1/2": !inModal
              })}
            >
              <label htmlFor="email" className="text-base font-semibold">
                Your email
              </label>
              <Controller
                name="email"
                control={control}
                render={({ onChange }) => (
                  <Input
                    id="email"
                    type="email"
                    placeholder="u@me.com"
                    onChange={({ target: { value } }) => onChange(value)}
                    errors={errors.email}
                    name="email"
                  />
                )}
                defaultValue=""
                rules={{ required: true }}
              />
            </div>
          </div>
          <button
            className="w-full text-white uppercase bg-orange-500 border-2 border-transparent rounded-md hover:bg-transparent hover:border-orange-500 hover:text-black"
            type="submit"
          >
            Sign up
          </button>
        </form>
      )}
    </>
  );
}
