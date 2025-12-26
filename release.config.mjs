const config = {
  // Define branches: 'main' for stable, 'dev' for pre-releases
  branches: [
    "main",
    {
      name: "dev",
      prerelease: true, // Tags releases from 'dev' as v1.0.0-dev.1
    },
  ],

  plugins: [
    // 1. Analyze commits to determine the next version
    "@semantic-release/commit-analyzer",

    // 2. Generate release notes content
    "@semantic-release/release-notes-generator",

    // 3. Update the CHANGELOG.md file
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
      },
    ],

    // 4. Commit the new version in package.json and the updated CHANGELOG.md
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md", "package.json"],
        // [skip ci] prevents the release from triggering another CI run
        message:
          "chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}",
      },
    ],

    // 5. Create a GitHub Release and tag
    "@semantic-release/github",
  ],
};

export default config;
