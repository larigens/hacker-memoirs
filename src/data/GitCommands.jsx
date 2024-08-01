export const GitCommands = {
    title: "Git Commands",
    link: "/git-commands",
    commands: [
        {
            command: "git add .",
            function: "Adds all changes in the current directory to the staging area for the next commit."
        },
        {
            command: "git commit -m 'message'",
            function: "Commits the staged changes to the local repository with a descriptive message."
        },
        {
            command: "git push",
            function: "Uploads local commits to the remote repository, making them available to others."
        },
        {
            command: "git pull",
            function: "Fetches and integrates changes from the remote repository into the local branch."
        },
        {
            command: "git status",
            function: "Displays the status of the working directory and the staging area, showing changes that have been staged, those that have not, and files that are not being tracked."
        },
        {
            command: "git branch",
            function: "Lists all the branches in the local repository. Shows the current branch with an asterisk."
        },
        {
            command: "git checkout branch-name",
            function: "Switches to the specified branch. Use this to move between branches."
        },
        {
            command: "git merge branch-name",
            function: "Integrates changes from the specified branch into the current branch."
        },
        {
            command: "git clone repository-url",
            function: "Creates a local copy of a remote repository specified by the URL."
        },
        {
            command: "git log",
            function: "Displays the commit history for the current branch."
        },
        {
            command: "git reset --hard",
            function: "Resets the working directory and index to the last commit, discarding all changes."
        },
        {
            command: "git fetch",
            function: "Downloads objects and refs from another repository, but does not automatically merge them with the current branch."
        },
        {
            command: "git rebase branch-name",
            function: "Reapplies commits on top of another base tip, useful for linearizing the commit history."
        }
    ]
}
