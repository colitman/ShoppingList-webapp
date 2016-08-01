#!/bin/bash

herokuEnv=true
sed -i "s/\(environment\.heroku=\).*\$/\1${herokuEnv}/" ./src/main/resources/application.properties