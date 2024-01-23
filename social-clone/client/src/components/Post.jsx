/* eslint-disable react/prop-types */
import { Icon } from "@iconify/react";


const Post = ({post}) => {
  return (
    <div>
      <div className="border-slate-400 border-b-2">
      <div className="bg-slate-300 p-4">
                <div className="flex items-center">
                    <img src="" alt="" className="w-10 bg-white h-10 ml-4"/>
                    <p className="pl-4">Name</p>
                </div>
            </div>
            <div className="h-20 w-full p-4" >
                <p>{post.body}</p>
            </div>
            <div className="bg-slate-300 p-4 flex items-center">
                <Icon className="text-orange-400 text-xl" icon="material-symbols:favorite"/> 
                <p className="px-2">{post.likes}</p>
                <Icon className="text-orange-400 text-xl" icon="material-symbols:chat"/>
                <p className="px-2">{post.comments.length}</p>
            </div>
      </div>
      <div className="bg-slate-300">
        <div className="flex items-center p-4">
            <img src="" alt="" className="w-10 bg-white h-10"/>
            <input className="bg-slate-300 border-b-[1px] border-black w-full ml-4" placeholder="Comment..."/>
        </div>
        <div className="flex">
            {post.comments.map((comment, index) => (
                <div className="w-full flex items-center" key={index}>
                    <img src="" alt="" className="w-10 bg-white h-10 ml-4"/>
                    <div className="flex flex-col m-4 bg-white w-full">
                        <div className="p-2">
                        <p className="text-purple-600">{comment.name}</p>
                        <p className="py-1">{comment.body}</p>
                        <p className="text-sm text-gray-300">{comment.timestamp}</p>
                        </div>
                    </div>
                </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
