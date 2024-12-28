<?php

namespace App\Http\Controllers;

use App\Http\Resources\StudentResource;
use App\Models\Student;
use Illuminate\Http\Request;

class DashboardController extends Controller
{
    public function searchStudent(Request $request)
    {
        $studentId = $request->query('studentId'); // Access the query parameter

        // Validate the studentId input if necessary
        $student = Student::where('studentId', $studentId)->first();

        if (!$student) {
            return response()->json(['error' => 'Student not found'], 404);
        }

        // Return the student data as JSON (or transform with a resource if needed)
        return response()->json([
            'studentData' => new StudentResource($student)
        ]);
    }
}
