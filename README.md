### Hexlet tests and linter status:
[![Actions Status](https://github.com/Dfen90/frontend-project-46/actions/workflows/hexlet-check.yml/badge.svg)](https://github.com/Dfen90/frontend-project-46/actions)
[![Node.js CI](https://github.com/Dfen90/frontend-project-46/gendiff/actions/workflows/node.js.yml/badge.svg)](https://github.com/Dfen90/frontend-project-46/gendiff/actions/workflows/node.js.yml)
[![Maintainability](https://codeclimate.com/github/Dfen90/frontend-project-46)](https://codeclimate.com/github/yourusername/gendiff/maintainability)
[![Test Coverage](https://api.codeclimate.com/v1/badges/your_badge_id/test_coverage)](https://codeclimate.com/github/Dfen90/frontend-project-46/gendiff/test_coverage)

# Gendiff

Gendiff is a command-line utility that compares two configuration files and shows the difference.

## Installation

```bash
npm install -g @hexlet/code
Usage
gendiff <filepath1> <filepath2>

```bash
./bin/gendiff.js __fixtures__/file1.json __fixtures__/file2.json

## Пример:
*** https://asciinema.org/a/1zTVhM6eRMweYFvNIVftiDs74

Дeмонстрация работы с YAML файлами:
```bash

gendiff __fixtures__/file1.yml __fixtures__/file2.yml
*** https://asciinema.org/a/UpAoisGZBUWAHMScmjHsookEH

Пример работы пакета:

```bash
npm test
*** https://asciinema.org/a/d9uP1bofNArVFXMUvZrVJxfcV

## Usage

```bash
gendiff [options] <filepath1> <filepath2>

Options:
  -V, --version        output the version number
  -f, --format <type>  output format (default: "stylish")
  -h, --help           display help for command

# Example with stylish format (default)
gendiff file1.json file2.json

# Example with plain format
gendiff --format plain file1.json file2.json

***  https://asciinema.org/a/hitv11qg6K8u41YDTdSUZ5mig