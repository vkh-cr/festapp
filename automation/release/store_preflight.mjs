import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../..');
const manifest = JSON.parse(fs.readFileSync(path.join(root, 'automation/release/app_store_config.json'), 'utf8'));
const errors = [];
const warnings = [];
const fail = (message) => errors.push(message);
const requireFile = (relative) => fs.existsSync(path.join(root, relative)) || fail(`missing ${relative}`);

if (!process.argv.includes('--local') || !process.argv.includes('--read-only')) {
  fail('preflight must be invoked with --local --read-only');
}
if (manifest.schemaVersion !== 2) fail('unsupported app-store manifest schema');
if (manifest.appleId !== '6745415882' || manifest.bundleId !== 'festapp.jm2025') fail('immutable Apple identity mismatch');
if (manifest.signingTeamId !== '8WKBB6L8LT') fail('signing team mismatch');
if (manifest.releaseMode !== 'manual_after_approval') fail('release mode must remain manual');

const review = manifest.review;
if (!review?.contact?.firstName || !review?.contact?.lastName || !review?.contact?.email || !review?.contact?.phone) {
  fail('canonical reviewer contact is incomplete');
}
if (!review?.demoAccount?.email || !review?.demoAccount?.authEmail || !review?.demoAccount?.passwordKeychainService) {
  fail('canonical reviewer demo account is incomplete');
}
if (review?.demoAccount?.email !== 'test@test.com' || review?.demoAccount?.authEmail !== '9+test@test.com') {
  fail('reviewer-visible and effective auth emails are not pinned correctly');
}
if (!review?.notesPath) fail('canonical reviewer notes path is missing');
else requireFile(path.join('automation/release', review.notesPath));

const classification = manifest.storeClassification;
if (classification?.primaryCategory !== 'TRAVEL' || classification?.secondaryCategory !== 'EDUCATION') {
  fail('canonical store categories changed unexpectedly');
}
if (classification?.contentRights !== 'USES_THIRD_PARTY_CONTENT') fail('content-rights decision mismatch');
if (classification?.availableInNewTerritories !== true) fail('new-territory availability decision mismatch');
const expectedBooleanAgeAnswers = [
  'advertising', 'ageAssurance', 'gambling', 'healthOrWellnessTopics', 'lootBox',
  'messagingAndChat', 'parentalControls', 'unrestrictedWebAccess', 'userGeneratedContent',
];
for (const field of expectedBooleanAgeAnswers) {
  if (classification?.ageRating?.[field] !== false) fail(`age-rating ${field} must be false`);
}
if (classification?.ageRating?.medicalOrTreatmentInformation !== 'NONE') {
  fail('medical/treatment age-rating answer must remain NONE');
}
const appPrivacy = manifest.appPrivacy;
if (appPrivacy?.entryMode !== 'manual_app_store_connect' || appPrivacy?.approvalRequired !== true) {
  fail('App Privacy must remain an explicitly approved manual ASC step');
}
if (!appPrivacy?.questionnairePath) fail('App Privacy questionnaire path is missing');
else requireFile(path.join('automation/release', appPrivacy.questionnairePath));
const expectedNoneAgeAnswers = [
  'ageRatingOverrideV2', 'alcoholTobaccoOrDrugUseOrReferences', 'contests',
  'gamblingSimulated', 'gunsOrOtherWeapons', 'horrorOrFearThemes',
  'koreaAgeRatingOverride', 'matureOrSuggestiveThemes',
  'medicalOrTreatmentInformation', 'profanityOrCrudeHumor',
  'sexualContentGraphicAndNudity', 'sexualContentOrNudity',
  'violenceCartoonOrFantasy', 'violenceRealistic',
  'violenceRealisticProlongedGraphicOrSadistic',
];
for (const field of expectedNoneAgeAnswers) {
  if (classification?.ageRating?.[field] !== 'NONE') fail(`age-rating ${field} must be NONE`);
}

const config = fs.readFileSync(path.join(root, 'automation/project.conf'), 'utf8');
const getConfig = (key) => config.match(new RegExp(`^${key}=(?:"([^"]*)"|(.*))$`, 'm'))?.slice(1).find((v) => v !== undefined)?.trim();
if (getConfig('APP_NAME') !== manifest.target.name) fail('project.conf APP_NAME disagrees with manifest');
if (getConfig('DOMAIN') !== new URL(manifest.urls.marketing).hostname) fail('project.conf DOMAIN disagrees with manifest');
const [version, build] = (getConfig('VERSION') || '').split('+');
if (version !== manifest.target.version || build !== manifest.target.build) fail('project.conf version/build disagrees with manifest');

const project = fs.readFileSync(path.join(root, 'ios/Runner.xcodeproj/project.pbxproj'), 'utf8');
if (!project.includes('PRODUCT_BUNDLE_IDENTIFIER = festapp.jm2025;')) fail('main bundle identifier is not pinned');
if (!project.includes('DEVELOPMENT_TEAM = 8WKBB6L8LT;')) fail('expected signing team is absent');
const fastfile = fs.readFileSync(path.join(root, 'automation/release/fastlane/Fastfile'), 'utf8');
if (/produce\s*\(|lane\s+:publish_ipa|automatic_release:\s*true/.test(fastfile)) fail('unsafe app creation/monolithic/automatic release path found');
if (/9\+test@test\.com|bujnmi@gmail\.com|festapp-csm-reviewer/.test(fastfile)) {
  fail('Fastfile duplicates app-specific reviewer configuration');
}

for (const file of [
  'automation/release/APP_STORE_CHECKLIST.md',
  'automation/release/APP_PRIVACY_DISCLOSURE.md',
  'automation/release/APP_REVIEW_NOTES.md',
  'automation/release/fastlane/metadata/review_information/notes.txt',
  'web/privacy/index.html', 'web/privacy/choices/index.html', 'web/terms/index.html',
  'web/apple-app-site-association', 'web/.well-known/apple-app-site-association',
]) requireFile(file);

const metadataDir = path.join(root, 'automation/release/fastlane/metadata/cs');
const limits = { name: 30, subtitle: 30, keywords: 100, promotional_text: 170, description: 4000, release_notes: 4000 };
for (const [name, limit] of Object.entries(limits)) {
  const file = path.join(metadataDir, `${name}.txt`);
  if (!fs.existsSync(file)) { fail(`missing metadata cs/${name}.txt`); continue; }
  const content = fs.readFileSync(file, 'utf8').trim();
  if (!content || [...content].length > limit) fail(`metadata ${name} must be 1..${limit} characters`);
}
for (const [field, expected] of [['privacy_url', manifest.urls.privacy], ['privacy_choices_url', manifest.urls.privacyChoices], ['support_url', manifest.urls.support], ['marketing_url', manifest.urls.marketing]]) {
  const value = fs.readFileSync(path.join(metadataDir, `${field}.txt`), 'utf8').trim();
  if (value !== expected) fail(`${field} disagrees with manifest`);
}

function pngInfo(file) {
  const data = fs.readFileSync(file);
  if (data.toString('hex', 0, 8) !== '89504e470d0a1a0a') throw new Error('not PNG');
  return { width: data.readUInt32BE(16), height: data.readUInt32BE(20), colorType: data[25] };
}
const screenshotRoot = path.join(root, 'automation/release/fastlane/screenshots/cs');
const screenshotFiles = fs.existsSync(screenshotRoot)
  ? fs.readdirSync(screenshotRoot).filter((file) => file.endsWith('.png')).sort()
  : [];
for (const [device, rule] of Object.entries(manifest.screenshots)) {
  const files = screenshotFiles.filter((file) => file.startsWith(`${device}-`));
  if (files.length < rule.minimumCount) {
    fail(`final ${device} screenshots missing: need at least ${rule.minimumCount}`);
    continue;
  }
  for (const name of files) {
    try {
      const info = pngInfo(path.join(screenshotRoot, name));
      if (info.width !== rule.width || info.height !== rule.height) fail(`${name} has ${info.width}x${info.height}`);
      if ([4, 6].includes(info.colorType)) fail(`${name} contains alpha`);
    } catch (error) { fail(`${name}: ${error.message}`); }
  }
}
const icon = path.join(root, 'ios/Runner/Assets.xcassets/AppIcon.appiconset/Icon-App-1024x1024@1x.png');
try {
  const info = pngInfo(icon);
  if (info.width !== 1024 || info.height !== 1024 || [4, 6].includes(info.colorType)) fail('App Store icon must be 1024x1024 without alpha');
} catch (error) { fail(`App Store icon: ${error.message}`); }

const runtimeFiles = [
  'assets/translations/cs.json','assets/translations/en.json','web/site.webmanifest',
  'web/index.html','ios/Runner/Info.plist','automation/release/fastlane/metadata/cs/name.txt',
  'automation/release/fastlane/metadata/cs/description.txt',
  'automation/release/fastlane/metadata/cs/privacy_choices_url.txt',
];
for (const relative of runtimeFiles) {
  const content = fs.readFileSync(path.join(root, relative), 'utf8');
  if (/Jubileum mládeže|JM 2025/i.test(content)) fail(`visible legacy brand remains in ${relative}`);
}
if (/credentials to info@festapp\.net|přihlašovacími údaji na info@festapp\.net/.test(
  runtimeFiles.map((file) => fs.readFileSync(path.join(root, file), 'utf8')).join('\n')
)) fail('legacy credential-by-email deletion copy remains');

warnings.push('Legal/DSA/reviewer/production gates require external evidence.');
for (const warning of warnings) console.warn(`WARN: ${warning}`);
if (errors.length) {
  for (const error of errors) console.error(`ERROR: ${error}`);
  process.exit(1);
}
console.log('Store preflight passed (local/read-only).');
