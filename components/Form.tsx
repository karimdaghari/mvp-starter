import { Controller, useForm } from "react-hook-form";
import Input from "./Input";
import cn from "classnames";

type FormData = {
  email: string;
  name: string;
};

type Props = {
  inModal?: boolean;
};

export default function Form({ inModal }: Props) {
  const { handleSubmit, control, errors } = useForm<FormData>();
  const onSubmit = (data: FormData) => console.log({ data });

  return (
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
            First name *
          </label>
          <Controller
            name="name"
            control={control}
            render={({ onChange }) => (
              <Input
                id="name"
                type="text"
                placeholder="Elon"
                onBlur={e => onChange(e.target.value)}
                errors={errors.name}
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
          <label htmlFor="name" className="text-base font-semibold">
            Your email *
          </label>
          <Controller
            name="email"
            control={control}
            render={({ onChange }) => (
              <Input
                id="email"
                type="email"
                placeholder="u@me.com"
                onBlur={e => onChange(e.target.value)}
                errors={errors.email}
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
  );
}
