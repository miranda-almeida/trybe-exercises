const newEmployees = (callback) => {
  const employees = {
    id1: callback('Pedro Guerra'),
    id2: callback('Luiza Drumond'),
    id3: callback('Carla Paiva'),
  };
  return employees;
};

const employeeEmailInfo = (name) => {
  const loweredName = name.toLowerCase().replace(' ', '_');
  return {nome: name, email: `${loweredName}@tryber.com`};
}


console.log(newEmployees(employeeEmailInfo));

