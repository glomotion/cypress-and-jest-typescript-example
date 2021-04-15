module.exports = {
  roots: ["<rootDir>/src"],
  transform: {
    "^.+\\.tsx?$": "ts-jest",
  },
  testRegex: ".*\\.test\\.(js|ts(x?))$",
  testPathIgnorePatterns: [
    ".*\\.cy\\.test\\.(js|ts(x?))$",
    "<rootDir>/node_modules/",
  ],
};
