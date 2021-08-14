import React from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';
import { useSelector, useDispatch } from 'react-redux';
import {
  AcademicCapIcon,
  BriefcaseIcon,
  ClipboardCheckIcon,
  LogoutIcon,
} from '@heroicons/react/solid';

import { clearSession } from '#root/store/ducks/session';
import { DELETE_USER_SESSION } from '#root/api/mutations';

const Sidebar = () => {
  const [deleteUserSession] = useMutation(DELETE_USER_SESSION);
  const dispatch = useDispatch();

  const session = useSelector((state) => state.session);

  return (
    <div className="flex flex-col w-64 h-screen px-4 py-8 bg-white border-r shadow-xl">
      <h2 className="flex flex-row text-2xl font-semibold text-gray-700 items-center justify-center">
        <AcademicCapIcon className="w-12 h-12 text-christalle-500 " />
      </h2>

      <div className="flex flex-col justify-between flex-1 mt-6">
        <nav>
          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md hover:bg-gray-200  hover:text-christalle-500"
            to="/professors"
          >
            <BriefcaseIcon className="w-5 h-5 " />
            <span className="mx-4 font-medium">Professors</span>
          </Link>

          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md hover:bg-gray-200  hover:text-christalle-500"
            to="/students"
          >
            <AcademicCapIcon className="w-5 h-5 " />
            <span className="mx-4 font-medium">Students</span>
          </Link>

          <Link
            className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md hover:bg-gray-200  hover:text-christalle-500"
            to="/modules"
          >
            <ClipboardCheckIcon className="w-5 h-5 " />
            <span className="mx-4 font-medium">Modules</span>
          </Link>

          <hr className="my-6 border-gray-300" />
        </nav>
        <a
          className="flex items-center px-4 py-2 mt-5 text-gray-600 transition-colors duration-200 transform rounded-md hover:bg-gray-200  hover:text-christalle-500"
          href="#"
          onClick={async (evt) => {
            evt.preventDefault();
            await deleteUserSession({ variables: { sessionId: session.id } });
            dispatch(clearSession());
          }}
        >
          <LogoutIcon className="w-5 h-5" />
          <span className="mx-4 font-medium">Logout</span>
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
