Developers:
In order to debug the extension in vscode, you need to use 'npm install' at the
command line in the directory where you are keeping the extension source code to
install the items listed under devDependencies in the package.json file.

e.g.
    npm install gulp-ext-replace

Publish from a new machine:
npm install -g @vscode/vsce
vsce login konradwillmert
vsce package
vsce publish
