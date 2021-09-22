const core = require('@actions/core');
const semver = require('semver');
const github = require('@actions/github');

try {
  const currentVersion = core.getInput('current-version');
  
  let nextMajor = semver.inc(currentVersion, 'major');
  let nextMinor = semver.inc(currentVersion, 'minor');
  let nextPatch = semver.inc(currentVersion, 'patch');

  let nextAlphaVersion = semver.inc(currentVersion, 'prerelease', 'alpha');
  let nextBetaVersion = semver.inc(currentVersion, 'prerelease', 'beta');

  console.log(`Next Major version is: ${nextMajor}`);
  console.log(`Next Minor version is: ${nextMinor}`);
  console.log(`Next Patch version is: ${nextPatch}`);
  console.log(`Next Alpha version is: ${nextAlphaVersion}`);
  console.log(`Next Beta version is: ${nextBetaVersion}`);
} catch (error) {
  core.setFailed(error.message);
}