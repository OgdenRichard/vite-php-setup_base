<?php
// This would be your framework default bootstrap file

// During dev, this file would be hit when accessing your local host, like:
// http://vite-php-setup.test



?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Vite App</title>
    <script type="module">
        import RefreshRuntime from "http://localhost:5173/vite/@react-refresh"
        RefreshRuntime.injectIntoGlobalHook(window)
        window.$RefreshReg$ = () => { }
        window.$RefreshSig$ = () => (type) => type
        window.__vite_plugin_react_preamble_installed__ = true
    </script>

    <script type="module" src="http://localhost:5173/vite/@vite/client"></script>

    <meta charset="UTF-8" />
    <link rel="icon" type="image" href="/favicon.ico" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Wealth Health</title>
</head>

<body>
    <div id="root" class="root"></div>
    <script type="module" src="http://localhost:5173/vite/main.jsx"></script>
</body>

</html>