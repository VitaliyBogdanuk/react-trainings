module.exports = {
  "extends": [
    "standard",
    "plugin:react/recommended"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "impliedStrict": true,
      "classes": true
    }
  },
  "env": {
    "browser": true,
    "node": true,
    "jquery": true
  },
  "plugins": [
    "react",
    "prettier",
    "eslint-plugin-standard",
    "eslint-plugin-prettier"
  ],
  "rules": {
    "no-unused-vars": [
      1,
      {
        "argsIgnorePAttern": "res|next|^err"
      }
    ],
    "max-len": [
      1,
      120,
      2,
      {
        ignoreComments: true
      }
    ]
  }
};
