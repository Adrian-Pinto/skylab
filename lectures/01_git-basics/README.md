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
# Make a copy of repo in our local machine
gh repo clone {{userName}}/{{repoName}}
~~~
## configure git ignore local
We can define a git ignore file locally, to these we need to create a .gitignore file and add paht of ignore files
~~~bash
# In root of repo
touch .gitignore && code $_
# Now add all file or dir path what you want to ignore
# .gitignore file example
{{fileName}}
*.{{extension}}
/{{dirName}}
# Now store it and git start apply you ignore list immediately
~~~
## git delete repo
To delete a Git repo we need to remove the .git directory
~~~bash
# In the root of repo
rm -rf .git
~~~
# Git environments
Git can work in two principals environments, local and remote
## Local repo
These environments refer to commit storage on our machine and have some 'areas' to organize your files and view its state. In these environment, we can find the following areas
### Working area aka workSpace
Here is our main space here we can a list of all our files on repository directory, this files can be tracked or not.
Also in working space we can manage branches, add or drop file from stagging and sync our changes with remote repository
### Staging area aka Index
In short, all the files we add to these area will be included in the next commit.
### Stash area 
This area stores different snapshots of the workspace, we can restore them later or just delete them if we don't need them anymore.
## Remote repo
This environment refers to an external server where we store our commit history, we use the remote repository to be able to do projects with other people.
# Branches
Both locally and remotely the branches let us divide our code into branches, these are forks of the code. What we do in the workspace affects only our current branch. All repositories start on the main branch
## Create a new branch
Normally we are make a new from from other branch but if we want, can do a orphan branch.
~~~bash
# Create a new branch from actual branch
git branch {{branchName}}
# Create a branch and switch to it
git checkout -b {{brancName}}
# Create a orphan brnach
git checkout --orphan {{branchName}}
~~~
## Delete a branch
~~~bash
# Delete a branch
git branch -d {{branchName}}
~~~
## List brnaches
~~~bash
# List branches
git branch
~~~
## Change between branches
~~~bash
# Change to indicated branch
git checkout {{branchName}}
# Or
git switch {{branchName}}
# Return to the previous branch
git switch -
~~~
## Merge branches
Exist some merge strategies to join and mix our commits history but for now we only attack the way we can keep all commits history.
~~~bash
# Merge changes of indicated branch to our current branch
git merge --no-ff {{branchName}} 
~~~
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