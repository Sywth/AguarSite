import { SignUp } from "@clerk/nextjs";

const SignUpPage = () => {
  return (
    <div className="w-full pt-[8vh] flex justify-center items-center">
      <div className="rotate-[-90deg] text-4xl hover:text-slate-300">
        Sign-Up
      </div>
      <SignUp afterSignInUrl={"/"} />
    </div>
  );
};
export default SignUpPage;
