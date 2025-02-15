import { useState, useEffect } from 'react';
import { useActionData, useLoaderData } from 'react-router-dom';
import Table from './Table';
import UserForm from './Form';

export async function loader() {
  const url = 'https://dummyjson.com/users';
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const usersApi = await response.json();
    const users =
      usersApi?.users?.map((user) => ({
        name: user.firstName,
        job: user.company.title,
      })) ?? [];
    return users;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}

export async function action({ request }) {
  const formData = await request.formData();
  const fields = Object.fromEntries(formData);
  let user = await fetch('https://dummyjson.com/users/add', {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify({
      firstName: fields.name,
      lastName: 'Test',
      age: 2350,
      company: {
        title: fields.job,
      },
    }),
  });
  user = await user.json();
  return {
    name: user.firstName,
    job: user.company.title,
  };
}

const TableUsers = () => {
  const users = useLoaderData();
  const userAdded = useActionData();
  const [people, setPeople] = useState(users);

  useEffect(() => {
    console.log('Loader data:', users);
    if (userAdded) {
      const newUser = {
        name: userAdded.name,
        job: userAdded.job,
      };
      setPeople((prevPeople) => [newUser, ...prevPeople]);
    }
  }, [userAdded]);

  const removePeople = (index) => {
    setPeople(people.filter((_, i) => i !== index));
  };

  const title = 'My Twelfth Functional App';
  return (
    <div className="container">
      <UserForm />
      <Table peopleData={people} removePeople={removePeople} title={title} />
    </div>
  );
};

export default TableUsers;
