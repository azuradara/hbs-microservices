import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PlusIcon, SearchIcon } from '@heroicons/react/solid';

import ModulesGrid from './ModulesGrid';
import Modal from '#root/components/shared/Modal';
import TextInput from '#root/components/shared/TextInput';
import ModalContent from './ModulesGrid/ModuleCard/ModalContent';

import gqlClient from '#root/api/graphqlClient';
import { GET_MODULES } from '#root/api/queries';
import { setModules } from '#root/store/ducks/module';

const Modules = () => {
  const dispatch = useDispatch();

  const [param, setParam] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const list = useSelector((state) =>
    state.module.filter((p) => p.moduleName.includes(param))
  );

  useEffect(() => {
    gqlClient.query({ query: GET_MODULES }).then(({ data }) => {
      dispatch(setModules(data.modules));
    });
  }, []);

  return (
    <>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <ModalContent isEdit={false} onClose={() => setIsOpen(false)} />
      </Modal>

      <div className="flex justify-between items-center">
        <h1 className="text-xl">Modules</h1>
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
            placeholder="Seach by name"
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
      <ModulesGrid list={list} />
    </>
  );
};

export default Modules;
