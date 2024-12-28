import Pagination from "@/Components/Pagination";
import TextInput from "@/Components/TextInput";
import SelectInput from "@/Components/SelectInput";
import InputLabel from "@/Components/InputLabel";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import TableHeading from "@/Components/TableHeading";
import { FaPencil } from "react-icons/fa6";
import { FaTrashAlt, FaPlus } from "react-icons/fa";
import { useState, useEffect } from "react";
import { CiFilter } from "react-icons/ci";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Index({
    auth,
    flash,
    students,
    queryParams = null,
    totalCount,
    currentPageCount,
    currentPage,
}) {
    queryParams = queryParams || {};

    const [showDropdown, setShowDropdown] = useState(false);
    const toggleDropdown = () => setShowDropdown(!showDropdown);

    const searchFieldChanged = (field, value) => {
        const updatedQueryParams = { ...queryParams };
        if (value) {
            updatedQueryParams[field] = value; // Use field instead of agencyName
        } else {
            delete updatedQueryParams[field]; // Use field instead of agencyName
        }
        console.log("Updated Query Params:", updatedQueryParams); // Log updated query params
        router.replace(route("student.index"), {
            method: "get",
            data: updatedQueryParams,
        });
    };

    const onKeyPress = (field, e) => {
        if (e.key === "Enter") {
            searchFieldChanged(field, e.target.value);
        }
    };

    const sortChanged = (field) => {
        let direction = "asc";
        if (field === queryParams.sort_field) {
            direction = queryParams.sort_direction === "asc" ? "desc" : "asc";
        }
        const newParams = {
            ...queryParams,
            sort_field: field,
            sort_direction: direction,
        };
        router.get(route("student.index"), newParams);
    };

    const deleteStudent = (student) => {
        if (
            !window.confirm(
                `Are you sure you want to delete the ${student.student_Name} student?`
            )
        ) {
            return;
        }
        router.delete(route("student.destroy", student.id));
    };

    const handleRowsPerPageChange = (e) => {
        const rowsPerPage = parseInt(e.target.value);
        const newParams = { ...queryParams, per_page: rowsPerPage };
        router.get(route("student.index"), newParams);
    };

    useEffect(() => {
        if (flash.message.success) {
            toast.success(flash.message.success);
        }

        if (flash.message.error) {
            toast.error(flash.message.error);
        }
    }, [flash]);

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Students Page
                    </h2>
                </div>
            }
        >
            <Head title="Students" />
            <ToastContainer />

            <div className="py-2">
                <div className="max-w-9xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg darkMode ? 'dark' : ''">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="relative flex flex-col gap-4 mb-5">
                                <div className="flex justify-between items-center gap-4">
                                    <div className="relative flex items-center gap-2">
                                        <Link
                                            href={route("student.create")}
                                            className="max-w-9xl mx-auto sm:px-6 lg:px-8 bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600 flex items-center gap-1"
                                        >
                                            <span>Add new student</span>
                                            <FaPlus size={14} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            <div className="overflow-auto">
                                <div className="mb-2 flex flex-wrap items-center justify-center sm:justify-start">
                                    <InputLabel
                                        htmlFor="show"
                                        value="Show"
                                        className="w-full sm:w-auto mb-2 sm:mb-0 sm:ml-2 text-lg"
                                    />
                                    <SelectInput
                                        className="w-full sm:w-auto mb-2 sm:mb-0 sm:ml-2"
                                        value={queryParams.per_page}
                                        onChange={handleRowsPerPageChange}
                                    >
                                        {[10, 20, 50, 100].map((perPage) => (
                                            <option
                                                key={perPage}
                                                value={perPage}
                                            >
                                                {perPage} Rows
                                            </option>
                                        ))}
                                    </SelectInput>
                                </div>
                                <table className="w-full mt-2 text-sm text-left trl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                        <tr className="text-nowrap">
                                            <TableHeading
                                                name="id"
                                                sort_field={
                                                    queryParams.sort_field
                                                }
                                                sort_direction={
                                                    queryParams.sort_direction
                                                }
                                                sortChanged={sortChanged}
                                            >
                                                ID
                                            </TableHeading>
                                            <TableHeading
                                                name="program"
                                                sort_field={
                                                    queryParams.sort_field
                                                }
                                                sort_direction={
                                                    queryParams.sort_direction
                                                }
                                                sortChanged={sortChanged}
                                            >
                                                Program
                                            </TableHeading>
                                            <TableHeading
                                                name="study_center"
                                                sort_field={
                                                    queryParams.sort_field
                                                }
                                                sort_direction={
                                                    queryParams.sort_direction
                                                }
                                                sortChanged={sortChanged}
                                            >
                                                Student Center
                                            </TableHeading>
                                            <TableHeading
                                                name="studentId"
                                                sort_field={
                                                    queryParams.sort_field
                                                }
                                                sort_direction={
                                                    queryParams.sort_direction
                                                }
                                                sortChanged={sortChanged}
                                            >
                                                Student Id
                                            </TableHeading>
                                            <TableHeading
                                                name="student_Name"
                                                sort_field={
                                                    queryParams.sort_field
                                                }
                                                sort_direction={
                                                    queryParams.sort_direction
                                                }
                                                sortChanged={sortChanged}
                                            >
                                                Student Name
                                            </TableHeading>
                                            <TableHeading
                                                name="father_Name"
                                                sort_field={
                                                    queryParams.sort_field
                                                }
                                                sort_direction={
                                                    queryParams.sort_direction
                                                }
                                                sortChanged={sortChanged}
                                            >
                                                Father Name
                                            </TableHeading>
                                            <TableHeading
                                                name="mother_Name"
                                                sort_field={
                                                    queryParams.sort_field
                                                }
                                                sort_direction={
                                                    queryParams.sort_direction
                                                }
                                                sortChanged={sortChanged}
                                            >
                                                Mother Name
                                            </TableHeading>
                                            <TableHeading
                                                name="batch"
                                                sort_field={
                                                    queryParams.sort_field
                                                }
                                                sort_direction={
                                                    queryParams.sort_direction
                                                }
                                                sortChanged={sortChanged}
                                            >
                                                Batch
                                            </TableHeading>
                                            <TableHeading
                                                name="passingYear"
                                                sort_field={
                                                    queryParams.sort_field
                                                }
                                                sort_direction={
                                                    queryParams.sort_direction
                                                }
                                                sortChanged={sortChanged}
                                            >
                                                Passing Year
                                            </TableHeading>
                                            <TableHeading
                                                name="result"
                                                sort_field={
                                                    queryParams.sort_field
                                                }
                                                sort_direction={
                                                    queryParams.sort_direction
                                                }
                                                sortChanged={sortChanged}
                                            >
                                                Result
                                            </TableHeading>

                                            <th className="px-3 py-2">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {students &&
                                            students.data.map((student) => (
                                                <tr
                                                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                                    key={student.id}
                                                >
                                                    <td className="px-3 py-2">
                                                        {student.id}
                                                    </td>
                                                    <td className="px-3 py-2">
                                                        {student.program}
                                                    </td>
                                                    <td className="px-3 py-2">
                                                        {student.study_center}
                                                    </td>
                                                    <td className="px-3 py-2">
                                                        {student.studentId}
                                                    </td>
                                                    <td className="px-3 py-2">
                                                        {student.student_Name}
                                                    </td>
                                                    <td className="px-3 py-2">
                                                        {student.father_Name}
                                                    </td>
                                                    <td className="px-3 py-2">
                                                        {student.mother_Name}
                                                    </td>
                                                    <td className="px-3 py-2">
                                                        {student.batch}
                                                    </td>
                                                    <td className="px-3 py-2">
                                                        {student.passingYear}
                                                    </td>
                                                    <td className="px-3 py-2">
                                                        {student.result}
                                                    </td>
                                                    <td className="px-3 py-2 flex text-nowrap">
                                                        <Link
                                                            href={route(
                                                                "student.edit",
                                                                student.id
                                                            )}
                                                            className="font-medium text-blue dark:text-blue-500 hover:underline mx-1"
                                                        >
                                                            <FaPencil
                                                                className="text-blue-500"
                                                                size={18}
                                                            />
                                                        </Link>
                                                        {auth.user.id === 1 && (
                                                            <button
                                                                onClick={(e) =>
                                                                    deleteStudent(
                                                                        student
                                                                    )
                                                                }
                                                                className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                                                            >
                                                                <FaTrashAlt
                                                                    className="text-red-600"
                                                                    size={18}
                                                                />
                                                            </button>
                                                        )}
                                                    </td>
                                                </tr>
                                            ))}
                                    </tbody>
                                </table>
                            </div>
                            <Pagination
                                links={students.meta.links}
                                totalCount={totalCount}
                                currentPageCount={currentPageCount}
                                currentPage={currentPage}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
