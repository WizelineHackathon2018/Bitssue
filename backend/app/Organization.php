<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Organization extends Model
{
    protected $table = 'organizations';   
    public $timestamps = true;

    protected $fillable = [
        'name'
    ];
    
    public function members(){
        return $this->hasMany('App\Member', 'idOrg');
    }

    public function teams(){
        return $this->hasMany('App\Team', 'idOrg');
    }
    
}
