NPM := npm
YARN := yarn

NAME := cv_website

## help: Print this message
.PHONY: help
help:
	@fgrep -h '##' $(MAKEFILE_LIST) | fgrep -v fgrep | column -t -s ':' | sed -e 's/## //'

## install: Install all dependencies
.PHONY: install
build:
	@$(YARN) install

## run: Run the binary
.PHONY: run
run: install
	@$(YARN) run dev

## predeploy: Prepare the website for deployment
.PHONY: predeploy
predeploy: install
	@$(YARN) run predeploy

## deploy: Deploy the website
.PHONY: deploy
deploy: install
	@$(YARN) run deploy
