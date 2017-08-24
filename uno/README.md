1. initialize npm configurations

```
npm init --force
```

2. initialize tslint configuration

```
tslint --init
```

3. install npm packages, lite-server & browsersync, polyfill package install

```
    "@angular/common": "^4.3.6",
    "@angular/compiler": "^4.3.6",
    "@angular/core": "^4.3.6",
    "@angular/http": "^4.3.6",
    "@angular/platform-browser": "^4.3.6",
    "@angular/platform-browser-dynamic": "^4.3.6",
    "@types/angular": "^1.6.31",
    "bootstrap": "^3.3.7",
    "concurrently": "^3.5.0",
    "core-js": "^2.5.0",
    "jquery": "^3.2.1",
    "lite-server": "^2.3.0",
    "rxjs": "^5.4.3",
    "systemjs": "^0.20.18",
    "zone.js": "^0.8.17"
```

4. initialize typescript configurations

```
    cd src
    tsc --init
```

5. bs-config.json configuration

```
    {
        "server": {
            "baseDir": "src",
            "routes": {
                "/node_modules": "node_modules"
            }
        }
    }
```

6. package.json scripts configuration

```
    "serve": "lite-server -c=bs-config.json",
    "build": "tsc -p src/",
    "build:watch": "tsc -p src/ -w",
    "prestart": "npm run build",
    "start": "concurrently \"npm run build:watch\" \"npm run serve\""
```
