import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PlusIcon, SearchIcon } from '@heroicons/react/solid';

import StudentsGrid from './StudentsGrid';
import Modal from '#root/components/shared/Modal';
import TextInput from '#root/components/shared/TextInput';
import ModalContent from './StudentsGrid/StudentCard/ModalContent';

import gqlClient from '#root/api/graphqlClient';
import { GET_STUDENTS } from '#root/api/queries';
import { setStudents } from '#root/store/ducks/student';

const Students = () => {
  const dispatch = useDispatch();

  const [param, setParam] = useState('');
  const [isOpen, setIsOpen] = useState(false);

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
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <ModalContent isEdit={false} onClose={() => setIsOpen(false)} />
      </Modal>

      <div className="flex justify-between items-center">
        <h1 className="text-xl">Students</h1>
        <div className="flex relative gap-5">
          <span
            onClick={() => {
              setIsOpen(true);
            }}
            className="rounded-full mb-2 inline-flex hover:bg-gray-200 cursor-pointer duration-150  items-center px-3 border-t bg-white border  border-gray-300 text-gray-500 shadow-sm text-sm"
          >
            <PlusIcon className="h-5 w-5 " />
          </span>

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
