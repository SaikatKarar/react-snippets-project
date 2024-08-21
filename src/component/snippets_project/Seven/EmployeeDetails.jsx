import React, { useState } from 'react';
import '../Seven/EmployeeDetails.css';

function EmployeeDetails({ employees }) {
    const [highlightedEmployees, setHighlightedEmployees] = useState([]);

    // Function to handle highlighting employees with more than 5 years of experience
    const highlightEmployees = () => {
        const highlighted = employees.filter(
            (employee) => parseInt(employee.experience) > 5
        );
        setHighlightedEmployees(highlighted);
    };

    return (
        <div>
            {employees.map((employees) => (
                <div
                    key={employees.name}
                    className={
                        highlightedEmployees.includes(employees)
                            ? 'employee highlighted'
                            : 'employee'
                    }
                >
                    <p>
                        <strong>Name:</strong> {employees.name}
                    </p>
                    <p>
                        <strong>Age:</strong> {employees.age}
                    </p>
                    <p>
                        <strong>Position:</strong> {employees.position}
                    </p>
                    <p>
                        <strong>Department:</strong> {employees.department}
                    </p>
                    <p>
                        <strong>Salary:</strong> {employees.salary}
                    </p>
                    <p>
                        <strong>Experience:</strong> {employees.experience} years
                    </p>
                </div>
            ))}
            <p>
                add a Highlight to the employee details who have more than 5 years of
                experience.
            </p>
            <button onClick={highlightEmployees}>Highlight Employees</button>
        </div>
    );
}

export default EmployeeDetails;
