<?php

namespace App\Http\Middleware;

use Illuminate\Foundation\Http\Middleware\VerifyCsrfToken as Middleware;

class VerifyCsrfToken extends Middleware
{
    /**
     * The URIs that should be excluded from CSRF verification.
     *
     * @var array<int, string>
     */
    protected $except = [
        //We add an exception to ignore token verification, for this URL only, in order to be able to test our route in insomnia
        "http://0.0.0.0:8080/api/spots/create",
        "http://0.0.0.0:8080/api/comments/add"
    ];
}
