"use client";

import { useState, useEffect } from "react";
import { NextPage, NextPageContext } from "next";
import { getSession, signIn, signOut, useSession } from "next-auth/react";
import AutoComplete from "../../../../components/onboarding/AutoComplete";
import Layout from "../../layout";
import Image from "next/image";
import { useRouter } from "next/navigation";
import hubSparkLogo from "@/assets/images/HubSpark New Logo 5.png";
import { Eye } from "lucide-react";
import { EyeOff } from "lucide-react";
import { useClientMediaQuery } from "../../../../utils/srchooksuseClientMediaQuery";
import DesktopOnboardingBusinessProfile from "../../../onboardingDesktop/trials/business-info/page";
//import Link from 'next/link';
import ProgressBar from "../../layout/progressBar";

const Trials: NextPage = () => {
  const router = useRouter();
  const { data, status } = useSession();
  // const isMobile = useClientMediaQuery("(max-width: 769px)");

  const [showEmailField, setShowEmailField] = useState(false);
  const [showPasswordField, setShowPasswordField] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // useEffect(() => {
  //   if (status === "authenticated" && data) {
  //     console.log("Session data:", data?.session[0]);
  //   }
  //   if (status === "unauthenticated") {
  //     // router.push("/");
  //   }
  // }, [data, status]);

  const onEmailClick = () => {
    setShowEmailField(true);
  };

  const onContinueWithEmail = () => {
    setShowPasswordField(true);
  };

  const onSignIn = async () => {
    // Proceed with signing in using the credentials provider
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    if (res?.ok) {
      console.log("res", res);
      // router.push("/onboarding/trials/profile");
    }
    // if(res)
  };

  return (
    <Layout
      hHeading=""
      Childrens={
        <div className="relative flex justify-center items-center flex-col">
          {data?.user ? (
            <>
              <div className="absolute top-0">
                <ProgressBar count={3} />
              </div>
              <div className="mt-10 w-full">
                <AutoComplete />
              </div>
              <button
                className="text-[16px] md:text-lg font-bold text-white py-[10px] w-[221px] lg:text-[35px]  lg:w-[33  %]  lg:py-5 mt-[17px]  text-center bg-palatinatePurple rounded-2xl lg:rounded-[30px] "
                onClick={() => signOut()}
                style={{ cursor: "pointer" }}>
                Sign Out
              </button>
              <div className="absolute lg:hidden transform bottom-0 translate-y-72">
                <Image src={hubSparkLogo} alt="Hub Spark Logo" />
              </div>
            </>
          ) : (
            <>
              <div className="absolute top-0">
                <ProgressBar count={1} />
              </div>
              <button
                className="text-[16px] font-bold text-white py-[10px] w-[221px] mt-[20%] md:mt-[10%] lg:mt-16 lg:w-[40%]  lg:text-[40px] text-center  bg-palatinatePurple lg:rounded-[35px] enter  rounded-2xl"
                onClick={() => signIn("google")}
                style={{ cursor: "pointer" }}>
                Sign In with Google
              </button>
              <div className="w-full text-center">
                <button
                  className="text-[16px] font-bold text-white py-[10px] w-[221px] lg:w-[40%] lg:text-[40px] text-center mt-[10px] lg:mt-[30px] bg-palatinatePurple rounded-2xl lg:rounded-[35px] enter  "
                  style={{ cursor: "pointer" }}>
                  {" "}
                  Sign In with Apple
                </button>
              </div>
              {!showEmailField && (
                <p
                  className="text-[16px] font-bold text-white py-[10px] w-[221px] lg:w-[40%]  lg:text-[40px] mt-[10px] lg:mt-[30px] text-center bg-palatinatePurple rounded-2xl lg:rounded-[35px] enter  "
                  onClick={onEmailClick}
                  style={{ cursor: "pointer" }}>
                  Continue with Email
                </p>
              )}
              {showEmailField && !showPasswordField && (
                <>
                  <div className="flex flex-col w-full justify-center items-center">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email 1"
                      className="w-[221px] lg:w-[40%] bg-white h-[33px] mt-[13px] lg:mt-[30px] text-[12px] text-darkSilverColor pl-[18px] lg:text-xl py-[10px] lg:py-10 rounded-lg lg:rounded-[35px] outline-none"
                    />
                    <button
                      className="text-[16px] font-bold text-white py-[10px] mt-[10px] w-[221px] lg:w-[40%]  lg:text-[40px]  text-center bg-palatinatePurple rounded-2xl lg:rounded-[35px] enter  "
                      onClick={onContinueWithEmail}
                      style={{ cursor: "pointer" }}>
                      Continue with Email
                    </button>
                  </div>
                  {/*<p>Already have an account? <Link style={{ textDecoration: "none", cursor: 'pointer' }} href="/src/pages/login">Log in</Link></p>*/}
                </>
              )}
              {showEmailField && showPasswordField && (
                <div className="w-full flex  flex-col justify-center items-center">
                  <div className="w-full text-center">
                    <input
                      type="email"
                      value={email}
                      placeholder="Enter your email"
                      disabled
                      className="w-[221px] lg:w-[40%] bg-white h-[33px] mt-[13px] text-[12px] lg:text-lg text-darkSilverColor pl-[18px] py-[10px] lg:py-10 rounded-xl lg:rounded-[35px]"
                    />
                  </div>
                  <div className="w-full flex justify-center text-center">
                    <div className="relative w-[60%] lg:w-[40%]  text-center">
                      <input
                        type={showPassword ? "text" : "password"}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter your password"
                        className="w-[221px] bg-white h-[33px] lg:w-full mt-[6px] text-[12px] lg:text-lg text-darkSilverColor pl-[18px] py-[10px] lg:py-10 rounded-xl lg:rounded-[35px]"
                      />
                      {showPassword ? (
                        <div className="absolute top-1/2 transform -translate-y-1/2 right-4 lg:right-[10%] translate-x-1/2">
                          <Eye
                            color="#606060"
                            onClick={() => setShowPassword((prev) => !prev)}
                          />
                        </div>
                      ) : (
                        <div className="absolute transform -translate-y-1/2 top-1/2  right-4 lg:right-[10%] translate-x-1/2 ">
                          <EyeOff
                            color="#606060"
                            onClick={() => setShowPassword((prev) => !prev)}
                          />
                        </div>
                      )}
                      {/* <button
                      type="button"
                      onClick={() => setShowPassword((prev) => !prev)}
                      className="absolute right-4 top-1/2 transform -translate-y-1/2 text-darkSilverColor">
                      {showPassword ? "Hide" : "Show"}
                    </button> */}
                    </div>
                  </div>

                  <button
                    className="text-[16px] font-bold text-white lg:w-[40%] py-[10px]  lg:text-[40px]  mt-[10px] w-[221px] text-center bg-palatinatePurple rounded-2xl lg:rounded-[35px]"
                    onClick={onSignIn}
                    style={{ cursor: "pointer" }}>
                    Sign In with Email
                  </button>
                  {/*<p>Already have an account? <Link style={{ textDecoration: "none", cursor: 'pointer' }} href="/src/pages/login">Log in</Link></p>*/}
                </div>
              )}
              <div className="felx justify-center mt-12">
                <h5 className="textt-[16px] lg:text-[30px] text-darkSilverColor">
                  Already have an account?
                  <span className="text-palatinatePurple pl-2 lg:text-[30px]">
                    Log in
                  </span>
                </h5>
              </div>
              <div className="lg:hidden fixed bottom-16">
                <Image src={hubSparkLogo} alt="Hub Spark Logo" />
              </div>
            </>
          )}
          {/*{data?.user?.name}*/}
        </div>
      }
    />
  );

  // if (isMobile) {

  // } else return <DesktopOnboardingBusinessProfile />;
};

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}

export default Trials;
