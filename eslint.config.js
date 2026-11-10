import github from 'eslint-plugin-github'
import customElements from 'eslint-plugin-custom-elements'
import {fixupPluginRules} from '@eslint/compat'

const withSchema = rule => ({...rule, meta: {...rule.meta, schema: rule.schema}})

// NOTE: eslint-plugin-custom-elements is not compatible with eslint 9.
//       It defines schema outside of meta, so the rule options are rejected, and it uses context APIs removed in eslint 9.
const customElementsPlugin = fixupPluginRules({
  ...customElements,
  rules: {
    ...customElements.rules,
    'file-name-matches-element': withSchema(customElements.rules['file-name-matches-element']),
    'tag-name-matches-class': withSchema(customElements.rules['tag-name-matches-class']),
  },
})

export default [
  {
    ignores: ['dist', 'types'],
  },
  github.getFlatConfigs().recommended,
  github.getFlatConfigs().browser,
  ...github.getFlatConfigs().typescript,
  {
    plugins: {'custom-elements': customElementsPlugin},
    rules: {
      ...customElements.configs.recommended.rules,
      'custom-elements/file-name-matches-element': ['error', {suffix: 'Element'}],
      'custom-elements/tag-name-matches-class': ['error', {suffix: 'Element'}],
    },
    languageOptions: {
      globals: {
        CustomElementElement: 'readonly',
      },
    },
  },
]
