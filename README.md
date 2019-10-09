1. clone the test repo, run `npm i` and `npm run build` inside it;
2. open `./dist/index.html` in the browser — source map is working correctly;
3. open `webpack.config.js`, change `entry` name, run `npm run build` again;
4. open `./dist/index.html` in the browser — source map doesn't work. Check the source map itself — the `sources` property contains wrong info;
5. delete `node_modules`, reinstall dependencies, build project again — source map starts to work correctly.
