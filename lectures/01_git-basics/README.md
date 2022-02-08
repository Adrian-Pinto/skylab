# Git Basics
This small guide of git have the goal to be a fast init with git without enter in a technical explanations.
# Manage repo
When i speak how we can manage the repos i will refer how we can create o delete it
## Git init repo
Commands to start new repo local or remotely
~~~bash
# Initialize new local repo
git init --yes
# Initialize new remote repo on you GitHub account interactively 
gh repo create
~~~
## Git clone repo
We can clone a existing repo locally
~~~bash
# Do a copy of repo in our local machine
gh repo clone {{userName}}/{{repoName}}
~~~
## Configure git ignore local
We can define a git ignore file locally, to these we need to create a .gitignore file and add path of ignore files
~~~bash
# In root of repo
touch .gitignore && code $_
# Now add all file or dir path what you want to ignore
# .gitignore file example
{{fileName}}
*.{{extension}}
/{{dirName}}
# Now store it and git starts applying your ignore list immediately
~~~
## Git delete repo
To delete a Git repo we need to remove the .git directory
~~~bash
# In the root of repo
rm -rf .git
~~~
# Git environments
Git can work mainly in two environments, local and remote
## Local repo
These environments refer to commit storage on our machine and have some 'areas' to organize your files and view its state. In these environment, we can find the following areas
### Working area aka workSpace
Is our main space, here we can a list of all our files on repository directory, this files can be tracked or not.
In working space also we can manage branches, add or drop file from stagging and sync our changes with remote repository.
### Staging area aka Index
In short, all the files we add to these area will be included in the next commit.
### Stash area 
This area stores different snapshots of the workspace, we can restore them later or just delete them if we don't need them anymore.
## Remote repo
This environment refers to an external server where we store our commit history, we use the remote repository to be able to do projects with other people.
# Branches
Both locally and remotely the branches let us divide our code into 'pices', these are forks of the code. What we do in the workspace affects only our current branch. All repositories start on the main branch
## Create a new branch
Normally we make a new branch from another but if we want, can do an orphan branch.
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
This command let you aggregate files or directories to the staging area and get ready to commit
~~~bash
# Add all files or directorys from working directory
git add .
# Add specific directory
git add ./{{dirName}}
# add specific file
git add ./{{fileName}} or git add ./{{dirName}}/{{fileName}}
~~~
## Commit staging area
When commit a staging area, we add a new 'node' in the branch history with the changes added before commit
~~~bash
# Commit with message
git commit -m "message"
# Commit opening our default terminal text editor
git commit
~~~
## Stash
Remember in this area we can keep snapshots of working space
### List stash
~~~bash
# List stash stored and it's index
git stash list
~~~
### Add new entry
~~~bash
# Store our current work space to a new stash entry
git stash
# Store and add a note to stash entry
git stash save "message"
~~~
### Restore a stash
With pop command we can restore stash to working space and delete it from stash list at same time
~~~bash
# Restore index 0 to work space
git stash pop
# Restore a specific space
git stash pop stash@{StashIndex} # git stash pop stash@{2}
~~~
### Delete a stash
~~~bash
# Delete index 0 of stash
git stash drop
# Delete indicated stash
git stash drop stash@{stashIndex} # git stash drop stash@{4}
~~~
# work in remote
Git let us to work with remote repositories, this is helpful when want to work with other developers, the minimal commands to do it it's the follows
## Remote
Remote let us manage the difference origins stored in our local repository
~~~bash
# See all origins of our local repo
git remote -v
# Add new origin
git remote add {{originName}} {{repoUrl}}
# Rename origin
git remote rename {{oldOriginName}} {{newOriginName}}
# Remove origin
git remote rm {{originName}}
~~~
## Fetch
Fetch allow us to sync our local and remote repo withaout make changes on local
~~~bash
# Fetch specific origin, origin is default option
git fetch {{originName}}
# Fetch specific branch and origin
git fech {{originName}}/{{branchName}}
~~~
## Pull
This command is very similar to fetch but has one important difference: pull creates a new merge when data is retrieved.
~~~bash
# Pull from default origin
git pull
# Pull specific origin
git pull {{originName}}
~~~
## Push
It allow us to upload our commits to the remote repo.
If the pushed branch not exist on remote yet you need to set upstream flag
~~~bash
# Push current branch to default origin
git push
# Push specified branch to indicated origin
git push {{originName}} {{branchName}}
# With upstream
git push --set-upstream {{originName}} {{branchName}}
~~~
## Delete a remote branch
~~~bash
# First remove local branch
git branch -D {{branchName}}
# And then remove remote branch
git push {{originName}} :{{branchName}}
~~~
## Pull request
A pull request is a process of verify and merge our changes on remote repository
We can do it un github web but thanks to Gh cli we can manage pull request directly on terminal. 
~~~bash
# Create pr interactively mode from actual branch to origin/main
gh pr create
# Create pr with title and body message
gh pr create -t {{title}} -b {{bodyMessage}}

# List of open pull request
gh pr list

# See changes of pull request
gh pr diff {{prNumber}}

# Add review to pull request
gh pr review {{prNumber}} --approve
gh pr review {{prNumber}} --comment -b {{commentBody}}
gh pr review {{prNumber}} --request-changes -b {{changesBody}}

# Merge pull request
gh pr merge {{prNumber}}

# Close pull request
gh rp close {{prNumber}}
~~~