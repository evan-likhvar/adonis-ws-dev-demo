<!doctype html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <title>Laravel</title>
    <script src="{{ asset('js/app.js') }}" defer></script>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet">
</head>
<body>
<div class="flex-center position-ref full-height">
    @if (Route::has('login'))
        <div class="top-right links">
            @auth
                <a href="{{ url('/home') }}">Home</a>
            @else
                <a href="{{ route('login') }}">Login</a>

                @if (Route::has('register'))
                    <a href="{{ route('register') }}">Register</a>
                @endif
            @endauth
        </div>
    @endif
    <div class="content">
        <div id="app">
            <div class="row">
                <div class="col-sm-4">
                    <div class="card">
                        <order-book-buy-component></order-book-buy-component>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <order-book-sell-component></order-book-sell-component>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <market-history-component></market-history-component>
                    </div>
                </div>
            </div>
            <h1></h1>
            <div class="row">
                <div class="col-sm-4">
                    <div class="card">
                        <market-stat-component></market-stat-component>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="card">
                        <markets-component></markets-component>
                    </div>
                </div>
                <div class="col-sm-4">
                    <main-component></main-component>
                </div>
            </div>

        </div>

    </div>
</div>
</body>
</html>
