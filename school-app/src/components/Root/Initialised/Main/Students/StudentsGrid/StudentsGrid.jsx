import React from 'react';

import StudentCard from './StudentCard';

import CustomTable from '#root/components/shared/CustomTable';

const StudentsGrid = ({ list }) => {
  return (
    <div className="">
      <CustomTable
        columns={[
          'Id / CIN',
          'Name',
          'Birthday',
          'Registration',
          'Branch',
          'Modules',
        ]}
      >
        {list &&
          list.map((student) => (
            <StudentCard key={student.id} entity={student} />
          ))}
      </CustomTable>
    </div>
  );
};

export default StudentsGrid;
