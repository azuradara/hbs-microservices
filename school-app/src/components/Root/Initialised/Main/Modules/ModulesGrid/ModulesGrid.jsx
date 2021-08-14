import React from 'react';

import ModuleCard from './ModuleCard';

import CustomTable from '#root/components/shared/CustomTable';

const ModulesGrid = ({ list }) => {
  return (
    <div className="">
      <CustomTable columns={['id', 'name', 'coefficient']}>
        {list &&
          list.map((module) => <ModuleCard key={module.id} entity={module} />)}
      </CustomTable>
    </div>
  );
};

export default ModulesGrid;
