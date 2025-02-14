#!/usr/bin/env bash
# exit on error

set -o errexit 

# Install dependencies
bundle install

# Install and build JavaScript
yarn install
yarn build

# Asset compilation
bundle exec rake assets:precompile
bundle exec rake assets:clean

# Database migrations
bundle exec rake db:migrate