function SignUp() {
  return (
    <div className="container mx-auto min-h-screen">
      <h1 className="text-3xl p-4">Sign Up Page</h1>
      <div className="grid grid-cols-6 grid-rows-6 gap-8 h-80 py-4">
        <form className="grid grid-cols-6 gap-y-2 col-span-3">
          <label htmlFor="email" className="block col-span-6">
            Email
          </label>
          <input type="email" className="col-span-6 rounded-md h-8" />
          <label htmlFor="password" className="block col-span-6">
            Password
          </label>
          <input type="password" className="col-span-6 rounded-md h-8" />
          <button
            type="submit"
            className="rounded bg-gradient-to-r from-blue-500 to-green-400"
          >
            Log In
          </button>
        </form>
        <div className="col-span-3">
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aperiam
            eius aliquam omnis magnam? Veritatis incidunt, soluta delectus ex
            temporibus quae alias recusandae numquam, minima voluptatem,
            repellat explicabo rem expedita maxime.
          </p>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
