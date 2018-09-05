# kettil-env

### 🚧🚨🚧 Project is deprecated and it is no longer maintained 🚧🚨🚧

## Description

The module defines the variables NODE_ENV and NODE_CONFIG_DIR.

### NODE_ENV

The modules defines the NODE_ENV variable, if it is not defined.
If the (empty) file ".production" exists in the project directory, 
then the variable is defined as "production", otherwise with "development".

It is recommended that the file ".production" add to .gitignore.

### NODE_CONFIG_DIR

The modules defines the NODE_CONFIG_DIR variable, if it is not defined.
The variable is defined with the path to the config folder in the project directory.

The variable is read by the [module config](https://www.npmjs.com/package/config).

## Install

```
$ npm install kettil-env
```

## License
MIT

