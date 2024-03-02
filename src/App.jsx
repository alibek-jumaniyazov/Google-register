import { SignedIn, SignedOut, SignInButton, UserButton, useAuth, useUser } from "@clerk/clerk-react";
function App() {
  const { user } = useUser();
  if(user){
    console.log(user);
    console.log(user.id);
  }
  else{
    console.log("user not ");
  }



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
