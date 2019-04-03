<?php

namespace App\Http\Middleware;

use Closure;

class FrameHeadersMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  \Closure $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $response = $next($request);

        //$response->headers->set('Access-Control-Allow-Origin', 'http://my-laravel-exchanger');
        //$response->headers->set('Access-Control-Allow-Headers', 'X-CSRF-TOKEN','X-Requested-With');


        return $response;
    }
}
