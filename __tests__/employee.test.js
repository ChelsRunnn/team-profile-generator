const Employee = require('./lib/employee');

describe('Employee', () => {
    it('should return obj with fullName, role, email, horseName, stall properties', () => {
        const obj = new Employee('test test', 'Boss', 'test@gmail.com', 'Buster', '3');

        expect(obj.fullName).toBe('test test');
        // expect(obj.role).toBe('Boss');
    })
})      