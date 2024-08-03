export const Tips = () => {
    return (
        <>
            <div>
                <h1>Node.js</h1>
                <p>Check node version</p>
                <code>node -v</code>
                <p>Check all the Node.js versions you have installed on your system</p>
                <code>nvm list</code>
                <p>Installing nvm</p>
                <p>For macOS and Linux</p>
                <code>curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash                </code>
                <p> After installation, restart your terminal or run: </p>
                <code>source ~/.nvm/nvm.sh </code>
                <p>For Windows</p>
                <code>nvm-windows</code>
                <p>a version of nvm specifically for Windows. Follow the installation instructions on the <a href='https://github.com/coreybutler/nvm-windows'>nvm-windows GitHub repository</a>.</p>
                <p>To swtich the node version you are using</p>
                <code>nvm use [node_version]</code>
            </div>
            <div>
                <h1>Git Issues</h1>
                <ul>Understand Your Options
                    <li>Merge: Combine the changes from the remote branch with your local branch, creating a merge commit.</li>
                    <li>Rebase: Apply your local commits on top of the remote commits, making the history linear.                </li>
                    <li>Fast-forward only: Only update the local branch if it can be fast-forwarded without any divergence</li>
                </ul>
                <p>Merge Strategy</p>
                <code>git config pull.rebase false</code>
                <code>git pull origin main</code>
                <p>This will merge the remote main branch into your local branch and create a merge commit.</p>
                <p>Rebase Strategy</p>
                <code>git config pull.rebase true</code>
                <code>git pull origin main</code>
                <p>This will apply your local changes on top of the remote changes. You may need to resolve any conflicts that arise during the rebase.</p>
                <h5>Resolving Conflicts</h5>
                <p>If there are conflicts, Git will pause and allow you to manually resolve them. After resolving conflicts, you can continue the process:</p>
                <p>For merge:</p>
                <code>git commit</code>
                <p>For rebase:</p>
                <code>git rebase --continue</code>
            </div>
        </>
    )
}