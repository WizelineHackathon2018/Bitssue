<?php

use Illuminate\Support\Facades\Schema;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Migrations\Migration;

class CreateAnsweresTable extends Migration
{
    
    public function up()
    {
        Schema::create('answeres', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title');
            $table->string('content');
            $table->integer('memberId')->unsigned();
            $table->integer('idIssue')->unsigned();
            $table->foreign('memberId')->references('id')->on('members')->onDelete('cascade')->onUpdate('cascade');
            $table->foreign('idIssue')->references('id')->on('issues')->onDelete('cascade')->onUpdate('cascade');
            $table->timestamps();
        });
    }

    
    public function down()
    {
        Schema::dropIfExists('answeres');
    }
}
