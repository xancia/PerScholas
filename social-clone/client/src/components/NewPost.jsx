import { Icon } from "@iconify/react"

const NewPost = () => {
  return (
    <div className="bg-slate-300">
        <div className="flex flex-col mx-8 my-4 bg-white">
            <div className="bg-green-200 p-4">
                <div className="flex items-center">
                    <img src="" alt="" className="w-10 bg-white h-10 ml-4"/>
                    <p className="pl-4">Name</p>
                </div>
            </div>
            <div className="h-36 w-full p-8" >
                <input className="border-b-2 h-16 w-full placeholder:italic" placeholder="Post your favorite historical figure"/>
                <Icon className="mt-4 text-xl" icon="material-symbols:android-camera"/>
            </div>
            <div className="bg-green-200 p-4">
                <button className="rounded-sm bg-slate-400 h-10 w-24 text-xl text-slate-500">Post</button>
            </div>
        </div>
    </div>
  )
}

export default NewPost