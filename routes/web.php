<?php

use Illuminate\Support\Facades\Route;

// Serve SPA routes (everything except files)
Route::get('/{any}', function () {
    return file_get_contents(public_path('dist/index.html'));
})->where('any', '.*');