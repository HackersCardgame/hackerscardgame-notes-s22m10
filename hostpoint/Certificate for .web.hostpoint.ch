<!-- This Source Code Form is subject to the terms of the Mozilla Public
   - License, v. 2.0. If a copy of the MPL was not distributed with this
   - file, You can obtain one at http://mozilla.org/MPL/2.0/. -->
<!DOCTYPE html>
<html dir="ltr" lang="en-US"><head>
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width">
    <meta http-equiv="Content-Security-Policy" content="default-src chrome:; object-src 'none'">
    <meta name="color-scheme" content="light dark">
    <link rel="localization" href="toolkit/about/certviewer.ftl">
    <link rel="localization" href="branding/brand.ftl">
    <script type="module" src="chrome://global/content/certviewer/certviewer.js"></script>
    <script type="module" src="chrome://global/content/certviewer/components/certificate-section.js"></script>
    <script type="module" src="chrome://global/content/certviewer/components/about-certificate-section.js"></script>
    <link rel="stylesheet" href="chrome://global/skin/in-content/common.css">
    <link rel="stylesheet" href="chrome://global/content/certviewer/certviewer.css">
    <title id="certTitle" data-l10n-id="certificate-viewer-tab-title" data-l10n-args="{&quot;firstCertName&quot;:&quot;*.web.hostpoint.ch&quot;}">Certificate for *.web.hostpoint.ch</title>
  </head>
  <body>
    <template id="certificate-section-template" class="section">
      <link rel="stylesheet" href="chrome://global/content/certviewer/components/certificate-section.css">
      <h1 class="title"></h1>
    </template>

    <template id="certificate-tabs-template">
      <div class="certificate-tabs" role="tablist"></div>
    </template>

    <template id="info-groups-template">
    </template>

    <template id="info-item-template">
      <link rel="stylesheet" href="chrome://global/skin/in-content/common.css">
      <link rel="stylesheet" href="chrome://global/content/certviewer/components/info-item.css">
      <label></label>
      <span class="info"></span>
    </template>

    <template id="info-group-template">
      <link rel="stylesheet" href="chrome://global/content/certviewer/components/info-group.css">
      <span class="extension">
        <img src="chrome://global/skin/icons/error.svg" id="critical-info" data-l10n-id="certificate-viewer-critical-extension">
        <span class="info-group-title"></span>
      </span>
      <span class="info-group-title-hr"></span>
    </template>

    <template id="error-section-template">
      <link rel="stylesheet" href="chrome://global/content/certviewer/components/error-section.css">
      <h1 class="title"></h1>
      <span class="error"></span>
    </template>

    <template id="about-certificate-template" class="section">
      <link rel="stylesheet" href="chrome://global/content/certviewer/components/certificate-section.css">
      <h1 class="title"></h1>
    </template>

    <template id="about-certificate-items-template">
      <link rel="stylesheet" href="chrome://global/content/certviewer/components/about-certificate-section.css">
    </template>

    <template id="list-item-template">
      <link rel="stylesheet" href="chrome://global/content/certviewer/components/list-item.css">
      <a class="cert-url"><span class="item-name"></span></a>
      <button class="export"></button>
    </template>
  

<certificate-section></certificate-section></body></html>