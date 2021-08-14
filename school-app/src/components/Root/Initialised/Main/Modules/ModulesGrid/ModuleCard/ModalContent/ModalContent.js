import React from 'react';
import { useMutation } from '@apollo/react-hooks';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';

import TextInput from '#root/components/shared/TextInput';

import {
  UPDATE_MODULE,
  DELETE_MODULE,
  CREATE_MODULE,
} from '#root/api/mutations';
import { updateModule as setUpdateModule } from '#root/store/ducks/module';
import { deleteModule as setDeleteModule } from '#root/store/ducks/module';
import { createModule as setCreateModule } from '#root/store/ducks/module';

const ModalContent = ({ entity, onClose, isEdit = true }) => {
  const dispatch = useDispatch();

  const [updateModule] = useMutation(UPDATE_MODULE);
  const [deleteModule] = useMutation(DELETE_MODULE);
  const [createModule] = useMutation(CREATE_MODULE);

  const {
    formState: { isSubmitting },
    handleSubmit,
    register,
  } = useForm({
    defaultValues: isEdit ? { ...entity } : {},
  });

  const onSubmit = handleSubmit(async ({ moduleName, coefficient }) => {
    if (isEdit) {
      const {
        data: { updateModule: updatedModule },
      } = await updateModule({
        variables: {
          moduleId: parseInt(entity.id),
          moduleName,
          coefficient: parseFloat(coefficient),
        },
      });
      dispatch(setUpdateModule(updatedModule));
    } else {
      const {
        data: { createModule: createdModule },
      } = await createModule({
        variables: {
          moduleName,
          coefficient: parseFloat(coefficient),
        },
      });
      console.log(createdModule);
      dispatch(setCreateModule(createdModule));
    }

    onClose();
  });

  const handleDelete = async () => {
    await deleteModule({
      variables: {
        moduleId: parseInt(entity.id),
      },
    });

    dispatch(setDeleteModule(entity.id));
    onClose();
  };

  return (
    <div className="max-w-md w-full mx-2 bg-white p-4 flex flex-col px-4 py-8 sm:px-6 md:px-8 lg:px-10">
      <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl">
        Module
      </div>
      <form onSubmit={onSubmit} className="">
        <TextInput
          name="moduleName"
          type="text"
          placeholder="Name"
          autoFocus
          autoComplete="off"
          {...register('moduleName', { required: 'true' })}
        />
        <TextInput
          name="coefficient"
          type="text"
          placeholder="Coefficient"
          autoFocus
          autoComplete="off"
          {...register('coefficient', { required: 'true' })}
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
