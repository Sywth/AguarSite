import { SignIn } from "@clerk/nextjs";

const SignInPage = () => {
  return (
    <div className="w-full pt-[8vh] flex justify-center items-center">
      <div className="rotate-[-90deg] text-4xl hover:text-slate-300">
        Sign-In
      </div>
      <SignIn afterSignInUrl={"/"} />
    </div>
  );
};
export default SignInPage;
