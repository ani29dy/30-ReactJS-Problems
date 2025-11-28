import React, { useEffect, useState } from "react";

const SearchUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const response = await fetch("https://dummyjson.com/users?limit=40");
      const data = await response.json();

      setUsers(data.users);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const filteredUsers = users.filter(
    (user) =>
      user.firstName.toLowerCase().includes(search.toLowerCase()) ||
      user.lastName.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) return <p>Loading Users...</p>;
  if (error) return <p>Error... {error.message}</p>;

  return (
    <div>
      <h1>SearchUsers Example</h1>

      <input
        type="text"
        name="search"
        placeholder="Search by Name or Email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div>
        {filteredUsers.length > 0 ? (
          filteredUsers.map((user) => (
            <div key={user.id}>
              <h3>
                {user.id}: {user.firstName} {user.lastName}
              </h3>
              <p>Email: {user.email}</p>
              <p>Phone: {user.phone}</p>
            </div>
          ))
        ) : (
          <div>No users Found</div>
        )}
      </div>
    </div>
  );
};

export default SearchUsers;
