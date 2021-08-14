import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import TextInput from '#root/components/shared/TextInput';

import {
  UPDATE_STUDENT,
  DELETE_STUDENT,
  CREATE_STUDENT,
} from '#root/api/mutations';
import { updateStudent as setUpdatedStudent } from '#root/store/ducks/student';
import { deleteStudent as setDeleteStudent } from '#root/store/ducks/student';
import { createStudent as setCreateStudent } from '#root/store/ducks/student';

const ModalContent = ({ entity, onClose, isEdit = true }) => {
  const dispatch = useDispatch();

  const [updateStudent] = useMutation(UPDATE_STUDENT);
  const [deleteStudent] = useMutation(DELETE_STUDENT);
  const [createStudent] = useMutation(CREATE_STUDENT);

  const {
    formState: { isSubmitting },
    handleSubmit,
    register,
  } = useForm({
    defaultValues: isEdit
      ? { ...entity, registrationDate: null, birthDate: null }
      : {},
  });

  const onSubmit = handleSubmit(
    async ({ cin, branch, fullName, registrationDate, birthDate }) => {
      if (isEdit) {
        const {
          data: { updateStudent: updatedStudent },
        } = await updateStudent({
          variables: {
            studentId: parseInt(entity.id),
            cin,
            branch,
            birthDate,
            fullName,
            registrationDate,
          },
        });
        dispatch(setUpdatedStudent(updatedStudent));
      } else {
        const {
          data: { createStudent: createdStudent },
        } = await createStudent({
          variables: {
            cin,
            branch,
            birthDate,
            fullName,
            registrationDate,
          },
        });
        dispatch(setCreateStudent(createdStudent));
      }

      onClose();
    }
  );

  const handleDelete = async () => {
    await deleteStudent({
      variables: {
        studentId: parseInt(entity.id),
      },
    });

    dispatch(setDeleteStudent(entity.id));
    onClose();
  };

  return (
    <div className="max-w-md w-full mx-2 bg-white p-4 flex flex-col px-4 py-8 sm:px-6 md:px-8 lg:px-10">
      <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl">
        Student
      </div>
      <form onSubmit={onSubmit} className="">
        <TextInput
          name="cin"
          type="text"
          placeholder="CIN"
          autoFocus
          autoComplete="off"
          {...register('cin', { required: 'true' })}
        />
        <TextInput
          name="fullName"
          type="text"
          placeholder="Full name"
          autoFocus
          autoComplete="off"
          {...register('fullName', { required: 'true' })}
        />
        <TextInput
          name="branch"
          type="text"
          placeholder="Branch"
          autoFocus
          autoComplete="off"
          {...register('branch', { required: 'true' })}
        />
        <TextInput
          name="registrationDate"
          type="text"
          placeholder="Registration date"
          onFocus={(evt) => {
            evt.target.type = 'date';
          }}
          autoFocus
          autoComplete="off"
          {...register('registrationDate', { required: 'true' })}
        />
        <TextInput
          name="birthDate"
          type="text"
          placeholder="Birthday"
          onFocus={(evt) => {
            evt.target.type = 'date';
          }}
          autoFocus
          autoComplete="off"
          {...register('birthDate', { required: 'true' })}
        />

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 py-2 px-4 bg-christalle-500 hover:bg-christalle-700 focus:ring-christalle-400 focus:ring-offset-christalle-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-md "
        >
          Submit
        </button>

        {isEdit && (
          <div
            onClick={() => handleDelete()}
            className="mt-2 py-2 px-4 cursor-pointer bg-gray-200 hover:bg-gray-300 focus:ring-christalle-400 focus:ring-offset-christalle-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-md "
          >
            Delete
          </div>
        )}
      </form>
    </div>
  );
};

export default ModalContent;
