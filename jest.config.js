module.exports = {
  testEnvironment: "jsdom",
  testPathIgnorePatterns: ["<rootDir>/.next/", "<rootDir>/node_modules/"],
  // モジュールを別のモジュールにマッピングする
  moduleNameMapper: {
    // 画像を __mocks__/fileMock.js にマッピングしてテストが失敗しないようにする
    "\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/fileMock.js",
    // CSS などを __mocks__/styleMock.js にマッピングしてテストが失敗しないようにする
    "\\.(css|less)$": "<rootDir>/__mocks__/styleMock.js",
  },
};
