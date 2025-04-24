import { FaHeart } from "react-icons/fa";
import { FaRegComment } from "react-icons/fa";
import { LuSend } from "react-icons/lu";
import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";
import { FaRegHeart } from "react-icons/fa";
import { useState } from "react";
import likesfx from "../assets/like.mp3";
import marksfx from "../assets/mark.mp3";

function Post({post}) {
    const [islike, setLike] = useState(false);

    const handleLike = () => {
        setLike(!islike);
        const likeAudio = new Audio(likesfx);
        likeAudio.currentTime = 1;
        likeAudio.play();
    }

    const [isMarked, setIsMarked] = useState(false);

    const handleBookmark = () => {
        setIsMarked(!isMarked);
        const markAudio = new Audio(marksfx).play();
    }

    return(
        <div className="flex flex-col gap-[10px] h-[78vh] w-[55vh] bg-white rounded-3xl shadow p-[20px] shadow-lg shadow-[#595757dc] hover:origin-center transition hover:-translate-y-2">
            {/* header */}
            <div className="flex flex-row justify-between items-center">
                <div className="flex flex-row gap-[8px] justify-center items-center">
                    <div className="p-[2px] bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888] inline-block rounded-full">
                    <img src={post.avatar} alt={post.username} className="h-[35px] w-[35px] rounded-full block"/>
                    </div>
                    <p className="font-bold text-md">{post.username}</p>
                </div>
                <button className="flex text-center justify-center items-center text-black font-bold text-2xl mb-2">...</button>
            </div>
            {/* post img */}
            <div className="h-[400px] w-full">
                <img src={post.postImage} alt="Post" className="h-full w-full"/>
            </div>
            {/* post footer */}
            <div className="flex flex-col gap-[2px]">
                {/* post footer icons */}
                <div className="flex flex-row justify-between items-center w-[100%]">
                    <div className="flex flex-row gap-[10px] items-center justify-center">
                        <button onClick={handleLike}>
                            {islike?<FaHeart  className="text-2xl"/>:<FaRegHeart className="text-2xl"/>}
                        </button>
                        <button><FaRegComment className="text-2xl"/></button>
                        <button><LuSend className="text-2xl"/></button>
                    </div>
                    <button onClick={handleBookmark}>
                        {isMarked?<FaBookmark className="text-2xl"/>:<FaRegBookmark className="text-2xl"/>}
                    </button>
                </div>
                {/* post footer likes */}
                <p className="font-semibold text-sm">{post.likes} likes</p>
                <p className="text-sm"><span className="font-semibold">{post.username}</span> {post.caption}</p>
                <p className="text-sm text-gray-400">
                    {post.comments.length === 0 ? <p className="text-gray-400">No comments yet</p> : <p className="text-gray-400">View all comments</p>}
                </p>
                <p className="text-xs text-gray-400">{post.timestamp}</p>
            </div>
        </div>
    )
}
export default Post