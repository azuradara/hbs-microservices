import React from 'react';

const ModuleCard = ({ entity }) => {
  return (
    <tr key={entity.id}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{entity.id}</div>
      </td>

      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm font-medium  text-gray-900">
          {entity.moduleName}
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="text-sm text-gray-900">{entity.coefficient}</div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <a href="#" className="text-indigo-600 hover:text-indigo-900">
          Edit
        </a>
      </td>
    </tr>
  );
};

export default ModuleCard;
