<?php

namespace App\Http\Controllers;

use App\Models\Student;
use App\Http\Requests\StoreStudentRequest;
use App\Http\Requests\UpdateStudentRequest;
use App\Http\Resources\StudentResource;
use Carbon\Carbon;


class StudentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $query = Student::query();

        $sortField = request("sort_field", "created_at");
        $sortDirection = request("sort_direction", "desc");


        $perPage = request('per_page', 10); // Default to 10 if not provided
        // Update $perPage to the selected value from the dropdown
        if (in_array($perPage, [10, 20, 50, 100])) {
            $perPage = (int) $perPage;
        } else {
            $perPage = 10; // Default to 10 if an invalid value is provided
        }


        $students = $query->orderBy($sortField, $sortDirection)->paginate($perPage)->onEachSide(1);

        $students->appends(request()->only(['studentId',  'sort_field', 'sort_direction', 'per_page']));

        $totalCount = $students->total();

        // Get the count of positions being displayed on the current page
        $currentPageCount = $students->count();
        $currentPage = $students->currentPage();

        return inertia("Student/Index", [
            "students" => StudentResource::collection($students),
            'queryParams' => request()->query() ?: null,
            'success' => session('success'),
            'totalCount' => $totalCount,
            'currentPageCount' => $currentPageCount,
            'currentPage' => $currentPage,
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return inertia("Student/Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(StoreStudentRequest $request)
    {
        $data = $request->validated();

        Student::create($data);

        return to_route('student.index')->with(['success' => 'Student Successfully created!']);
    }

    /**
     * Display the specified resource.
     */
    public function show(Student $student)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Student $student)
    {
        return inertia("Student/Edit", [
            'student' => new StudentResource($student),
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateStudentRequest $request, Student $student)
    {
        $studentId = $student->studentId;
        $data = $request->validated();
        $data['updated_at'] = Carbon::now();
        $student->update($data);

        return to_route('student.index')->with(['success' => "Student \"$studentId\" updated successfully"]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(Student $student)
    {
        $studentId = $student->studentId;
        $student->delete();
        return to_route('student.index')->with(['success' => "Student \"$studentId\" was deleted Successfully!"]);
    }
}
