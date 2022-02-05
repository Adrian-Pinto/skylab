# Git Basics
This small guide of git have the goal to be a fast init with git without enter in a technical explanations.
# Manage repo
When i speak how we can manage the repos i will refear how we can create o delete it
## Git init repo
Commands to start new repo local or remotely
~~~bash
# Initialize new local repo
git init --yes
# Initialize new remote repo on you GitHub account interactively 
gh repo create
~~~
## Git clone repo
web can clone a existing repo locally
~~~bash
# Create a copy of repo in our local machine
gh repo clone {{userName}}/{{repoName}}
~~~
## configure git ignore local
We can define a git ignore file locally on a repo, to these we need to create a .gitignore file and add paht of ignore files
~~~bash
# In root of repo
touch .gitignore && code $_
# Now add all file or dir path what you want to ignore
# .gitignore file
{{fileName}}
*.{{extension}}
/{{dirName}}
# Now store it and git start apply you ignire list immediately
~~~
## git delete repo
To delete a Git repo we need to remove the .git directory
~~~bash
# In the root of repo
rm -rf .git
~~~
# Git environments
## local repo
### stash area
### work directory
### staging area aka Index
## remote repo
# Branches
## create a new branch
## delete a branch
## change though branches
## merge branches
# Basics commands
## status
See the status of your work directory
~~~bash
git status
~~~
and returns someting like this
~~~bash
# Actual branch
On branch lec 
# Diff from remote repo commits
Your branch is ahead of 'origin/lec' by 1 commit.
  (use "git push" to publish your local commits) 
# Files staged to commit or files tracked to add
Changes not staged for commit:
  (use "git add <file>..." to update what will be committed)
  (use "git restore <file>..." to discard changes in working directory)
        modified:   lectures/01_git-basics/README.md
~~~
## Add files to staging area
This command let you agregate files or directorys to the stage area and get ready to commit
~~~bash
# Add all files or directorys from working directory
git add .
# Add specific directory
git add ./{{dirName}}
# add specific file
git add ./{{fileName}} or git add ./{{dirName}}/{{fileName}}
~~~
## Commit staging area
When commit a staging area, we add a new 'node' in the branch history with the changes added before
~~~bash
# Commit with message
git commit -m "message"
# Commit opening our default terminal text editor
git commit
~~~
## stash
### list
### stash
### pop
### drop
# work in remote
## pull
## push
## fetch
## pull request