import loadingGif from "../../../public/images/loader/animation.gif"
export default function Loader() {
  return (
  <div className="flex justify-center items-center h-screen">
  <img src={loadingGif} alt="Loading..." className="" />
    </div>
  )
}
