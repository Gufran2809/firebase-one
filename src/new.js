import {user} from './main'

const updateUserProfile = ()=>{
    const userName = user.displayName;
    const userEmail = user.email;
    const text = `logged in as ${userName} \nwith email ${userEmail}`
  
    document.getElementById("present").textContent = text;
  }
  
  updateUserProfile();