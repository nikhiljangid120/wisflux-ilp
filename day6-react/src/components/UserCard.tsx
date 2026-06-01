// ============================================
// Day 6 — UserCard.tsx
// Demonstrates: useEffect + Props + fetch
// ============================================

import { useState, useEffect } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  phone: string;
  website: string;
  company: { name: string };
  address: { city: string; street: string };
}

interface UserCardProps {
  userId: number;
}

function UserCard({ userId }: UserCardProps) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentId, setCurrentId] = useState<number>(userId);

  // useEffect — runs after render, re-runs when currentId changes
  useEffect(() => {
    setLoading(true);
    setError(null);

    fetch(`https://jsonplaceholder.typicode.com/users/${currentId}`)
      .then((res) => {
        if (!res.ok) throw new Error("User not found");
        return res.json();
      })
      .then((data: User) => {
        setUser(data);
        setLoading(false);
      })
      .catch((err: Error) => {
        setError(err.message);
        setLoading(false);
      });
  }, [currentId]); // re-runs whenever currentId changes

  return (
    <div className="card">
      <h2>User Card — useEffect</h2>
      <p className="description">
        Fetches user data when the component mounts or when userId changes.
      </p>

      {/* User ID Selector */}
      <div className="id-selector">
        {[1, 2, 3, 4, 5].map((id) => (
          <button
            key={id}
            className={`btn ${currentId === id ? "btn-active" : "btn-grey"}`}
            onClick={() => setCurrentId(id)}
          >
            User {id}
          </button>
        ))}
      </div>

      {/* States */}
      {loading && <p className="status loading">⏳ Fetching user {currentId}...</p>}
      {error && <p className="status error">❌ {error}</p>}

      {user && !loading && (
        <div className="user-info">
          <div className="user-avatar">{user.name[0]}</div>
          <h3>{user.name}</h3>
          <p>📧 {user.email}</p>
          <p>📞 {user.phone}</p>
          <p>🏙️ {user.address.city}</p>
          <p>🏢 {user.company.name}</p>
        </div>
      )}
    </div>
  );
}

export default UserCard;
