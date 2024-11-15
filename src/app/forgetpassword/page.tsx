import Image from "next/image";
import GroupImg from "@/assets/images/hubspark/Group.png";

export default function Page() {
  return (
    <div className="flex flex-col h-screen bg-[#F4F4F4]">
      <div className="flex justify-end">
        <Image alt="GroupImage" src={GroupImg} width={178} height={133} />
      </div>
      <div>
        <div className="container flex flex-col mx-auto rounded-lg pt-12 my-5">
          <div className="flex justify-center w-full h-full my-auto xl:gap-14 lg:justify-normal md:gap-5 draggable">
            <div className="flex items-center justify-center w-full lg:p-12">
              <div className="flex items-center w-[80%] md:w-[33%]">
                <div className="flex flex-col w-full h-full pb-6 text-center rounded-3xl">
                  <h3 className="mb-3 text-2xl font-semibold text-dark-grey-900  text-start text-[#631363] ">
                    Forget your Password?
                  </h3>
                  <p className="mb-4 text-start text-[#606060]">
                    Confirm your email and we will send you a link.
                  </p>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="flex items-center w-full px-5 py-4 mr-2 bg-[#E0E0E0] text-sm font-medium outline-none focus:bg-grey-400 mb-7 placeholder:text-grey-700 bg-grey-200 text-dark-grey-900 rounded-2xl"
                  />

                  <div className="flex justify-center">
                    <button className="w-[50%] md:w-36 px-4 py-3 mb-2 text-sm font-bold leading-none  transition duration-300  rounded-xl hover:bg-purple-blue-600 focus:ring-4 focus:ring-purple-blue-100 bg-purple-blue-500 text-[#27272D] bg-[#40F440]">
                      Send me a link
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
