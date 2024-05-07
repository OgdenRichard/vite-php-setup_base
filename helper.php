<?

function vite_asset($dev = true)
{
    if ($dev) {
        return '<script type="module">
        import RefreshRuntime from "http://localhost:5173/vite/@react-refresh"
        RefreshRuntime.injectIntoGlobalHook(window)
        window.$RefreshReg$ = () => { }
        window.$RefreshSig$ = () => (type) => type
        window.__vite_plugin_react_preamble_installed__ = true
    </script>

    <script type="module" src="http://localhost:5173/vite/@vite/client"></script>
    <script type="module" src="http://localhost:5173/vite/main.jsx" defer></script>';
    } else {
        return asset_prod('main.jsx');
    }
}

function asset_prod(string $entry)
{
    $data = json_decode(file_get_contents('./public/assets/.vite/manifest.json'), true);
    $file = $data[$entry]['file'];
    $css = $data[$entry]['css'];
    $html = "<script type='module' src='/public/assets/{$file}' defer></script>";
    foreach ($css as $cssFile) {
        $html .= "<link rel='stylesheet' href='/public/assets/{$cssFile}'/>";
    }
    return $html;
}