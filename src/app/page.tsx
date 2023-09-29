import Image from "next/image"
import Button from "./components/Button/Button"

export default function Home() {
  return (

    <div className="relative w-screen h-screen">
      <Image
        src="/main-background.jpeg"
        alt="Background"
        fill
        priority
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute top-0 w-full h-full flex items-center sm:block">
        <div className="w-full lg:px-40 lg:py-44 sm:px-32 sm:py-36 px-2">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl text-white font-bold">
            <span className="font-loader flex flex-col space-y-2 sm:space-y-4">
              <span>
                Transfroming Visions into
              </span>
              <span className="font-loader text-primary-blue bg-slate-900 bg-opacity-50">
                Digital Reality
              </span>
            </span>
          </h1>
          <h2 className="font-loader text-md lg:text-xl text-primary mt-4">
            <span>We Craft Software Solutions Tailored to Your Dreams</span>
          </h2>
          <form className="font-loader mt-4 flex flex-col sm:flex-row gap-4 sm:items-center">
            <input
              className="sm:w-80 bg-secondary bg-opacity-50 p-4 focus:outline-none rounded-sm
                placeholder-black placeholder-opacity-50 focus:bg-opacity-100 hover:bg-opacity-100
                transition-colors
                "
              type="email"
              required
              placeholder="Enter your email"
            />
            <Button 
              type="submit"
              text="Get Started"
              className="flex-1 sm:flex-none"
            />
          </form>
        </div>
      </div>
      <a
        className="absolute bottom-0 right-0 text-white text-sm p-4"
        href="https://www.freepik.com/free-photo/team-work-process-young-business-managers-crew-working-with-new-startup-project-labtop-wood-table-typing-keyboard-texting-message-analyze-graph-plans_1131477.htm#query=business%20consultant&position=3&from_view=search&track=ais">
        Image by tirachard on Freepik
      </a>
    </div>
  )
}
