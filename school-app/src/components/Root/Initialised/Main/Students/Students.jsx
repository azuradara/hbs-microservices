import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SearchIcon } from '@heroicons/react/solid';

import StudentsGrid from './StudentsGrid';
import TextInput from '#root/components/shared/TextInput';

import gqlClient from '#root/api/graphqlClient';
import { GET_STUDENTS } from '#root/api/queries';
import { setStudents } from '#root/store/ducks/student';

const Students = () => {
  const dispatch = useDispatch();

  const [param, setParam] = useState('');

  const list = useSelector((state) =>
    state.student.filter((s) => s.cin.includes(param))
  );

  useEffect(() => {
    gqlClient.query({ query: GET_STUDENTS }).then(({ data }) => {
      dispatch(setStudents(data.students));
    });
  }, []);

  return (
    <>
      <div className="flex justify-between items-center">
        <h1 className="text-xl">Students</h1>
        <div>
          <TextInput
            name="search"
            type="text"
            placeholder="Seach by CIN"
            autoFocus
            autoComplete="off"
            icon={SearchIcon}
            value={param}
            onInput={(e) => {
              setParam(e.target.value);
              console.log(param);
            }}
          />
        </div>
      </div>
      <hr className="my-6 border-gray-300" />
      <StudentsGrid list={list} />
    </>
  );
};

export default Students;
