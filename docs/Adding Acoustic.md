---
id: adding_acoustic
description: How to add the most amazing Discord bot in history!
title: Adding Acoustic
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import { Button } from '../Buttons/button';

Ready to start listening with Acoustic? Well it's super easy so let's get into it!

## Invite me!

---

export const Highlight = ({children, color}) => (
<span
style={{
      borderRadius: '2px',
      color: color,
      padding: '0.2rem',
    }}>
{children}
</span>
);

<table>
  <tr>
    <th>
      <Button onClick = {() => window.open('https://acoustic.to/invite','_blank')} buttonStyle = "btn--acoustic--1">Invite  </Button>
    </th>
    <td>
      <ul>
        <h2><Highlight color="#5865F2">👋 Acoustic</Highlight> (<code>Acoustic#8707</code>)</h2>
        <li>Prefix: <code>~</code></li>
        <li><strong>You should probably click the big invite button ;)</strong></li>
      </ul>
    </td>
  </tr>
</table>

## Authorization

---

### Step 1

Once you've decided to use the best **companion** on Discord, then you can continue to invite it to your fav server!

![Discord Authorization Screen](/img/docs/adding/discord-oauth.webp)

Tap or click the `Select a server` button. A pop-up should appear that will let you select where you'd like to add Acoustic.

### Step two

Once you've selected the server that you'd like to add Acoustic to, you can press the `Continue` button on the bottom right of the menu.

You should now see something similar to this:

![Press authorize and you'll be good to go!](/img/docs/adding/discord-oauth2.webp)

:::caution Note
If you want to disable `Administrator` permission from Acoustic, it will not work properly! You will still be able to listen to basic music features but some things won't work.
:::

### Final Step

Once you press the `Authorize` button and complete the Captcha, you should be redirected to our thank-you page. In addition, you'll also see a message like the one below in your Discord server. **Spectacular!**

Now let's get the party started by [playing some songs](/play_song)!
