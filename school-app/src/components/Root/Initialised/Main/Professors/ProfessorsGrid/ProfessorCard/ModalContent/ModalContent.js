import React from 'react';

import { useMutation } from '@apollo/react-hooks';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import TextInput from '#root/components/shared/TextInput';
import { UPDATE_PROFESSOR, DELETE_PROFESSOR } from '#root/api/mutations';
import { updateProfessor as setUpdatedProfessor } from '#root/store/ducks/professor';
import { deleteProfessor as setDeleteProfessor } from '#root/store/ducks/professor';

const ModalContent = ({ entity, onClose }) => {
  const dispatch = useDispatch();

  const [updateProfessor] = useMutation(UPDATE_PROFESSOR);
  const [deleteProfessor] = useMutation(DELETE_PROFESSOR);

  const {
    formState: { isSubmitting },
    handleSubmit,
    register,
  } = useForm({ defaultValues: { ...entity, registrationDate: null } });

  const onSubmit = handleSubmit(
    async ({ matricule, fullName, registrationDate }) => {
      const {
        data: { updateProfessor: updatedProfessor },
      } = await updateProfessor({
        variables: {
          professorId: parseInt(entity.id),
          matricule,
          fullName,
          registrationDate,
        },
      });

      dispatch(setUpdatedProfessor(updatedProfessor));
      onClose();
    }
  );

  const handleDelete = async () => {
    await deleteProfessor({
      variables: {
        professorId: parseInt(entity.id),
      },
    });

    dispatch(setDeleteProfessor(entity.id));
    onClose();
  };

  return (
    <div className="max-w-md w-full mx-2 bg-white p-4 flex flex-col px-4 py-8 sm:px-6 md:px-8 lg:px-10">
      <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl">
        Edit Professor
      </div>
      <form onSubmit={onSubmit} className="">
        <TextInput
          name="matricule"
          type="text"
          placeholder="Matricule"
          autoFocus
          autoComplete="off"
          {...register('matricule', { required: 'true' })}
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

        <button
          type="submit"
          disabled={isSubmitting}
          className="mt-2 py-2 px-4 bg-christalle-500 hover:bg-christalle-700 focus:ring-christalle-400 focus:ring-offset-christalle-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-md "
        >
          Submit
        </button>

        <div
          onClick={() => handleDelete()}
          className="mt-2 py-2 px-4 cursor-pointer bg-gray-200 hover:bg-gray-300 focus:ring-christalle-400 focus:ring-offset-christalle-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-md "
        >
          Delete
        </div>
      </form>
    </div>
  );
};

export default ModalContent;
