import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import StudentCard from './StudentCard';

import gqlClient from '#root/api/graphqlClient';
import { GET_STUDENTS } from '#root/api/queries';
import { setStudents } from '#root/store/ducks/student';
import CustomTable from '../../../../../shared/CustomTable';

const StudentsGrid = () => {
  const dispatch = useDispatch();

  const list = useSelector((state) => state.student);

  useEffect(() => {
    gqlClient.query({ query: GET_STUDENTS }).then(({ data }) => {
      dispatch(setStudents(data.students));
    });
  }, []);

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
