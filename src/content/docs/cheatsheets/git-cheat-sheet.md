---
title: Git cheat sheet
description: Some useful Git commands and tips to help you work more efficiently with Git.
---

## Initialization

### Init new repo
```bash
git init
```

### Check status
```bash
git status
```

## Adding files

```bash
# Add specific file
git add file.txt

# Add all files in the current folder (not recommended from the repo root)
git add .

# Add all files from the repo root, regardless of the current folder
git add -A
```

## Commit changes

```bash
git commit -m "Commit message"

# Amend last commit without changing the message
git commit --amend --no-edit
```

## History modification

```bash
# Undo the last commit (changes history, moves changes back to the working directory)
git reset HEAD~1

# Revert changes from a specific commit with a new commit
git revert <commitSHA>
```

## Viewing history

```bash
# Detailed history
git log

# Shortened history
git log --oneline
```

## Reset to a clean working tree

```bash
# Remove untracked files
git clean -f

# Remove untracked files and directories
git clean -fd

# Discard changes in tracked files
git reset --hard

# Discard changes in specific files/folders
git checkout filename.ext
git checkout ./folder
git checkout *.txt
```

## Stashing changes

```bash
# Stash changes
git stash
# Stash changes including untracked files
git stash -u

# List stashes
git stash list

# Apply stash and remove it from the list
git stash pop

# Apply stash without removing it from the list
git stash apply
```

## Working with branches

```bash
# Create and switch to a new branch
git checkout -b <branch-name>

# Switch to an existing branch
git checkout main

# Merge another branch into the current branch
git merge <branch-name>

# List all branches
git branch --list

# Delete a branch
git branch -D <branch-name>
```

## Pushing local repo to GitHub

1. Ensure a local repo is created
2. Create a repository on GitHub
3. Create a PAT or SSH key

```bash
# Set up the main branch
git checkout main
git remote add origin https://github.com/<user>/<repo>.git
git branch -M main
git push -u origin main

# Force push (only if no one else is working on the branch)
git push origin -f
```

5. Log in with PAT or SSH as prompted.

## Remote repositories

```bash
# View remote URLs for fetch and push
git remote -v
```

## Pulling changes

```bash
# Fetch without merging
git fetch

# Merge remote main into the current branch
git merge origin/main

# Fetch and merge in one step
git pull
```

## Reflog

```bash
# Show history including non-commit history (checkout, merge, rebase, etc.)
git reflog
```

## Clone a repository

```bash
git clone https://github.com/<user>/<repo>.git
```

## Git configuration and aliases

```bash
# Automatically set up a remote branch when pushing
git config --global --add --bool push.autoSetupRemote true

# Aliases
git config --global alias.co "checkout"
git config --global alias.copm '!git checkout main && git pull'
```

### Bash aliases

Open your `.bashrc` file to add the following aliases:

```bash
# Git default branch
alias gdefault="git symbolic-ref refs/remotes/origin/HEAD | cut -d'/' -f4"

# Common Git aliases
alias gas="git add -A && git status"
alias gs="git status"
alias grh="git reset HEAD~"
alias grhh="git reset HEAD --hard"
alias gc="git commit -m"
alias gco="git checkout"
alias gnewbr="gcopm && git checkout -b"
alias gpr="git pull -r && git --no-pager log -15 --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)[%an]%Creset' --abbrev-commit"
alias gpo="git push -u origin HEAD"
alias gac="gas && git commit -m"
alias gca="git commit --amend --no-edit"
alias gl="git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit"
alias gsu="git stash -u"
alias gsp="git stash pop"
alias gbl="git branch --list"
```

Additional functions:

```bash
function gcopm() {
  main_branch=`gdefault`
  gco $main_branch && gpr
}

function gbs() {
  git branch -a | grep "$1"
}

function gstnewbr() {
  git stash -u && gnewbr "$1" && gsp
}

function gcpp() {
  gas && gc "$1" && gpr && gpo
}

function gcp() {
  gas && gc "$1" && gpo
}
```

## Merging strategies

1. **Merge commit**: Preserves history with an additional merge commit.
2. **Squash**: Combines multiple commits into one for a cleaner history.
3. **Rebase**: Applies feature branch commits on top of the target branch, preserving history without creating a merge commit.

## GitHub settings to consider

- **Pull Requests**
  - Choose a merge strategy
  - Suggest updates for pull requests
  - Enable auto-merge
  - Automatically delete head branches

- **Branch Protection Rules**
  - Require pull request reviews before merging
  - Require up-to-date branches before merging
  - Set required status checks (e.g., GitHub Actions) to pass before merging