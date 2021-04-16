module.exports = {
  moduleFileExtensions: [
    'js',
    'ts',
    'json',
    'vue'
  ],
  transform: {
    '^.+\\.vue$': 'vue-jest',
    '.+\\.(css|styl|less|sass|scss|jpg|jpeg|png|svg|gif|eot|otf|webp|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': 'jest-transform-stub',
    '^.+\\.ts?$': 'babel-jest'
  },
  snapshotSerializers: [
    'jest-serializer-vue'
  ],
  globals: {
    'vue-jest': {
      babelConfig: true
    }
  },
  collectCoverage: true,
  collectCoverageFrom: [
    'src/**/*.{ts,vue}'
  ]
}
