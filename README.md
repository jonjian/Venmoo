# Project Name

<!-- > Insert Pithy project description here -->

## Team

  -Jonathan Jian
  -Aaron Dean
  -Jake Luton
  -Alex Wein

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)
    1. [Installing Dependencies](#installing-dependencies)
    1. [Tasks](#tasks)
1. [Roadmap](#roadmap)
1. [Contributing](#contributing)

## Usage

> Some usage instructions

## Requirements

- Node 6.4.x
- Redis 2.6.x
- Postgresql 9.1.x
- etc
- etc

## Development
To set up Database:
  1. Install postgres using the following commands, with homebrew installed:
  brew update 
  brew install postgresql
  2. To start a postgresql server, run the following command in its own terminal tab.
  postgres -D /usr/local/var/postgres start
  3. To run the schema file and generate the database, run the following command from the Venmoo root directory:
  psql -f ./database/schema.sql postgres
  4. To open the postgres shell and directly manipulate the database, enter the following from the command line:
  psql postgres

  A cheatsheet of psql commands can be found here: http://www.postgresonline.com/downloads/special_feature/postgresql83_psql_cheatsheet.pdf

### Installing Dependencies

From within the root directory:

```sh
npm install -g bower
npm install
bower install
```

### Roadmap

View the project roadmap [here](LINK_TO_DOC)


## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for contribution guidelines.
