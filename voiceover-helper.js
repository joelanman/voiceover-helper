// ==Bookmarklet==
// @name VoiceOver Helper
// @author Joe Lanman
// @script https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js
// ==/Bookmarklet==

var $body = $('body');
$body.wrapInner('<div id="voiceover-helper-original-page"></div>')
var $originalPage = $('#voiceover-helper-original-page');
$originalPage.css({
  'overflow': 'hidden',
  'height': 0
});
$body.append(`
  <div aria-hidden="true" id="voiceover-helper-guide">
    <style>
      #voiceover-helper-guide{
        padding: 1em;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol" !important;
        background: #fff !important;
        color: #111 !important;
        font-size: 18px !important;
      }
      #voiceover-helper-guide h1,
      #voiceover-helper-guide h2{
        font-weight: bold !important;
        margin: 0.5em 0 !important;
      }
      #voiceover-helper-guide table{
        margin: 0.5em 0 !important;
      }
      .voiceover-helper-command{
        width: 9em;
      }
    </style>
    <h1>VoiceOver guide</h1>
    <p>The default VoiceOver (VO) button is <strong>ctrl + alt</strong>.</p>
    <table>
      <tr>
        <td class="voiceover-helper-command">
          cmd + F5
        </td>
        <td class="voiceover-helper-help">
          start or stop VoiceOver
        </td>
      </tr>
      <tr>
        <td class="voiceover-helper-command">
          VO + A
        </td>
        <td class="voiceover-helper-help">
          start reading
        </td>
      </tr>
      <tr>
        <td class="voiceover-helper-command">
          VO
        </td>
        <td class="voiceover-helper-help">
          stop reading
        </td>
      </tr>
      <tr>
        <td class="voiceover-helper-command">
          VO + Shift + ▼
        </td>
        <td class="voiceover-helper-help">
          go into a section
        </td>
      </tr>
      <tr>
        <td class="voiceover-helper-command">
          VO + Shift + ▲
        </td>
        <td class="voiceover-helper-help">
          exit a section
        </td>
      </tr>
      <tr>
        <td class="voiceover-helper-command">
          VO + ▶︎
        </td>
        <td class="voiceover-helper-help">
          next
        </td>
      </tr>
      <tr>
        <td class="voiceover-helper-command">
          VO + ◀︎
        </td>
        <td class="voiceover-helper-help">
          previous
        </td>
      </tr>
      <tr>
        <td class="voiceover-helper-command">
          Enter
        </td>
        <td class="voiceover-helper-help">
          click a link or button
        </td>
      </tr>
      <tr>
        <td class="voiceover-helper-command">
          Space
        </td>
        <td class="voiceover-helper-help">
          select a checkbox, radio or dropdown
        </td>
      </tr>
    </table>
    <h2>The rotor</h2>
    <p>The rotor lets you navigate by element type, for example headings and links.</p>
    <table>
      <tr>
        <td class="voiceover-helper-command">
          VO + U
        </td>
        <td class="voiceover-helper-help">
          open the rotor
        </td>
      </tr>
      <tr>
        <td class="voiceover-helper-command">
          ◀︎ ▶︎
        </td>
        <td class="voiceover-helper-help">
          switch between element types
        </td>
      </tr>
      <tr>
        <td class="voiceover-helper-command">
          ▲ ▼
        </td>
        <td class="voiceover-helper-help">
          select an element
        </td>
      </tr>
      <tr>
        <td class="voiceover-helper-command">
          Space or Enter
        </td>
        <td class="voiceover-helper-help">
          go to selected element
        </td>
      </tr>
    </table>
  </div>
`);
