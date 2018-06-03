<?php

namespace App\Http\Controllers;

use App\Issue;
use Illuminate\Http\Request;

class IssueController extends Controller
{
    

    public function store(Request $request)
    {
        $this->validate($request, [
            'memberId'    => 'required',
            'title'       => 'required',
            'content'     => 'required',
        ]);
        Issue::create([
            $request->all()
        ]);
    }

    public function show($id)
    {
        return Issue::findOrFail($id);
    }

    public function update(Request $request)
    {
        $this->validate($request, [
            'memberId'    => 'required',
            'title'       => 'required',
            'content'     => 'required',
        ]);
        Issue::findOrFail($request->id)->update($request->all())
    }

}
