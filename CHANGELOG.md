# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/) and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [5.2.3] - 2021-01-13
### Added

- The `jest/no-interpolation-in-snapshots` rule.
- The `no-nonoctal-decimal-escape` rule.
- The `no-unsafe-optional-chaining` rule.
- Upgraded the `typescript-eslint/eslint-plugin` dep.

## [5.2.2] - 2020-06-26

### Added

- The `no-unreachable-loop` rule.
- The `no-promise-executor-returns` rule.
- The `jest/no-conditional-expect` rule.
- Upgraded the `eslint-plugin-jest` dep.

## [5.2.1] - 2020-05-24

### Added

- The `no-loss-of-precision` rule.
- The `no-restricted-exports` rule.
- The `no-useless-backreference` rule.
- The `jest/no-restricted-matchers` rule.
- The `default-case-last` rule.

## [5.2.0] - 2020-05-04

### Added

- The `jest/no-deprecated-functions` rule.

## [5.1.2] - 2020-02-05

### Changed

- Explicitly set `import/extensions` rule in typescript.

## [5.1.1] - 2019-12-18

### Changed

- Fix incorrectly configured `import/extensions` rule.

## [5.1.0] - 2019-12-18

### Added

- Configuration for the `no-constructor-return` rule.
- Configuration for the `no-setter-return` rule.
- Configuration for the `no-dupe-else-if` rule.
- Configuration for the `grouped-accessor-pairs` rule.
- Configuration for the `prefer-exponentiation-operator` rule.

### Changed

- The configuration for the `import/extensions` to match the correct schema.

## [5.0.0] - 2019-10-28

### Added

- Configuration for the `jest/prefer-hooks-on-top` rule.
- Configuration for the `jest/valid-title` rule.

### Changed

- Upgraded `jest` plugin to `23.x`, including changes for new rules.

## [4.1.0] - 2019-09-16

### Added

- Configuration for the `jest/require-top-level-describe` rule.
- Configuration for the `default-param-last` rule.
- Configuration for the `no-import-assign` rule.
- Configuration for the `prefer-regex-literals` rule.

### Changed

- Aligned the TypeScript rules better with the existing JavaScript rules.

## [4.0.1] - 2019-08-27

### Changed

- Support importing from `.d.ts` files.

## [4.0.0] - 2019-08-27

### Added

- Support for TypeScript, including rule configurations for the plugin.
- Support for jest, including rule configurations for the plugin.
- Configuration for the `require-atomic-updates` rule.

### Changed

- Removed the `eslint-config-airbnb` dependency and added the rules directly in.
- Pulled out the `react` configuration so that it can be optionally included.

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

[unreleased]: https://github.com/CultureHQ/eslint-config/compare/v5.2.2...HEAD
[5.2.2]: https://github.com/CultureHQ/eslint-config/compare/v5.2.1...v5.2.2
[5.2.1]: https://github.com/CultureHQ/eslint-config/compare/v5.2.0...v5.2.1
[5.2.0]: https://github.com/CultureHQ/eslint-config/compare/v5.1.2...v5.2.0
[5.1.2]: https://github.com/CultureHQ/eslint-config/compare/v5.1.1...v5.1.2
[5.1.1]: https://github.com/CultureHQ/eslint-config/compare/v5.1.0...v5.1.1
[5.1.0]: https://github.com/CultureHQ/eslint-config/compare/v5.0.0...v5.1.0
[5.0.0]: https://github.com/CultureHQ/eslint-config/compare/v4.1.0...v5.0.0
[4.1.0]: https://github.com/CultureHQ/eslint-config/compare/v4.0.1...v4.1.0
[4.0.1]: https://github.com/CultureHQ/eslint-config/compare/v4.0.0...v4.0.1
[4.0.0]: https://github.com/CultureHQ/eslint-config/compare/v3.1.0...v4.0.0
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
