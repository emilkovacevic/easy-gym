type Props = {};

const Login = ({}: Props) => {
  return (
    <div className="w-1/2 mx-auto my-4 bg-light-middle dark:bg-dark-middle p-4 rounded-md">
      <h1 className="text-center">Wellcome back</h1>
      <form action="" className="flex flex-col">
        <label htmlFor="email">Email</label>
        <input className="bg-light-surface dark:bg-dark-surface text-white p-2" type="email" name="" id="email" />
        <label htmlFor="password">Password</label>
        <input className="bg-light-surface dark:bg-dark-surface text-white p-2" type="password" name="" id="" />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
};

export default Login;
