# CONTRIBUTING

The goal is to make it easy for XpandX developers and contributors to effectively manage our product. We appreciate you being our contributors.

## Branching

We have 5 types of branches:

- **master:** Current version in **production**, each merge on this branch should be **tagged** and **deployed**.
- **develop:** Next prod release, should be merged on **`master`** when a version is ready.
- **feature:** Starts from **`dev`**, this is a work in progress feature that should be merged into **`dev`**
- **hotfix:** Starts from the **`master`**. Fixes a problem that cannot wait for the next release. It should be merged on **`master`** AND **`dev`**.
- **fix:**Similar with **`feature`**, starts from **`dev`**, This is a bug fix from develop that should be merged into **`dev`**.

## Explanation

### Master 

`master` is the current version in production.

The branch should be protected from committing directly, we should only merge **develop** or **fixes** on it.

Using [s**emantic**](https://semver.org/) version number *(ex: 1.0.1)*, this is how to increment:

- **Merging a hotfix**, increment the **last number**
- **Creating a new version**, *(merging dev to master)* increment the **second number**.

### Hotfix

Fixing branches in urgent cases, In an ideal world, we should never use hotfixes.  

The difference when creating a branch for a **feature** or a **hotfix** is:

- **feature** branch starts from `dev` and should be merged on `dev`
- **hotfix** branch starts from `master` and not from `dev`, and it **should be merged on `master` AND `dev`**


## ****Naming****

Use `lowercase` and `kebab-case` for branch names.