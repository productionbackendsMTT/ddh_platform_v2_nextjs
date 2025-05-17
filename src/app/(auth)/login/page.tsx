import LoginForm from "@/components/layout/loginForm";
import Image from "next/image";

const Login = () => {
  return (
    <main
    className="flex w-full portrait:py-[1vh] portrait:px-[2vh] landscape:py-[2vw] landscape:px-[4vw] min-h-screen items-center justify-center bg-cover bg-center bg-no-repeat
    portrait:bg-[url('/assets/images/mobile-login-bg.png')] landscape:bg-[url('/assets/images/login-bg.png')]"
  >
      <Image src="/assets/images/Logo.png"  alt="login_logo" height={1000} width={1000} quality={100} priority className="absolute portrait:top-[8vh] landscape:top-0  left-[50%] translate-x-[-50%] portrait:w-[32vh] landscape:w-[26vw]"/>
      <div className=" flex h-auto portrait:justify-center landscape:justify-start w-full">
        <div className="portrait:w-[90%] landscape:w-[36%] h-auto">
          <LoginForm/>
        </div>
      </div>
      
    </main>
  );
};

export default Login;
