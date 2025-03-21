function calculateNetSalary() {
 
    const basicSalary = Number(prompt("Enter your basic salary:"));
    const benefits = Number(prompt("Enter your benefits:"));
  

    const grossSalary = basicSalary + benefits;
  

    function calculatePAYE(salary) {
      if (salary <= 24000) return salary * 0.1; // 10%
      if (salary <= 32333) return salary * 0.25; // 25%
      if (salary <= 500000) return salary * 0.3; // 30%
      if (salary <= 800000) return salary * 0.325; // 32.5%
      return salary * 0.35; // 35%
    }
  
    const payee = calculatePAYE(grossSalary);
  
    function calculateNHIF(salary) {
      if (salary <= 5999) return 150;
      if (salary <= 7999) return 300;
      if (salary <= 11999) return 400;
      if (salary <= 14999) return 500;
      if (salary <= 19999) return 600;
      if (salary <= 24999) return 750;
      if (salary <= 29999) return 850;
      if (salary <= 34999) return 900;
      if (salary <= 39999) return 950;
      if (salary <= 44999) return 1000;
      if (salary <= 49999) return 1100;
      if (salary <= 59999) return 1200;
      if (salary <= 69999) return 1300;
      if (salary <= 79999) return 1400;
      if (salary <= 89999) return 1500;
      if (salary <= 99999) return 1600;
      return 1700;
    }
  
    const nhifDeduction = calculateNHIF(grossSalary);
  

    const nssfDeduction = Math.min(grossSalary * 0.06, 2160);
  

    const netSalary = grossSalary - (payee + nhifDeduction + nssfDeduction);
  
 
    alert(`Gross Salary: ${grossSalary.toFixed(2)}
  PAYE (Tax): ${payee.toFixed(2)}
  NHIF Deduction: ${nhifDeduction.toFixed(2)}
  NSSF Deduction: ${nssfDeduction.toFixed(2)}
  Net Salary: ${netSalary.toFixed(2)}`);
  }
  