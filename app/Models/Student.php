<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Student extends Model
{
    /** @use HasFactory<\Database\Factories\StudentFactory> */
    use HasFactory;

    protected $fillable = [
        'id',
        'program',
        'study_center',
        'studentId',
        'student_Name',
        'father_Name',
        'mother_Name',
        'batch',
        'passingYear',
        'result'
    ];
}
