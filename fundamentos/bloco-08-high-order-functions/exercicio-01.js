const newEmployees = (name) => {
  const employees = {
    id1: `${name}, ${employeeEmailInfo(name)}@tryber.com`, // 'Pedro Guerra',
    id2: `nome`, // Luiza Drumond',
    id3: `nome`, // 'Carla Paiva',
  };
  return employees;
};

const employeeEmailInfo = (name) => {
  const loweredName = name.toLowerCase();
  const underline = loweredName.replace(' ', '_');
  return `${underline}`;
  // return `${underline}@trybe.com`;
}

// const employeeName = (name) => {
//   return `${name}`;
// }

console.log(newEmployees(employeeEmailInfo('Pedro Guerra')));

