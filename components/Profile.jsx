import { useState } from "react";

const Profile = () => {
    const [profiles, setProfiles] = useState({
        name: "",
        age: "",
    })

    
    const updatename = () => setProfiles(profiles.map (profile => profile == 'navya' ? 'navyashree': profile) )
    const updateage = () => setProfiles(profiles.map (profile => profile == '21' ? '22': profile) )
  return (
    <div>

    <h2>User Profile</h2>
    {profiles.map((profile)=>(
        <ul key={Math.random()}>{profile} </ul>
    ))}

      <button onClick={updatename}>Update name</button>
      <button onClick={updateage}>Update age</button>
    </div>
  )
}

export default Profile
