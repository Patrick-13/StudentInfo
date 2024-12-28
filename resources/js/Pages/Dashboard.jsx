import { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import axios from "axios";

export default function Dashboard({ studentData, error }) {
    const [studentId, setStudentId] = useState("");
    const [studentInfo, setStudentInfo] = useState(null); // To store student data
    const [searchError, setSearchError] = useState(""); // To store error messages

    // Function to handle the search
    const searchStudent = async () => {
        if (studentId) {
            try {
                // Sending the request to the backend to get student data by studentId
                const response = await axios.get(`/dashboard/search-student`, {
                    params: { studentId }, // Send studentId as a query parameter
                });

                // Update state with the fetched student data
                setStudentInfo(response.data.studentData);
                setSearchError(""); // Clear previous error if any
            } catch (error) {
                console.error("Error fetching student data:", error);
                if (error.response && error.response.status === 404) {
                    setSearchError("Student not found.");
                } else {
                    setSearchError("Error fetching student data.");
                }
                setStudentInfo(null); // Clear previous student data
            }
        }
    };

    return (
        <AuthenticatedLayout
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200">
                    Dashboard
                </h2>
            }
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div className="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="flex justify-center items-center">
                                <input
                                    type="text"
                                    value={studentId}
                                    onChange={(e) =>
                                        setStudentId(e.target.value)
                                    }
                                    placeholder="Enter Student ID"
                                    className="p-2 border border-gray-300 rounded"
                                />
                                <button
                                    onClick={searchStudent}
                                    className="ml-2 p-2 bg-blue-500 text-white rounded"
                                >
                                    Search
                                </button>
                            </div>

                            {searchError && (
                                <div className="mt-6 text-red-500">
                                    {searchError}
                                </div>
                            )}

                            {studentInfo && (
                                <div className="mt-6">
                                    <h3 className="text-lg font-bold">
                                        Student Details:
                                    </h3>
                                    <ul>
                                        <li>
                                            <strong>Program:</strong>{" "}
                                            {studentInfo.program}
                                        </li>
                                        <li>
                                            <strong>Study Center:</strong>{" "}
                                            {studentInfo.study_center}
                                        </li>
                                        <li>
                                            <strong>Name:</strong>{" "}
                                            {studentInfo.student_Name}
                                        </li>
                                        <li>
                                            <strong>Father's Name:</strong>{" "}
                                            {studentInfo.father_Name}
                                        </li>
                                        <li>
                                            <strong>Mother's Name:</strong>{" "}
                                            {studentInfo.mother_Name}
                                        </li>
                                        <li>
                                            <strong>Batch:</strong>{" "}
                                            {studentInfo.batch}
                                        </li>
                                        <li>
                                            <strong>Passing Year:</strong>{" "}
                                            {studentInfo.passingYear}
                                        </li>
                                        <li>
                                            <strong>Result:</strong>{" "}
                                            {studentInfo.result}
                                        </li>
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
