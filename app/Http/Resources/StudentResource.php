<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class StudentResource extends JsonResource
{
    public static $wrap = false;
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'program' => $this->program,
            'study_center' => $this->study_center,
            'studentId' => $this->studentId,
            'student_Name' => $this->student_Name,
            'father_Name' => $this->father_Name,
            'mother_Name' => $this->mother_Name,
            'batch' => $this->batch,
            'passingYear' => $this->passingYear,
            'result' => $this->result,
        ];
    }
}
