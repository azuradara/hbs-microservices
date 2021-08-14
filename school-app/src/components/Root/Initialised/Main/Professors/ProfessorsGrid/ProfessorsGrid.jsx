import React from 'react';

import ProfessorCard from './ProfessorCard';

import CustomTable from '#root/components/shared/CustomTable';

const ProfessorsGrid = ({ list }) => {
  return (
    <div className="">
      <CustomTable
        columns={['Id / Matricule', 'Name', 'Registration', 'Modules']}
      >
        {list &&
          list.map((professor) => (
            <ProfessorCard key={professor.id} entity={professor} />
          ))}
      </CustomTable>
    </div>
  );
};

export default ProfessorsGrid;
