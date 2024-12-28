import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth }) {
    const { data, setData, post, errors } = useForm({
        program: "",
        study_center: "",
        studentId: "",
        student_Name: "",
        father_Name: "",
        mother_Name: "",
        batch: "",
        passingYear: "",
        result: "",
    });

    const onSubmit = async (e) => {
        e.preventDefault();

        post(route("student.store"));
    };

    return (
        <AuthenticatedLayout
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-xl text-gray-800 dark:text-gray-200 leading-tight">
                        Add New Student Page
                    </h2>
                </div>
            }
        >
            <Head title="Create" />

            <div className="py-2">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <form
                            onSubmit={onSubmit}
                            className="p-4 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"
                        >
                            <div className="mt-4 flex gap-4">
                                <div className="flex-1">
                                    <InputLabel
                                        htmlFor="program"
                                        value="Program"
                                    />

                                    <TextInput
                                        id="program"
                                        name="program"
                                        value={data.program}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("program", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.program}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="flex-1">
                                    <InputLabel
                                        htmlFor="study_center"
                                        value="Study Center"
                                    />

                                    <TextInput
                                        id="study_center"
                                        name="study_center"
                                        value={data.study_center}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData(
                                                "study_center",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.study_center}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="mt-4 flex gap-4">
                                <div className="flex-1">
                                    <InputLabel
                                        htmlFor="studentId"
                                        value="Student Id"
                                    />

                                    <TextInput
                                        id="studentId"
                                        name="studentId"
                                        value={data.studentId}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("studentId", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.studentId}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="flex-1">
                                    <InputLabel
                                        htmlFor="student_Name"
                                        value="Student Name"
                                    />

                                    <TextInput
                                        id="student_Name"
                                        name="student_Name"
                                        value={data.student_Name}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData(
                                                "student_Name",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.student_Name}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="mt-4 flex gap-4">
                                <div className="flex-1">
                                    <InputLabel
                                        htmlFor="father_Name"
                                        value="Father Name"
                                    />

                                    <TextInput
                                        id="father_Name"
                                        name="father_Name"
                                        value={data.father_Name}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("father_Name", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.father_Name}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="flex-1">
                                    <InputLabel
                                        htmlFor="mother_Name"
                                        value="Mother Name"
                                    />

                                    <TextInput
                                        id="mother_Name"
                                        name="mother_Name"
                                        value={data.mother_Name}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData(
                                                "mother_Name",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.mother_Name}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="mt-4 flex gap-4">
                                <div className="flex-1">
                                    <InputLabel
                                        htmlFor="batch"
                                        value="Batch"
                                    />

                                    <TextInput
                                        id="batch"
                                        name="batch"
                                        value={data.batch}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("batch", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.batch}
                                        className="mt-2"
                                    />
                                </div>

                                <div className="flex-1">
                                    <InputLabel
                                        htmlFor="passingYear"
                                        value="Passing Year"
                                    />

                                    <TextInput
                                        id="passingYear"
                                        name="passingYear"
                                        value={data.passingYear}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData(
                                                "passingYear",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.passingYear}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="mt-4 flex gap-4">
                                <div className="flex-1">
                                    <InputLabel
                                        htmlFor="result"
                                        value="Result"
                                    />

                                    <TextInput
                                        id="result"
                                        name="result"
                                        value={data.result}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("result", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.result}
                                        className="mt-2"
                                    />
                                </div>
                                <div className="flex-1"> </div>

                            </div>


                            <div className="mt-4 text-right">
                                <Link
                                    href={route("student.index")}
                                    className="bg-gray-100 py-1 px-3 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2"
                                >
                                    Cancel
                                </Link>
                                <button className="bg-emerald-500 py-1 px-3 text-white rounded shadow transition-all hover:bg-emerald-600">
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </AuthenticatedLayout>
    );
}
