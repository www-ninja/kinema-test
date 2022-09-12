#!/bin/sh

yarn db:migrate
yarn db:seeds

yarn start
