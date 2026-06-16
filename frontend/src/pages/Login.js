function Login() {
  return (
    <div className="container">
      <h1>Login</h1>

      <form className="login-form">
        <input type="text" placeholder="Enter Username" />
        <input type="password" placeholder="Enter Password" />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;