
# Welcome

Hugo is a really easy to learn and use Static site generator!
Theres lots of useful links included below, I'll inlcude a few more for ya'll. 
Watch the video linked below and then follow the steps to get started.

***Introductory Youtube Video:*** 
https://www.youtube.com/watch?v=c7vpcqA6SEQ  (We'll be building our own "theme") 

***Step 1: Setting Up***

Install Brew: `/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)" `
(more info here: https://brew.sh)

Install NVM (Node Version Manager): `curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.35.3/install.sh | bash` 
(check out their github for more info https://github.com/nvm-sh/nvm)

Use NVM to install **Version 12** of Node.js: `nvm install 12`
(heres a decent article explaining what this is: https://www.educative.io/edpresso/what-is-nvm)

Use Brew to install HUGO: `brew install hugo` 
(as referenced here: https://gohugo.io/getting-started/quick-start/)

*you should all have git installed but just in case you don't follow the instructions at the link below
(https://gist.github.com/derhuerst/1b15ff4652a867391f03)*

***Step 2: Setting up the Repo***

Lets do the Following things using terminal if you forgot the commands no worries I'll include them to the side.

- Open  Terminal
- navigate to your desktop or wherever you what to put the project file: ` cd desktop `
- make a new directory: ` mkdir "myProjectFolder" ` (call it whatever you want, dont include the quotes) 
- move into that directory: ` cd "myProjectFolder" ` 
- now its time for git, clone this repo into your folder: ` git clone "address-copied-from-above" ` 
(if you press the clone or download button on the top of this page you can see the address to copy) 
**YOURE DONE**

navigate to your desktop or wherever you want to keep this project: ` cd `
## Useful Links

Markdown Cheatsheet: https://www.markdownguide.org/cheat-sheet/

Git Cheatsheet: https://www.atlassian.com/git/tutorials/atlassian-git-cheatsheet


**---------------------------------------------------------------------------------**

# Victor Hugo

**A Hugo boilerplate for creating truly epic websites**

This is a boilerplate for using [Hugo](https://gohugo.io/) as a static site generator and [Webpack](https://webpack.js.org/) as your asset pipeline.

Victor Hugo setup to use [PostCSS](http://postcss.org/) and [Babel](https://babeljs.io/) for CSS and JavaScript compiling/transpiling.

This project is released under the [MIT license](LICENSE). Please make sure you understand its implications and guarantees.

## Usage

### :exclamation: Prerequisites

You need to have the latest/LTS [node](https://nodejs.org/en/download/) and [npm](https://www.npmjs.com/get-npm) versions installed in order to use Victor Hugo.

Next step, clone this repository and run:

```bash
npm install
```

This will take some time and will install all packages necessary to run Victor Hugo and its tasks.

### :construction_worker: Development

While developing your website, use:

```bash
npm start
```

or for developing your website with `hugo server --buildDrafts --buildFuture`, use:

```bash
npm run preview
```

Then visit http://localhost:3000/ _- or a new browser windows popped-up already -_ to preview your new website. Webpack Dev Server will automatically reload the CSS or refresh the whole page, when stylesheets or content changes.

### :package: Static build

To build a static version of the website inside the `/dist` folder, run:

```bash
npm run build
```

To get a preview of posts or articles not yet published, run:

```bash
npm run build:preview
```

See [package.json](package.json#L8) for all tasks.

## Structure

```
|--site                // Everything in here will be built with hugo
|  |--content          // Pages and collections - ask if you need extra pages
|  |--data             // YAML data files with any data for use in examples
|  |--layouts          // This is where all templates go
|  |  |--partials      // This is where includes live
|  |  |--index.html    // The index page
|  |--static           // Files in here ends up in the public folder
|--src                 // Files that will pass through the asset pipeline
|  |--css              // Webpack will bundle imported css separately
|  |--index.js         // index.js is the webpack entry for your css & js assets
```

## Basic Concepts

You can read more about Hugo's template language in their documentation here:

https://gohugo.io/templates/overview/

The most useful page there is the one about the available functions:

https://gohugo.io/templates/functions/

For assets that are completely static and don't need to go through the asset pipeline,
use the `site/static` folder. Images, font-files, etc, all go there.

Files in the static folder end up in the web root. So a file called `site/static/favicon.ico`
will end up being available as `/favicon.ico` and so on...

The `src/index.js` file is the entrypoint for webpack and will be built to `/dist/main.js`

You can use **ES6** and use both relative imports or import libraries from npm.

Any CSS file imported into the `index.js` will be run through Webpack, compiled with [PostCSS Next](http://cssnext.io/), and
minified to `/dist/[name].[hash:5].css`. Import statements will be resolved as part of the build.

## Environment variables

To separate the development and production _- aka build -_ stages, all gulp tasks run with a node environment variable named either `development` or `production`.

You can access the environment variable inside the theme files with `getenv "NODE_ENV"`. See the following example for a conditional statement:

    {{ if eq (getenv "NODE_ENV") "development" }}You're in development!{{ end }}

All tasks starting with _build_ set the environment variable to `production` - the other will set it to `development`.

## Deploying to Netlify

- Push your clone to your own GitHub repository.
- [Create a new site on Netlify](https://app.netlify.com/start) and link the repository.

Now Netlify will build and deploy your site whenever you push to git.

You can also click this button:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/victor-hugo)

## Enjoy!! 😸
