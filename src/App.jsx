import { SignedIn, SignedOut, SignInButton, UserButton, useAuth, useUser } from "@clerk/clerk-react";
function App() {
  const {user} = useUser();
  console.log(user)


  
  return (
    <div className="App">
      <header>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </header>
    </div>
  )
}

export default App
