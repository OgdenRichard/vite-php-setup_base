import mockdata from '../data/mockdata.json';

export const mockTableData = () => {
  const formattedMock = [];
  mockdata.forEach((employee) => {
    formattedMock.push({
      firstname: { val: employee.firstname },
      lastname: { val: employee.lastname },
      department: { val: employee.department },
      birthdate: employee.birthdate,
      startdate: employee.startdate,
      street: employee.street,
      city: employee.city,
      state: employee.state,
      zipcode: employee.zipcode,
    });
  });
  return formattedMock;
};
