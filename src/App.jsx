import Post from "./components/Post"

const postDetails = [
  {
    id: 1,
    username: "alice_w",
    avatar: "https://i.pravatar.cc/150?img=1",
    postImage: "https://picsum.photos/600/400?random=1",
    likes: 120,
    caption: "Loving React!",
    comments: [
      { id: 1, user: "bob_99", text: "Nice shot!" },
      { id: 2, user: "charlie.k", text: "🔥🔥🔥" }
    ],
    timestamp: "2 hours ago"
  },
  {
    id: 2,
    username: "design_guru",
    avatar: "https://i.pravatar.cc/150?img=2",
    postImage: "https://picsum.photos/600/400?random=2",
    likes: 350,
    caption: "Gradient vibes 🌈",
    comments: [],
    timestamp: "1 day ago"
  },
  {
    id: 3,
    username: "travel_junkie",
    avatar: "https://i.pravatar.cc/150?img=3",
    postImage: "https://picsum.photos/600/400?random=3",
    likes: 789,
    caption: "Exploring the hidden gems of the world 🌍✈️",
    comments: [
      { id: 1, user: "wanderlust_queen", text: "Absolutely breathtaking!" },
      { id: 2, user: "globe_trotter", text: "Adding this to my bucket list!" }
    ],
    timestamp: "3 days ago"
  }  
]


function App() {
  
  return (
    <div className="flex flex-col overflow-y-auto md:flex-row gap-[40px] p-[20px] items-center justify-start md:justify-center w-[100vw] h-[100dvh] bg-gradient-to-tr from-[#f09433] via-[#e6683c] via-[#dc2743] via-[#cc2366] to-[#bc1888]" >
        {postDetails.map(post => (
          <Post key={post.id} post={post} />
        ))}
    </div>

  )
}

export default App
