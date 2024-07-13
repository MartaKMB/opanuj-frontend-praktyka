import React, { useCallback, useEffect, useState } from 'react';

interface User {
  id: number;
  name: string;
}

const API_URL = '/api/data/users?timeout=10000';

const App = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [timeoutError, setTimeoutError] = useState<boolean>(false);

  const getUsersRequest = async (controller: AbortController) =>
    await fetch(API_URL, {
      signal: controller.signal,
    }).then((res) => {
      if (!res.ok) {
        throw new Error('Error while fetching!');
      }
      return res.json();
    });

  const fetchUsers = useCallback(async () => {
    setTimeoutError(false);

    const controller = new AbortController();

    const timeoutId = setTimeout(() => {
      controller.abort();
      setTimeoutError(true);
    }, 5000);

    try {
      console.info('Request triggered!');
      const data = await getUsersRequest(controller);
      clearTimeout(timeoutId);
      setUsers(data);
    } catch (error: any) {
      clearTimeout(timeoutId);
      if (error.name === 'AbortError') {
        console.info('Request aborted due to timeout');
        setTimeoutError(true);
      } else {
        console.error('Error occurred:', error.message);
      }
    }
  }, []);

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div>
      <div className="flex flex-row items-center justify-between py-4">
        <h1 className="text-2xl font-bold">Users</h1>
        {timeoutError && (
          <div className="flex flex-row items-center">
            <p className="mr-2">
              Sorry, there seems to be connectivity issues...
            </p>
            <button onClick={fetchUsers} className="text-blue-400 bg-blue-200 hover:text-blue-200 hover:bg-blue-400 rounded-md p-4">
              Try again
            </button>
          </div>
        )}
      </div>
      <ul className="space-y-2">
        {users?.map((user, index) => (
          <li
            className="bg-white p-4 rounded-md border border-gray-100"
            key={index}
          >
            {user.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
