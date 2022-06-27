# Contributing

## Technology

- javascript
- node V.16
- jest
- eslint / prettier
- git-flow

## install project

to start clone the project.

```bash
# https clone
git clone https://github.com/yohann-kevin/the-minifier.git

# ssh clone
git clone git@github.com:yohann-kevin/the-minifier.git
```

then install dependencies.

```bash
npm install
```

then linked the-minifier command.

```bash
npm link
```

To check that the minifier is initialized type the following command.

```bash
the-minifier
```

if you see this menu appear, you are ready to start developing.

```bash
🗜️  Minify html, css and javascript

  A light library to minify javascript, css and html easily 

⚙️  Options ⚙️

  -h, --help       🆘 Print this usage guide                                     
  -a, --all        📝 Minify all project                                         
  -c, --css        🖌️ Minify all project css                                    
  -w, --html       🌐 Minify all project html                                    
  -j, --js         🚂 Minify all project javascript                              
  -t, --ts         🚆 Minify all project typescript                              
  -n, --no-min     ❌ Does not generate a .min file but overwrites existing files 
  -v, --version    🔍 View current install version
```

## Workflow

before starting to develop check that your modification does not already have an associated task and if it has not already been integrated into a current release.

if this is not the case create an [issue](https://github.com/yohann-kevin/the-minifier/issues?q=is%3Aissue+is%3Aopen+sort%3Aupdated-desc), tag a contributor chore and wait for its validation.

once your issues have been validated, you can therefore begin your development for the workflow we use git-flow. To initialize git-flow on the project type the following command.

```bash
git flow init
```

Then select gitflow defaults. If you have never used git-flow we advise you to read this [documentation](https://danielkummer.github.io/git-flow-cheatsheet/index.fr_FR.html).

Following these steps you will find yourself on the develop branch by default. you can therefore create a new branch starting from develop to begin the development of your feature or bugfix. Be careful, these two types of modification use two branch names and two different commands.

```bash
# feature
git flow feature start FEATURE_NAME

# bugfix
git flow hotfix start HOTFIX_NAME
```

Once your development is complete try to write concise and explicit messages for your commit using the [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/) template.

Finally you can push and create your PR in which you will mention the ticket concerned as well as a contributor chore so that it validates the PR.

Your PR may not be accepted if
- no tests have been added to check the improvement
- the modifications do not respect the code conventions in place (eslint)
- Your changes have not been validated in an issue or out of scope validated in the issue
- the documentation has not been updated to reflect the changes
- the gitlab pipeline does not pass
- If the PR may affect the integrity and proper functioning of the application

If your PR respects all these points it will be added to the current release then will be deployed on npm.

We thank you in advance for your contribution to this project. <3 ;)
