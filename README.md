1. Create your folder 
```
mkdir [parent_folder_name}
```

2. Initialize npm
```
npm init -y
```

3. Install webpack dev dependencies
```
npm install --save-dev @babel/core @babel/plugin-proposal-class-properties @babel/preset-env @babel/preset-react babel-loader copy-webpack-plugin clean-webpack-plugin html-loader html-webpack-plugin webpack webpack-cli webpack-dev-server
```

4. Install webpack non-dev dependencies
```
npm install react react-dom react-router-dom
```

5. Create .gitignore file [(use react .gitignore template)](https://github.com/facebook/react/blob/main/.gitignore)

6. Add webpack script to package.json under the "scripts" section
```
// package.json

"scripts": {
  "build": "webpack-dev-server",
  "build:prod": "webpack -p"
},
```

7. push to git
```
git init
git add README.md
git add .
git commit -m "first commit"
git remote add origin https://github.com/thomHayner/browser-extensions-using-react-demo.git
git branch -M main
git push -u origin main
```

8. Create folders for:
  # 'src'
  # 'components'
Then create files for your pop-up / modal views:
  # foreground.html
  # 
