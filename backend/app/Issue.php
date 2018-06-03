<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Issue extends Model
{
    protected $table = 'issues'
    public $timestamps = true;    

    protected $fillable = [
        'idMember','','title', 'content'
    ];

    public function asnweres(){
        return $this->hasMany('App\Answere', 'idIssue')
    }
}
