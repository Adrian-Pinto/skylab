# Environment setup
This is the config and tools selection i choose  for skylab bootcamp feel free to follow or use it.

 - [xCode command tools](#xcode-command-tools)
 - [Homebrew](#homebrew)
 - [zsh dotfile](#zsh-dotfile)
 - [Rectangle](#rectangle)
 - [Git](#git)
   - [Git ignore global rules](#git-ignore-global-rules)
   - [Config git](#config-git)
   - [GitHub cli](#github-cli)
 - [Node Version Manager](#nodeversionmanager)
 - [VsCode](#vscode)
   - [VsCode extensions list](#vscode-extensions-list)
 - [Postman](#postman)
 - [Sonar-Qube](#sonar-qube)
 - [Eslint](#eslint)

# XCode command tools
To use many of these apps, you need to install the xcode command tools, you have several options to do this, including doing a manual install of xcode from the App Store or installing it via the terminal. In my opinion installing it by terminal is the most comfortable option. 

`push ⌘(command) + ␣(spacebar), write iterm and push ⏎(enter)`

~~~bash
# Write or copy
xcode-select --install
# On end of installation
xcode-select -switch /Library/Developer/CommandLineTools
~~~

# Homebrew
Brew is a package manager for Mac like apt-get on Linux, it allows us to install or uninstall packages through the terminal in the most comfortable way.

Open a terminal.

~~~bash
# write or copy
/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
~~~

If necessary during the installation, it will show us some options and information to complete the process. 

# zsh dotfile
Now iTerm2 have zsh integrated, for this you can cresate a new dotfile to define the config.

`Create a new dotfile in your home directory if not exist yet`
~~~bash
touch ~./zshrc
~~~
`Open it and copy the follow config or add yours`
~~~bash
# Homebrew
export PATH="/opt/homebrew/bin:/usr/local/bin:$PATH"
# VsCode
code () { VSCODE_CWD="$PWD" open -n -b "com.microsoft.VSCode" --args $* ;}
# NVM
export NVM_DIR="$HOME/.nvm"
# - This loads nvm
[ -s "/opt/homebrew/opt/nvm/nvm.sh" ] && \. "/opt/homebrew/opt/nvm/nvm.sh"  
# - This loads nvm bash_completion
[ -s "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/opt/homebrew/opt/nvm/etc/bash_completion.d/nvm"
~~~

# Rectangle
This app bring us the capacity to manage windows with keyboard shortcuts, install it manually on this [link](https://rectangleapp.com/)

# Git
Git is a version control tool, on mac when xCode command tool is installed, git will also be installed, we can check if git is installed with the following command. 

~~~bash
git --version
~~~
If this command returns an error, we can install git through brew
~~~bash
brew install git
~~~
## Config git
The first step before installation is do a configuration, in my case y chose do that with a dotfile, you con check my template [here](./.gitconfig), you need to complete these template with you info and store it in the user directory.
~~~bash
touch ~/.gitconfig
vim ~/.gitconfig
# Copy content of example in your file and store it
~~~
## Git ignore global rules
Git have the possibility of ignore certain dir, files or extensions to avoid then durin our devs.
You can found the dotfile i use [here](./.gitignore_global)
~~~bash
touch ~/.gitignore_global
vim ~/.gitignore_global
# Copy content of example in your file and store it
~~~
## GitHub cli
These utility let you manage github over terminal.
You can take a look to the manual [here](https://cli.github.com/manual/)
~~~bash
brew install gh
~~~

# NodeVersionManager
NVM is a utility to manage node and npm versions in a simple way you can see more info [here](https://github.com/nvm-sh/nvm), but for now let's install it through brew following these steps.

~~~bash
brew update
brew install nvm
# Install last version of node and npm 
nvm install node
~~~

# VsCode
Text editor with git and extensions build-in, install it manually on this [link](https://code.visualstudio.com/Download)

## VsCode extensions list
You can find these extensions on listed links or in [Extensions](https://code.visualstudio.com/docs/editor/extension-marketplace) tab of VsCode

   - [Better Comments](https://marketplace.visualstudio.com/items?itemName=aaron-bond.better-comments)
   - [Bracket PAir Colorizer](https://marketplace.visualstudio.com/items?itemName=CoenraadS.bracket-pair-colorizer)
   - [Eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
   - [Error Lens](https://marketplace.visualstudio.com/items?itemName=usernamehw.errorlens)
   - [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph)
   - [lucy](https://marketplace.visualstudio.com/items?itemName=juliettepretot.lucy-vscode)
   - [Markdown All in One](https://marketplace.visualstudio.com/items?itemName=yzhang.markdown-all-in-one)
   - [Material icon Theme](https://marketplace.visualstudio.com/items?itemName=PKief.material-icon-theme)
   - [Rest Client](https://marketplace.visualstudio.com/items?itemName=humao.rest-client)
   - [live server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer)
   - [live share](https://marketplace.visualstudio.com/items?itemName=MS-vsliveshare.vsliveshare)

# Postman
API test platform, let you make, import and export API test easy, download it on this [link](https://www.postman.com/)

# Sonar-Qube
These app search in your code to find possible bad practices, code smells and check code coverage in your test, lets install it through brew
~~~bash
brew install java-service-wrapper
brew install openjdk@11
brew install sonarqube
# To check if install go fine
sonar
# This command return a list of SonarQube commands
~~~

# Eslint
This let us check and format our code follow a list of rules, we need to install and do little config on VsCode.
~~~bash
npm install --global eslint
~~~
Now we add some config to vscode
~~~bash
# Open VsCode config.json
code ~/Library/Application\ Support/Code/User/settings.json
~~~
And add these options
~~~json
{
  "workbench.statusBar.visible": true,
  "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  "editor.formatOnSave": true,
  "eslint.format.enable": true,
  "editor.codeActionsOnSave": {
      "source.fixAll.eslint": true
  },
  "eslint.validate": [
      "javascriptreact",
      "typescriptreact",
      "javascript",
      "typescript"
  ],
  "[javascriptreact]": {
      "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  },
  "[typescriptreact]": {
      "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  },
  "[javascript]": {
      "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  },
  "[typescript]": {
      "editor.defaultFormatter": "dbaeumer.vscode-eslint",
  }
}
~~~