<?php

use Illuminate\Support\Facades\Route;

Route::get(
    '/{any}',
    fn () => file_get_contents(public_path('index.html'))
)->where('any', '.*');
