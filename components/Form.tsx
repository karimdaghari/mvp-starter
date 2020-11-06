import { Controller, useForm } from "react-hook-form";
import Input from "./Input";

type FormData = {
  email: string;
  name: string;
};

export default function Form() {
  const { handleSubmit, control, errors } = useForm<FormData>();
  const onSubmit = (data: FormData) => console.log({ data });

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-3">
        <div className="flex flex-col space-y-1 md:w-1/2">
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
                onBlur={e => onChange(e.target.value)}
                errors={errors.name}
              />
            )}
            defaultValue=""
            rules={{ required: true }}
          />
        </div>
        <div className="flex flex-col space-y-1 md:w-1/2">
          <label htmlFor="name" className="text-base font-semibold">
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
        className="w-full px-6 py-2 font-medium text-white uppercase bg-orange-500 border-2 border-transparent rounded-md hover:bg-transparent hover:border-orange-500 hover:text-black"
        type="submit"
      >
        Sign up
      </button>
    </form>
  );
}
