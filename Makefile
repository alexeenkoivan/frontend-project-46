lint:
	npx eslint .
test:
	npm test
gendiff:
	node bin/gendiff.js
test-coverage:
	npm test -- --coverage --coverageProvider=v8
install:
	npm ci
publish:
	npm publish --dry-run