import React, { useState } from 'react';

import Modal from '#root/components/shared/Modal';
import ModalContent from './ModalContent';

const ProfessorCard = ({ entity }) => {
  const [firstName, lastName] = entity.fullName.split(' ');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Modal open={isOpen} onClose={() => setIsOpen(false)}>
        <ModalContent entity={entity} onClose={() => setIsOpen(false)} />
      </Modal>

      <tr key={entity.id}>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{entity.id}</div>
          <div className="text-sm text-gray-500">{entity.matricule}</div>
        </td>

        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm font-medium  text-gray-900">{lastName}</div>
          <div className="text-sm text-gray-500">{firstName}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap">
          <div className="text-sm text-gray-900">{entity.registrationDate}</div>
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex flex-wrap gap-1">
          {entity.modules == 0 ? (
            <span>No modules :(</span>
          ) : (
            entity.modules.map((m) => (
              <span className="bg-gray-200 py-1 px-2 rounded-sm" key={m.id}>
                {m.moduleName}
              </span>
            ))
          )}
        </td>
        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
          <a
            href="#"
            onClick={(evt) => {
              evt.preventDefault();
              setIsOpen(true);
            }}
            className="text-indigo-600 hover:text-indigo-900"
          >
            Edit
          </a>
        </td>
      </tr>
    </>
  );
};

export default ProfessorCard;
