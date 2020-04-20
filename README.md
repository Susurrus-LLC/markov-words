# Markov Words

[![TypeScript Standard Style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com)
[![Release Version](https://img.shields.io/github/release/Susurrus-LLC/markov-words.svg)](https://github.com/Susurrus-LLC/markov-words/releases)
[![License](https://img.shields.io/github/license/Susurrus-LLC/markov-words.svg)](https://github.com/Susurrus-LLC/markov-words/blob/master/LICENSE)

1. [Overview](#overview)
2. [Deployment](#deployment)
3. [Versioning](#versioning)
4. [Contributing](#contributing)
5. [Authors](#authors)
6. [License](#license)

## Overview

Markov Words is a word generator based on Markov chains. With a given input text, the tool will produce gibberish output text with words constructed with similar spelling conventions to the input text. This can be used to produce nonsense text for linguistic research, create a naming language for works of fiction, and more.

## Deployment

Markov Words is a web-based tool built on JavaScript (compiled from TypeScript), and it does not use a database, so it can be installed almost anywhere without need for running a back-end server. You simply need to run the build command to build the files, then deploy to your site.

1. Download and unpack the [latest release](https://github.com/Susurrus-LLC/markov-words/releases/latest).
2. Install the dependencies with `yarn`.
3. Build the project with `yarn build`.
4. Copy the contents of the resulting /build folder onto your server. You're done!

## Versioning

Markov Words uses an unstable master branch. The master branch is used for development, while stable versions are provided as releases. Version numbering is similar to [Semantic Versioning](http://semver.org/); versions are listed as x.y.z., wherein z refers to bug fixes and very minor updates, y refers to minor additions and updates to functionality, and x refers to major updates or overhauls to the program that significantly impact workflow or the use of the program.

For a full list of all changes made in each version of Markov Words, see the [Changelog](https://github.com/Susurrus-LLC/markov-words/blob/master/CHANGELOG.md).

## Contributing

Please review the [contributing guidelines](https://github.com/Susurrus-LLC/markov-words/blob/master/.github/CONTRIBUTING.md) and [code of conduct](https://github.com/Susurrus-LLC/markov-words/blob/master/.github/CODE_OF_CONDUCT.md) before contributing.

## Authors

- [Ian A. Cook](https://github.com/nai888)

See also the list of [people who have contributed](../../graphs/contributors) to this project.

## License

Markov Words is licensed under the [GNU Affero General Public License v3.0](https://choosealicense.com/licenses/agpl-3.0/).
