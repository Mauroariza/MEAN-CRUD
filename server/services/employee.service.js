import Employee from '../models/employee.model.js';

export const generateCrudMethods = () => {
    return {
        getAll: async () => {
            return await Employee.find({});
        },
        create: async (employeeData) => {
            const employee = new Employee(employeeData);
            await employee.save();
            return employee;
        },
        read: async (id) => {
            return await Employee.findById(id);
        },
        update: async (id, updateData) => {
            return await Employee.findByIdAndUpdate(id, updateData, { new: true });
        },
        delete: async (id) => {
            return await Employee.findByIdAndDelete(id);
        }
    };
};