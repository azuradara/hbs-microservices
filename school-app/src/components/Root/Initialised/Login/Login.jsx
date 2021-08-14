import { useMutation } from '@apollo/react-hooks';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import {
  AtSymbolIcon,
  LockClosedIcon,
  AcademicCapIcon,
} from '@heroicons/react/solid';
import { EmojiHappyIcon } from '@heroicons/react/outline';

import { setSession } from '#root/store/ducks/session';
import TextInput from '#root/components/shared/TextInput';
import { CREATE_USER_SESSION } from '#root/api/mutations';

const Login = () => {
  const dispatch = useDispatch();
  const { push } = useHistory();
  const [createUserSession] = useMutation(CREATE_USER_SESSION);

  const {
    formState: { isSubmitting },
    handleSubmit,
    register,
  } = useForm();

  const onSubmit = handleSubmit(async ({ email, password }) => {
    const {
      data: { createUserSession: createdSession },
    } = await createUserSession({ variables: { email, password } });

    await dispatch(setSession(createdSession));

    return push('/');
  });

  return (
    <div className="flex flex-col gap-5">
      <div className="max-w-md w-full mx-2 rounded-md shadow-lg bg-white p-4 flex flex-col px-4 py-8 sm:px-6 md:px-8 lg:px-10">
        <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl">
          <AcademicCapIcon className="text-christalle-500" />
          Log in
        </div>
        <form onSubmit={onSubmit} className="">
          <TextInput
            name="email"
            type="email"
            placeholder="Email address"
            autoFocus
            autoComplete="email"
            icon={AtSymbolIcon}
            {...register('email', { required: 'true' })}
          />
          <TextInput
            name="password"
            type="password"
            placeholder="Password"
            autoComplete="current-password"
            icon={LockClosedIcon}
            {...register('password', { required: 'true' })}
          />

          <button
            type="submit"
            disabled={isSubmitting}
            className="mt-2 py-2 px-4 bg-christalle-500 hover:bg-christalle-700 focus:ring-christalle-400 focus:ring-offset-christalle-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-md "
          >
            Log in
          </button>
        </form>
      </div>
      <div className="max-w-md w-full mx-2 rounded-md shadow-lg bg-white p-4 flex flex-col py-8">
        <div className="w-full text-sm font-light text-gray-600">
          <EmojiHappyIcon className="text-christalle-500 mb-2 h-6 w-6 mx-auto" />
          <p className="text-left w-full">
            <span className="text-center">
              Hello o/ thanks for taking the time to review my app.
            </span>
            <br />
            For the purposes of saving time, as I am applying to multiple
            companies right now, I did not build the sign up form.
            <br />
            However, the backend logic and routing for creating new users is
            finished, so you can take a look at that if you'd like.
            <br /> You can use the following credentials to access the
            application:
            <br />
            <code className="w-full block font-mono bg-gray-300 text-gray-800 p-2 px-4 rounded-sm mt-2">
              <span className="flex justify-between">
                <span>email:</span>
                <span>admin@example.co</span>
              </span>
              <span className="flex justify-between">
                <span>password:</span>
                <span>password</span>
              </span>
            </code>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
