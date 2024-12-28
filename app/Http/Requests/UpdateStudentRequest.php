<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateStudentRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            "program" => ['string','required', 'max:255'],
            "study_center" => ['string','required', 'max:255'],
            "studentId" => ['string','required', 'max:255'],
            "student_Name" => ['string','required', 'max:255'],
            "father_Name" => ['string','required', 'max:255'],
            "mother_Name" => ['string','required', 'max:255'],
            "batch" => ['string','required', 'max:255'],
            "passingYear" => ['string','required', 'max:255'],
            "result" => ['string','required', 'max:255'],
            ];
    }
}
