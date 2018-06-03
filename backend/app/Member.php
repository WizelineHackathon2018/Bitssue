<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Member extends Model
{
    protected $table = 'members'; 
    public $timestamps = true;  
    
    protected $fillable = [
        'name', 'idOrg', 'idTeam', 'username', 'password'
    ];
    // public function organization(){
    //     return $this->belongsTo('App\Organization');
    // }

    public function issues(){
        return $this->hasMany('App\Issues', 'idMember');
    }
}
