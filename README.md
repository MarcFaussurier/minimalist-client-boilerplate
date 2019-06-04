# Awesome minimalist opinionated boilerplate (TRULY INDEPENT YET MODERN NODEJS CLIENT)

This repo is a fork of https://github.com/skyllo/react-hot-express from skyllo (https://github.com/skyllo). 
I added everything that was missing for building what is, in my opinion, the perfect boilerplate.
Still in my opinion, the perfect boilerplate have to be client-only because nodejs server side rendering sucks and have to be replaced with a rust server api & static html generation until a universal Rust become ready. @see https://www.arewewebyet.org/.

This is a modern react / redux application with both hmr and static index.html that can be hosted in any external server (or example apache / ngix ) even while developement. Beause yes, webpack magic is cool, but when dealing with really custom projects, it simply sucks, as nodejs SSR do. The HMR client is here truly indepent to its server.

Main use case of this boilerplate could be cordova, electron, and all other use cases that do not need server side rendering. In my opinion, nodejs should not be used for server-side in complex applications because it is simply not at the same level in term of performances & safety as Rust (Actix), Go, and all the next-gen http server platforms. 

If I were building a web-app, I would personnally prefer to generate static HTML files for SSR once or twice a month using the client application instead of slowing the server down for "Universal Javascript". The future seems to be "Universal Rust", but because of wasm limitations, it looks like we are stuck with a react front end for now.

If you share my opinions, if you want modern cross platform app with fast and scalable servers, you may want to read next section.

# Get started 

Development
```
git clone ... && cd ... && yarn && yarn dev
```
Please note that the dev server with HMR can be coupled with any other http server for serving the index.html file (such as apache) as it supports CROS.

Production
```
yarn build && yarn start
```
Please note that the production express server can be replaced with any other server.

# Dependencies
- Typescript
- Webpack 
- Redux
- Semantic UI
- React 
- React Hot Loader
- Express
- Sass / PostCSS
- MiniCssExtractPlugin
- TSlint
