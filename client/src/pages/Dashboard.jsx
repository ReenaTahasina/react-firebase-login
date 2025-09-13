// src/pages/Dashboard.jsx
import { auth } from "../firebase";
import { useState } from "react";
import { updatePassword } from "firebase/auth";

export default function Dashboard() {
  const [newPassword, setNewPassword] = useState("");
  const user = auth.currentUser;

  const handleChangePassword = async () => {
    try {
      await updatePassword(user, newPassword);
      alert("Password updated!");
    } catch (err) {
      alert("Error: " + err.message);
    }
  };

  return (
    <div>
      <h2>Welcome, {user?.email} 🌼</h2>
      <input
        type="password"
        placeholder="New Password"
        value={newPassword}
        onChange={e => setNewPassword(e.target.value)}
      />
      <button onClick={handleChangePassword}>Change Password</button>
    </div>
  );
}