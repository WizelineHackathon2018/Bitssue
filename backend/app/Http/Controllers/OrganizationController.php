<?php

namespace App\Http\Controllers;

use App\Organization;
use Illuminate\Http\Request;

class OrganizationController extends Controller
{
    
    public function index()
    {
        return Organization::with('members')->with('teams')->get();
    }


    public function store(Request $request)
    {
        $this->validate($request, [
            'name'     => 'required|min:3',
        ]);
        Organization::create($request->all());
    }

    public function show($id)
    {
        return Organization::findOrFail($id);
    }

    public function update(Request $request)
    {
        $this->validate($request, [
            'name'     => 'required|min:3'
        ]);
        Organization::findOrFail($request->id)->update($request->all());
    }
}
