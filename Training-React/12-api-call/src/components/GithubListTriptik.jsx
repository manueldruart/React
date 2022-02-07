/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/self-closing-comp */
/* eslint-disable no-undef */
import React, { useEffect, useRef, useState } from 'react';

const GithubListTriptik = () => {
  const [repos, setRepos] = useState([]);
  const search = useRef('');
  const [error, setError] = useState('');

  const getRepos = async (value) => {
    const result = await fetch(`https://api.github.com/users/${value}/repos`);
    if (result.status === 404) {
      setError("The user doens't exit ");
    } else {
      const data = await result.json();
      setError('');
      setRepos(data);
    }
  };

  useEffect(() => {
    const getData = async () => {
      getRepos('manueldruart');
    };

    getData();
  }, []);

  const searchRepos = async (e) => {
    e.preventDefault();
    const input = search.current.value;
    if (input.length >= 3) {
      getRepos(input);
    }
  };

  return (
    <div className="mt-4">
      <form onSubmit={searchRepos} className="flex items-end px-6 w-1/2">
        <div className="flex flex-col ">
          <label htmlFor="search" className="font-semibold text-sm mb-1">
            Rechercher un utilisateur
          </label>
          <input
            type="text"
            name="search"
            id="search"
            ref={search}
            className="border border-indigo-600 px-2 rounded py-2"></input>
          <div className="text-red-600 text-sm mt-1">{error}</div>
        </div>
        <button
          type="submit"
          className="bg-indigo-600 px-3 py-2 text-white font-semibold rounded-sm duration-200 hover:bg-indigo-500 ml-8">
          Rechercher
        </button>
      </form>
      {repos.map((repo) => (
        <div key={repo.id} className="py-2 border-b border-gray-300 mx-12">
          <a
            href={repo.html_url}
            className="text-blue-400"
            target="_blank"
            rel="noreferrer">
            {repo.full_name}
          </a>
        </div>
      ))}
    </div>
  );
};

export default GithubListTriptik;
