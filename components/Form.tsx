import { useForm } from "react-hook-form";

type FormData = {
  email: string;
  name: string;
};

export default function Form() {
  const { register, handleSubmit } = useForm<FormData>();
  const onSubmit = (data: FormData) => console.log({ data });

  return (
    <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-3">
        <div className="flex flex-col space-y-1 md:w-1/2">
          <label htmlFor="name" className="text-base font-semibold">
            First name
          </label>
          <input
            id="name"
            type="text"
            className="p-2 border rounded-md"
            placeholder="Elon"
            name="name"
            ref={register({ required: true })}
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
            name="email"
            ref={register({ required: true })}
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
