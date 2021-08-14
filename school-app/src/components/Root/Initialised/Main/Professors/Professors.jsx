import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SearchIcon } from '@heroicons/react/solid';

import ProfessorsGrid from './ProfessorsGrid';
import TextInput from '#root/components/shared/TextInput';

import gqlClient from '#root/api/graphqlClient';
import { GET_PROFESSORS } from '#root/api/queries';
import { setProfessors } from '#root/store/ducks/professor';

const Professors = () => {
  const dispatch = useDispatch();

  const [param, setParam] = useState('');

  const list = useSelector((state) =>
    state.professor.filter((p) => p.matricule.includes(param))
  );

  useEffect(() => {
    gqlClient.query({ query: GET_PROFESSORS }).then(({ data }) => {
      dispatch(setProfessors(data.professors));
    });
  }, []);

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-xl">Professors</h1>
        <div>
          <TextInput
            name="search"
            type="text"
            placeholder="Seach by Matricule"
            autoFocus
            autoComplete="off"
            icon={SearchIcon}
            value={param}
            onInput={(e) => {
              setParam(e.target.value);
            }}
          />
        </div>
      </div>
      <hr className="my-6 border-gray-300" />
      <ProfessorsGrid list={list} />
    </>
  );
};

export default Professors;
