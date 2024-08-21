import '../Seven/EmployeeDetails.css';
import EmployeeDetails from './EmployeeDetails';

const employees = [
    {
        name: 'John Doe',
        age: 30,
        position: 'Software Engineer',
        department: 'Engineering',
        salary: 80000,
        experience: '5 years',
    },
    {
        name: 'Jane Smith',
        age: 28,
        position: 'Data Scientist',
        department: 'Analytics',
        salary: 90000,
        experience: '3 years',
    },
    {
        name: 'Michael Johnson',
        age: 35,
        position: 'Marketing Manager',
        department: 'Marketing',
        salary: 75000,
        experience: '8 years',
    },
    {
        name: 'Emily Brown',
        age: 32,
        position: 'HR Manager',
        department: 'Human Resources',
        salary: 70000,
        experience: '7 years',
    },
    {
        name: 'David Lee',
        age: 40,
        position: 'Senior Sales Executive',
        department: 'Sales',
        salary: 85000,
        experience: '10 years',
    },
];

export default function Seven() {
    return (
        <div className="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
            <img src="https://play.tailwindcss.com/img/beams.jpg" alt="" className="absolute top-1/2 left-1/2 max-w-none -translate-x-1/2 -translate-y-1/2" width="1308" />
            <div className="absolute inset-0 bg-[url(https://play.tailwindcss.com/img/grid.svg)] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
            <div className="relative bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 sm:mx-auto sm:rounded-lg sm:px-10">
                <div className='box'>
                    <div className="seven">
                        <h1>Employee Details</h1>
                        <EmployeeDetails employees={employees} />
                    </div>
                </div>
            </div>
        </div>
    );
}
