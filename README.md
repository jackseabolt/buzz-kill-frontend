<p align="center"><img src="/img/logo.jpg" height="120" /></p>
<h1>FRONT-END</h1>
<p><em>This document provides general information on the Buzz-Kill app and details on the api.  For more information about the Buzz-Kill API, please see <a href="https://github.com/brianjb-lfl/buzz-kill-back/blob/master/README.md">Buzz-Kill back end</a>.</em></p>


Why Buzz-Kill
-------------
Every restaurant, bar and club owner wants to provide a safe and enjoyable guest experience.  Buzz-Kill is an easy-to-use tool that helps managers and their staff monitor patrons' alcohol consumption and spot potential problems early.  It requires minimal additional effort by servers and presents information in a format that is easy for busy managers to process in a quick glance.

How it Works
------------
<table layout="fixed">
  <tr>
    <td width="55%">
      <p>Buzz-Kill's main screen displays colored boxes representing each patron in the establishment.</p>
    </td>
    <td width = "40%">
      <img src="/img/buzz-kill-main.png" max-height="240px" width="auto">
    </td>
  </tr>
  <tr>
    <td>
      <p>When a new patron arrives, the server includes simple, additional information required for the ongoing bac calculation.          </p>
    </td>
    <td>
      <img src="/img/buzz-kill-addpatron.png" max-height="240px" witdh="auto">
    </td>
  </tr>
  <tr>
    <td>
      <p>The large numbers and color coding make the patron tile easy to understand.  Additionl information available includes seat location, time of stay, and a graphic representation of drink purchases.</p>
    </td>
    <td>
      <img src="/img/buzz-kill-patrondet.png" max-height="240px" witdh="auto">
    </td>
  </tr>
  <tr>
    <td>
      <p>And if someone goes too far, help is a click away.</p>
    </td>
    <td>
      <img src="/img/buzz-kill-patronemergency.png" max-height="240px" witdh="auto">
    </td>
  </tr>
</table>

For local use
--------

```bash
# Clone repository
git clone https://github.com/jackseabolt/buzz-kill-frontend.git

# Change directory
cd buzz-kill-frontend

# Install NPM dependencies
npm install

# Start the server
npm start
```
