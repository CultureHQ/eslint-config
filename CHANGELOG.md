# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [3.1.0] - 2019-08-19

### Added

- Configuration for the new `function-call-argument-newline` eslint 6.2 rule.

## [3.0.0] - 2019-08-12

### Changed

- Bumped the `eslint-config-airbnb` dependency to `18.0.0`.

## [2.2.0] - 2019-08-09

### Changed

- Turned off the `import/no-unused-modules` rule because it currently is difficult to configure and turn off tests.
- Bumped all of the various plugin dependencies.

## [2.1.0] - 2019-06-25

### Changed

- Bumped dependencies on various plugins.

## [2.0.0] - 2019-06-24

### Added

- Compat for `eslint 6`.
- Configuration for `react/jsx-curly-newline`.

### Changed

- Turn off the `react/jsx-props-no-spreading` rule.

## [1.2.1] - 2019-05-30

### Changed

- Turned off the `react/state-in-constructor` rule. That rule is silly.

## [1.2.0] - 2019-05-28

### Changed

- Bump dependencies.
- Rules for `import/no-unused-modules`, `react/jsx-filename-extension`, `react/jsx-props-no-spreading`, `react/prefer-read-only-props`, `react/state-in-constructor`, and `react/static-property-placement`.

## [1.1.0] - 2019-03-29

### Added

- Rules for the `no-useless-catch`, `prefer-named-capture-group`, `filenames/match-regex`, `jsx-a11y/control-has-associated-label`, `import/no-named-export`, and `react/jsx-fragments`.

### Changed

- Using void to get one-line expressions to return nothing, as required by the `act` function in `react` 16.8 tests (e.g., `act(() => void fireEvent.click(getByTestId("some-id")));`). So disabling the `no-void` rule.

## [1.0.2] - 2019-03-18

### Changed

- Turn on the `ignoreRestSiblings` option within the `no-unused-vars` rule.

## [1.0.1] - 2019-03-13

### Added

- Support the `browser`, `jest`, and `node` globals.

### Changed

- Allow unused args that start with `_`.

## [1.0.0] - 2019-03-12

### Changed

- Made the plugins actual dependencies instead of dev dependencies.

## [0.3.0] - 2019-03-12

### Added

- Added the `eslint-plugin-react-hooks` dependency and its associated rule configurations.

## [0.2.0] - 2018-12-18

### Added

- Added the `eslint-plugin-filenames` dependency and its associated rule configurations.

## [0.1.0] - 2018-12-18

### Added

- Initial release. 🎉

[unreleased]: https://github.com/CultureHQ/eslint-config/compare/v3.1.0...HEAD
[3.1.0]: https://github.com/CultureHQ/eslint-config/compare/v3.0.0...v3.1.0
[3.0.0]: https://github.com/CultureHQ/eslint-config/compare/v2.2.0...v3.0.0
[2.2.0]: https://github.com/CultureHQ/eslint-config/compare/v2.1.0...v2.2.0
[2.1.0]: https://github.com/CultureHQ/eslint-config/compare/v2.0.0...v2.1.0
[2.0.0]: https://github.com/CultureHQ/eslint-config/compare/v1.2.1...v2.0.0
[1.2.1]: https://github.com/CultureHQ/eslint-config/compare/v1.2.0...v1.2.1
[1.2.0]: https://github.com/CultureHQ/eslint-config/compare/v1.1.0...v1.2.0
[1.1.0]: https://github.com/CultureHQ/eslint-config/compare/v1.0.2...v1.1.0
[1.0.2]: https://github.com/CultureHQ/eslint-config/compare/v1.0.1...v1.0.2
[1.0.1]: https://github.com/CultureHQ/eslint-config/compare/v1.0.0...v1.0.1
[1.0.0]: https://github.com/CultureHQ/eslint-config/compare/v0.3.0...v1.0.0
[0.3.0]: https://github.com/CultureHQ/eslint-config/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/CultureHQ/eslint-config/compare/v0.1.0...v0.2.0
[0.1.0]: https://github.com/CultureHQ/eslint-config/compare/a5cb7d...v0.1.0
