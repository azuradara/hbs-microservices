import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { SearchIcon } from '@heroicons/react/solid';

import ModulesGrid from './ModulesGrid';
import TextInput from '#root/components/shared/TextInput';

import gqlClient from '#root/api/graphqlClient';
import { GET_MODULES } from '#root/api/queries';
import { setModules } from '#root/store/ducks/module';

const Modules = () => {
  const dispatch = useDispatch();

  const [param, setParam] = useState('');

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
      <div className="flex justify-between items-center">
        <h1 className="text-xl">Modules</h1>
        <div>
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
