BUILD_DIR = .vuepress/dist/
NPM = npm
CNAME = aeternity.com
REPO = git@github.com:aeternity/aeternity.github.io.git

all: clean build

build:
	$(NPM) run build

dev:
	$(NPM) run dev

clean:
	rm -rf $(BUILD_DIR)

deploy: build
	cd $(BUILD_DIR); \
	echo $(CNAME) > CNAME; \
	rm -rf .git && \
	git init && \
	git add . && \
	git commit -m 'Deploy to GitHub Pages' && \
	git push --force $(REPO) master:master

.PHONY: build deploy
