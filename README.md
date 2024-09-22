### Hexlet tests and linter status:
# Gendiff

[![Actions Status](https://github.com/Dfen90/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Dfen90/frontend-project-46/actions)
[![Node.js CI](https://github.com/Dfen90/frontend-project-46/actions/workflows/node.js.yml/badge.svg)](https://github.com/Dfen90/frontend-project-46/actions/workflows/node.js.yml)
[![Maintainability](https://api.codeclimate.com/v1/badges/e70f7773f07ad9ecfbbf/maintainability)](https://codeclimate.com/github/Dfen90/frontend-project-46/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/e70f7773f07ad9ecfbbf/test_coverage)](https://codeclimate.com/github/Dfen90/frontend-project-46/test_coverage)

Gendiff is a command-line utility that compares two configuration files and shows the difference.

## Installation

```bash
npm install -g @hexlet/code

Usage
gendiff [options] <filepath1> <filepath2>

Options:
  -V, --version        output the version number
  -f, --format <type>  output format (default: "stylish")
  -h, --help           display help for command

Examples
Default usage (stylish format):

gendiff file1.json file2.json

*** https://asciinema.org/a/1zTVhM6eRMweYFvNIVftiDs74

Using with YAML files:

gendiff file1.yml file2.yml

*** https://asciinema.org/a/UpAoisGZBUWAHMScmjHsookEH

Using plain format:

gendiff --format plain file1.json file2.json

*** https://asciinema.org/a/hitv11qg6K8u41YDTdSUZ5mig


Using JSON format:

gendiff --format json file1.json file2.json

*** https://asciinema.org/a/hitv11qg6K8u41YDTdSUZ5mig
*** 

Running Tests
To run the tests, use the following command:

npm test

*** https://asciinema.org/a/d9uP1bofNArVFXMUvZrVJxfcV
