const countTotalSalary = function(employees) {
    const salaryValues = Object.values(employees);
    let total = 0;
    
    for(const salaryValue of salaryValues) {
        total += salaryValue;
    }    
    return `Сумма зарплат ${total} кредитов`;
};

console.log(countTotalSalary({}));

console.log(
  countTotalSalary({
    mango: 100,
    poly: 150,
    alfred: 80,
  }),
); 

console.log(
  countTotalSalary({
    kiwi: 200,
    lux: 50,
    chelsy: 150,
  }),
); 