<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Answere extends Model
{
    protected $table = 'asweres';   
    public $timestamps = true;

    protected $fillable = [
        'idMember','idIssue','content'
    ];
    
}
