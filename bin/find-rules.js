#!/usr/bin/env node
/* eslint-disable global-require, no-console, import/no-dynamic-require */

const { CLIEngine } = require("eslint");

const scopedRegex = /(@[^/]+)(\/(.+))?/;
const normalizePluginName = pluginName => {
  const match = scopedRegex.exec(pluginName);

  if (match) {
    if (match[3]) {
      // @scope/name => @scope/eslint-plugin-name
      return {
        module: `${match[1]}/eslint-plugin-${match[3]}`,
        prefix: `${match[1]}/${match[3]}`
      };
    }

    // @scope => @scope/eslint-plugin
    return {
      module: `${match[1]}/eslint-plugin`,
      prefix: match[1]
    };
  }

  // name => eslint-plugin-name
  return {
    module: `eslint-plugin-${pluginName}`,
    prefix: pluginName
  };
};

const allRuleNames = [];
const addRuleName = (rule, ruleName) => {
  const { meta = {} } = rule;

  if (!meta.deprecated) {
    allRuleNames.push(ruleName);
  }
};

const engine = new CLIEngine({ configFile: process.argv[2] });
const config = engine.getConfigForFile(__filename);

engine.getRules().forEach(addRuleName);

config.plugins.forEach(pluginName => {
  const { module, prefix } = normalizePluginName(pluginName);
  const { rules: pluginRules = {} } = require(module);

  Object.keys(pluginRules).forEach(ruleName => {
    addRuleName(pluginRules[ruleName], `${prefix}/${ruleName}`);
  });
});

const missing = allRuleNames.filter(ruleName => (
  !Object.prototype.hasOwnProperty.call(config.rules, ruleName)
));

if (missing.length > 0) {
  console.log(`Rules without configuration:\n\n  ${missing.join("\n  ")}`);
  process.exit(1);
} else {
  console.log("No rules without configuration found.");
}
