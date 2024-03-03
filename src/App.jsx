import { SignedIn, SignedOut, SignInButton, UserButton, useAuth, useUser } from "@clerk/clerk-react";
import { dark } from "@clerk/themes";
import axios from "axios";
function App() {
  const { user } = useUser();
  if (user) {
    console.log(user);
    console.log(user.id);
  }
  else {
    console.log("user not ");
  }

  // const getUserInfo = async ()   => {
  //   try {
  //   const info =  await axios.get('clerk.your-site.com' , {
  //     headers:"eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJkZXYiOiJkdmJfMmQ4QjQybWM3NVZrcHJnbnpyR0hNaXFxM3BPIiwiaWQiOiJjbGllbnRfMmQ4Ym9wUXhiYko4TjY5TzZscEMxODhUZnNmIiwicm90YXRpbmdfdG9rZW4iOiJpYW82dGpoOWI4dnEzbHVtd3k2YWRjNjk4aG51Z3lvMmQ2eDFwang0In0.I4ujlfij0dQfJIi2mewkVbiPcJbMhv6_w7CTP0Q4khtBHc5PEd-z7mQulScQR02ZGscz7oG5bhHlwsiH8Lv7ilDV7n0dnj2DmVcZ3_AMqGazKh95ZianAoU03ymazN11nsGqEHiw81HepYIhysxqYOCxIsjeTLEJcj9lGJKeENc2DLmV54gPQ2BJ9WDEbygLVGGQnn8CpsZUmzG-N-F-Ns21w4bJHeqRybcF-s-FkZIzP6r59Un-H-z1TUVDjGbnSHJqyabbQkCgQ4CgEbG9lJAeTtdGbnPZpiyIvM9hb4_WhABb0JmgLZnvqA7IKFRvm76OBrK_OtQ42Hv6GhZrHg" 
  //   }) 
  //   console.log(info);
  //   } catch(e) {
  //       console.log(e);
  //   }
  // }
  // getUserInfo()

  return (
    <div className="App">
      <header>
        <SignedOut >
          <SignInButton children="Google akkaunt orqali royxattan otish" />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
    </div>
  )
}

export default App
