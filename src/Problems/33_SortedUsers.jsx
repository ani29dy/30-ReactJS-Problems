import React, { useEffect, useState } from "react";

const SortedUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState("asc");
  const [page, setPage] = useState(1);
  const [search, setSearch] = useState("");
  const [error, setError] = useState(null);
  const userPerPage = 20;

  const fetchUsers = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://dummyjson.com/users?limit=100");
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

  const filteredUsers = users.filter((user) => {
    const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
    return (
      fullName.includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
    );
  });

  const SortedUsers = [...filteredUsers].sort((a, b) => {
    const nameA = `${a.firstName} ${a.lastName}`.toLowerCase();
    const nameB = `${b.firstName} ${b.lastName}`.toLowerCase();

    return sort === "asc"
      ? nameA.localeCompare(nameB)
      : nameB.localeCompare(nameA);
  });

  const startIndex = (page - 1) * userPerPage;
  const paginatedUsers = SortedUsers.slice(
    startIndex,
    startIndex + userPerPage
  );

  const totalPages = Math.ceil(SortedUsers.length / userPerPage);

  if (loading) return <p>Loading Users...</p>;
  if (error) return <p>Error Loading...</p>;
  return (
    <div>
      <h1>SortedUsers</h1>

      <input
        type="text"
        placeholder="Search by Name or Email..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setPage(1);
        }}
      />

      <br />
      <br />

      <div>
        <button onClick={() => setSort("asc")}>Sort A → Z</button>
        <button onClick={() => setSort("desc")}>Sort Z → A</button>
      </div>

      <br />

      <div>
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Previous
        </button>
        <span>
          {page} of {totalPages}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>

      {paginatedUsers.map((user) => (
        <div key={user.id}>
          <h3>
            {user.firstName} {user.lastName}
          </h3>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>City: {user.address.city}</p>
        </div>
      ))}

      <div>
        <button
          disabled={page === 1}
          onClick={() => setPage((prev) => prev - 1)}
        >
          Previous
        </button>
        <span>
          {page} of {totalPages}
        </span>
        <button
          disabled={page === totalPages}
          onClick={() => setPage((prev) => prev + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default SortedUsers;
