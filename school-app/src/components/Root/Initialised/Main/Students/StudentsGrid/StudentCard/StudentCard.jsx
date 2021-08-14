import React from 'react';

const StudentCard = ({ entity }) => {
  return (
    <tr key={entity.id}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{entity.id}</div>
        <div className="text-sm text-gray-500">{entity.cin}</div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium  text-gray-900">
          {entity.fullName}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{entity.birthDate}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{entity.registrationDate}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {entity.branch}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {entity.modules == 0 ? (
          <span>No modules :(</span>
        ) : (
          entity.modules.map((m) => (
            <span className="bg-gray-500" key={m.id}>
              m.moduleName
            </span>
          ))
        )}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">
          Edit
        </a>
      </td>
    </tr>
  );
};

export default StudentCard;
