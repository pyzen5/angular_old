1. initialize npm configurations

npm init --force

2. initialize tslint configuration

tslint --init

3. install npm packages

npm install zone.js --save
npm install rxjs --save
npm install @angular/core --save
npm install @angular/common --save
npm install @angular/platform-browser --save
npm install @angular/compiler --save
npm install @angular/platform-browser-dynamic --save
npm install @angular/http --save

npm install @types/angular --save

initialize typescript configurations

cd src
tsc --init

5. lite-server & browsersync configuration

npm install lite-server --save
npm install concurrently --save
>> bs-config.json configuration
{
  "server": {
    "baseDir": "src",
    "routes": {
      "/node_modules": "node_modules"
    }
  }
}

package.json scripts configuration

    "serve": "lite-server -c=bs-config.json",
    "build": "tsc -p src/",
    "build:watch": "tsc -p src/ -w",
    "prestart": "npm run build",
    "start": "concurrently \"npm run build:watch\" \"npm run serve\""

7. polyfill package install
npm install core-js --save
npm install systemjs --save
