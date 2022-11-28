// Write your solution in this file!

const employee= {
    name: "Sam"
   
};
    


const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee[key];
    return employee;
 }

function updateEmployeeWithKeyAndValue(employee, key ,value){
  return {...employee, "streetAddress": "11 Broadway"};
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee.streetAddress="12 Broadway";
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const newObj = { ...employee }; 
    delete newObj[key];
    return newObj;
}