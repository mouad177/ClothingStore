import Lottie from "lottie-react";
import email from '/MyLandingPageProjects/ClothingStore/src/assets/email.json'
import Header from "../components/Header";
function Contact() {
  return (
    <>
<Header/>
        {/*Preline */}  
  {/* Contact */}
  <div className="bg-neutral-900" >
    <div className="mt-12 max-w-5xl px-4 xl:px-0 py-10 lg:py-20 mx-auto">
      {/* Title */}
      <div className="max-w-3xl mb-10 lg:mb-14">
        <h2 className="text-white font-extrabold text-2xl md:text-4xl md:leading-tight ">
          Contact us
        </h2>
    
      </div>
      {/* End Title */}
      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 lg:gap-x-16">
        <div className="md:order-2 border-b border-neutral-800 pb-10 mb-10 md:border-b-0 md:pb-0 md:mb-0">
          <form>
            <div className="space-y-4">
              {/* Input */}
              <div className="relative">
                <input
                  type="text" required
                  id="hs-tac-input-name"
                  className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
        focus:pt-6
        focus:pb-2
        [&:not(:placeholder-shown)]:pt-6
        [&:not(:placeholder-shown)]:pb-2
        autofill:pt-6
        autofill:pb-2"
                  placeholder="Name"
                />
                <label
                  htmlFor="hs-tac-input-name"
                  className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
          peer-focus:text-xs
          peer-focus:-translate-y-1.5
          peer-focus:text-neutral-400
          peer-[:not(:placeholder-shown)]:text-xs
          peer-[:not(:placeholder-shown)]:-translate-y-1.5
          peer-[:not(:placeholder-shown)]:text-neutral-400"
                >
                  Name
                </label>
              </div>
              {/* End Input */}
              {/* Input */}
              <div className="relative">
                <input required
                  type="email"
                  id="hs-tac-input-email"
                  className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
        focus:pt-6
        focus:pb-2
        [&:not(:placeholder-shown)]:pt-6
        [&:not(:placeholder-shown)]:pb-2
        autofill:pt-6
        autofill:pb-2"
                  placeholder="Email"
                />
                <label
                  htmlFor="hs-tac-input-email"
                  className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
          peer-focus:text-xs
          peer-focus:-translate-y-1.5
          peer-focus:text-neutral-400
          peer-[:not(:placeholder-shown)]:text-xs
          peer-[:not(:placeholder-shown)]:-translate-y-1.5
          peer-[:not(:placeholder-shown)]:text-neutral-400"
                >
                  Email
                </label>
              </div>
              {/* End Input */}

              {/* Input */}
              <div className="relative">
                <input required
                  type="number"
                  id="hs-tac-input-phone"
                  className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
        focus:pt-6
        focus:pb-2
        [&:not(:placeholder-shown)]:pt-6
        [&:not(:placeholder-shown)]:pb-2
        autofill:pt-6
        autofill:pb-2"
                  placeholder="Phone"
                />
                <label
                  htmlFor="hs-tac-input-phone"
                  className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
          peer-focus:text-xs
          peer-focus:-translate-y-1.5
          peer-focus:text-neutral-400
          peer-[:not(:placeholder-shown)]:text-xs
          peer-[:not(:placeholder-shown)]:-translate-y-1.5
          peer-[:not(:placeholder-shown)]:text-neutral-400"
                >
                  Phone
                </label>
              </div>
              {/* End Input */}
              {/* Textarea */}
              <div className="relative">
                <textarea required
                  id="hs-tac-message"
                  className="peer p-4 block w-full bg-neutral-800 border-transparent rounded-lg text-sm text-white placeholder:text-transparent focus:outline-none focus:ring-0 focus:border-transparent disabled:opacity-50 disabled:pointer-events-none
        focus:pt-6
        focus:pb-2
        [&:not(:placeholder-shown)]:pt-6
        [&:not(:placeholder-shown)]:pb-2
        autofill:pt-6
        autofill:pb-2"
                  placeholder="This is a textarea placeholder"
                  defaultValue={""}
                />
                <label
                  htmlFor="hs-tac-message"
                  className="absolute top-0 start-0 p-4 h-full text-neutral-400 text-sm truncate pointer-events-none transition ease-in-out duration-100 border border-transparent peer-disabled:opacity-50 peer-disabled:pointer-events-none
          peer-focus:text-xs
          peer-focus:-translate-y-1.5
          peer-focus:text-neutral-400
          peer-[:not(:placeholder-shown)]:text-xs
          peer-[:not(:placeholder-shown)]:-translate-y-1.5
          peer-[:not(:placeholder-shown)]:text-neutral-400"
                >
                  Message
                </label>
              </div>
              {/* End Textarea */}
            </div>
            <div className="mt-2">
          
              <p className="mt-5">
          <input type="submit" value='Submit' className="group inline-flex items-center font-bold gap-x-2 py-2 px-3 bg-[#4287ad]  text-sm text-white hover:bg-[#3c64ae] rounded-full focus:outline-none"/>
              </p>
            </div>
          </form>
        </div>
        {/* End Col */}
        <div className="space-y-14">
          {/* Item */}
          <div className="flex gap-x-5">
    
            <div className="grow">
            <Lottie animationData={email} style={{height:500}} className="-translate-y-20"/>;

            </div>
          </div>
          {/* End Item */}
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>
  </div>
  {/* End Contact */}




    </>
  )
}

export default Contact