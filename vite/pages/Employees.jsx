import { PageTitle } from '../components/PageTitle';
import { EmployeesTable } from '../components/EmployeesTable';

export const Employees = () => {
  return (
    <>
      <PageTitle title="Current employees" variant="h4" my={5} />
      <EmployeesTable />
    </>
  );
};
