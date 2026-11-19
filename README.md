# Coach Digital RDC – Documentation

Documentation site (Docusaurus) of Coach Digital for the classroom observation tool of the DRC (PAAF / SERNAFOR), derived from [WBG-Coach](https://github.com/WBG-Coach). French by default, English as the second language. The multi-country version (Sierra Leone, Nepal) is kept under the git tag `avant-version-rdc`.

### Installation

```
$ npm install
```

### Local Development

```
$ npm start
```

The site opens on `http://localhost:3000/docs/`. Port 3000 is also used by the API: when the backend is running, start the documentation on another port with `npm start -- --port 3001`.

### Build

```
$ npm run build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.

### Deployment

Using SSH:

```
$ USE_SSH=true yarn deploy
```

Not using SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.
