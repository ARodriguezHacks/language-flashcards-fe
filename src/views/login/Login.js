function Login() {
  return (
    <div className="grid grid-rows-6 gap-2 h-80">
      <form className="container mx-auto">
        <label htmlFor="email">Email</label>
        <input type="email" />
        <label htmlFor="password">Password</label>
        <input type="password" />
      </form>
    </div>
  );
}

{
  /* <div className="container mx-auto">
  <h1>Flashcards Landing Page</h1>
  <div className="grid grid-cols-4 grid-rows-6 gap-2 h-80"></div>
</div>; */
}

export default Login;
