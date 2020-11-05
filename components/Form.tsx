export default function Form() {
  return (
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
  );
}
