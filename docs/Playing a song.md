---
id: play_song
description: Learn how to play songs with Acoustic!
title: Playing a Song
custom_edit_url: https://github.com/acousticly/docs/edit/master/docs/Playing%20a%20song.md

---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

After [inviting Acoustic into your server](/adding_acoustic), you can get the party started! To begin playing songs through Acoustic, follow this guide:


## 1. Join a Voice Channel.
  - You can do that by clicking on the channel with a speaker icon.

  ![Voice Channel image](/img/docs/playing-a-song/joinVC.webp)

## 2. Summon Acoustic into the Voice Channel
  - You can make Acoustic join the Voice Channel by typing `~join`.
  ![Joining a Voice Channel](/img/docs/playing-a-song/acousticjoin.webp)

## 3. Start your music.

  - Use the command `~play` to start your music.
  <Tabs
    defaultValue="ps"
    values={[
      {label: 'Play a Song', value: 'ps'},
      {label: 'Play a Playlist', value: 'pp'},
    ]}>
    <TabItem value="ps"> To play a song, type <code>~play &lt;Song Name/Song URL&gt;</code><br/><br/>
      <img src="/img/docs/playing-a-song/playsongname.webp" alt="example-1"/>
      <img src="/img/docs/playing-a-song/playsonglink.webp" alt="example-2"/>
    </TabItem>
    <TabItem value="pp"> To play a playlist, type <code>~play &lt;PlaylistURL&gt;</code><br/><br/>
      <img src="/img/docs/playing-a-song/playplaylist.webp" alt="example-pl"/>
    </TabItem>
  </Tabs>

:::caution When playing a playlist:
  - Make sure the playlist is either `Unlisted` or `Public`. If it is set to `Private`, Acoustic won't be able to play that specific playlist.
:::

## 4. Search for more results
  - If you need more search results, you can use `!searchsong <song name>` and choose the option you want.

  ![Searching a song](/img/docs/playing-a-song/searchsong.webp)

