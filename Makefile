lint:
	npx eslint .
test:
	npm test
gendiff:
	node bin/gendiff.js
test-coverage:
	npx jest --coverage