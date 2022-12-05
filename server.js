const mongoose = require("mongoose");

const url = "mongodb://localhost:27017/assignment3";

mongoose
  .connect(url)
  .then(() => {
    console.log("connected to mongoose ");
  })
  .catch((error) => {
    console.log(error);
  });

//creating schema for validation

const employeeSchema = new mongoose.Schema({
  firstName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  salary: {
    type: String,
  },
  department: {
    type: String,
  },
  lastCompany: {
    type: String,
  },
  lastSalary: {
    type: String,
  },
  overallExp: {
    type: String,
  },
  contactInfo: {
    type: String,
  },
  yearGrad: {
    type: String,
  },
  gradStream: {
    type: String,
  },
});

const Task = new mongoose.model("employee", employeeSchema);

const emp1 = new Task({
  firstName: "John",
  lastName: "Doe",
  salary: "25000",
  department: "HR",
  lastCompany: "X",
  lastSalary: "10000",
  overallExp: "2",
  contactInfo: "1234567890",
  yearGrad: "2016",
  gradStream: "CSE",
});

const emp2 = new Task({
  firstName: "Rohan",
  lastName: "Jame",
  salary: "30000",
  department: "Technical",
  lastCompany: "Y",
  lastSalary: "15000",
  overallExp: "1",
  contactInfo: "1234567860",
  yearGrad: "2015",
  gradStream: "CSE",
});
const emp3 = new Task({
  firstName: "Jame",
  lastName: "Doe",
  salary: "35000",
  department: "Accounts",
  lastCompany: "Z",
  lastSalary: "20000",
  overallExp: "1",
  contactInfo: "123567890",
  yearGrad: "2019",
  gradStream: "ECE",
});

const emp4 = new Task({
  firstName: "Sao",
  lastName: "Avika",
  salary: "30000",
  department: "Sales",
  lastCompany: "Y",
  lastSalary: "15000",
  overallExp: "2",
  contactInfo: "1234567860",
  yearGrad: "2015",
  gradStream: "CSE",
});
const emp5 = new Task({
  firstName: "Jame",
  lastName: "roh",
  salary: "35000",
  department: "Accounts",
  lastCompany: "Z",
  lastSalary: "15000",
  overallExp: "2",
  contactInfo: "123567890",
  yearGrad: "2019",
  gradStream: "EEE",
});
const emp6 = new Task({
  firstName: "Rohan",
  lastName: "Jame",
  salary: "30000",
  department: "Technical",
  lastCompany: "Y",
  lastSalary: "15000",
  overallExp: "1",
  contactInfo: "1234567860",
  yearGrad: "2015",
  gradStream: "CSE",
});

const emp7 = new Task({
  firstName: "Jame",
  lastName: "Doe",
  salary: "35000",
  department: "Accounts",
  lastCompany: "Z",
  lastSalary: "20000",
  overallExp: "1",
  contactInfo: "123567890",
  yearGrad: "2019",
  gradStream: "ECE",
});
const emp8 = new Task({
  firstName: "Sao",
  lastName: "Avika",
  salary: "30000",
  department: "Sales",
  lastCompany: "Y",
  lastSalary: "15000",
  overallExp: "2",
  contactInfo: "1234567860",
  yearGrad: "2015",
  gradStream: "CSE",
});

const emp9 = new Task({
  firstName: "Jame",
  lastName: "Doe",
  salary: "35000",
  department: "Accounts",
  lastCompany: "Z",
  lastSalary: "15000",
  overallExp: "2",
  contactInfo: "123567890",
  yearGrad: "2019",
  gradStream: "EEE",
});

const emp10 = new Task({
  firstName: "Rohan",
  lastName: "Jame",
  salary: "30000",
  department: "Technical",
  lastCompany: "Y",
  lastSalary: "15000",
  overallExp: "1",
  contactInfo: "1234567860",
  yearGrad: "2015",
  gradStream: "CSE",
});
const emp11 = new Task({
  firstName: "Jame",
  lastName: "Doe",
  salary: "35000",
  department: "Accounts",
  lastCompany: "Z",
  lastSalary: "20000",
  overallExp: "1",
  contactInfo: "123567890",
  yearGrad: "2019",
  gradStream: "ECE",
});
const emp12 = new Task({
  firstName: "Sao",
  lastName: "Avika",
  salary: "30000",
  department: "Sales",
  lastCompany: "Y",
  lastSalary: "15000",
  overallExp: "2",
  contactInfo: "1234567860",
  yearGrad: "2015",
  gradStream: "CSE",
});
const emp13 = new Task({
  firstName: "Jame",
  lastName: "Doe",
  salary: "35000",
  department: "Accounts",
  lastCompany: "Z",
  lastSalary: "15000",
  overallExp: "2",
  contactInfo: "123567890",
  yearGrad: "2019",
  gradStream: "EEE",
});

const main = async () => {
  try {
    // const data = await Task.insertMany([
    //   emp1,
    //   emp2,
    //   emp3,
    //   emp4,
    //   emp5,
    //   emp6,
    //   emp7,
    //   emp8,
    //   emp9,
    //   emp10,
    //   emp11,
    //   emp12,
    //   emp13,
    // ]);
    console.log(data);

    // Query the collection ""employee"" and list the employees who are having salary more than 30000

    const salaryMore = await EmpModel.find({
      salary: { $gt: 30000 },
    });
    console.log(salaryMore);

    //Query the collection ""employee"" and list the employees who are having experience more than 2 years.

    const exp = await EmpModel.find({
      overallExp: { $gte: 2 },
    });

    console.log(exp);

    // Query the collection ""employee"" and list the employees who are graduated after 2015 and having experience more than 1 year

    const graduate = await EmpModel.find({
      $and: [
        {
          yearGrad: { $gt: 2015 },
        },
        {
          overallExp: { $gt: 1 },
        },
      ],
    });
    console.log(graduate);

    //Query the collection ""employee"" and update the salary of the employee whose salary is greater than 70000 to 65000.

    const updSal = await EmpModel.updateMany(
      {
        salary: { $gt: 70000 },
      },
      {
        $set: {
          salary: 65000,
        },
      }
    );
    console.log(updSal);

    //Delete all the documents from ""employee"" where last company is Y"

    const delet = await EmpModel.deleteMany({
      lastCompany: "Y",
    });
    console.log(delet);
  } catch (error) {
    console.log(error);
  }
};
main();
