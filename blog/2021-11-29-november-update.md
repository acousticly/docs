---
title: November Update
author: Jeve Stobs
author_title: Dev @ Acoustic
author_url: https://github.com/jeve-stobs
author_image_url: https://cdn.discordapp.com/attachments/873598906884313108/878036976920592394/ping-issues.webp?size=4096
tags: [update, november, music]
description: Pretty sizeable Music update with some new commands, and major tweaks
hide_table_of_contents: false
---

Pretty sizeable Music update with some new commands and major tweaks. ➜

Check out our new site! https://acoustic.to
<!--truncate-->

### Added:
#### Music has new commands :partying_face:
- `playnext` When you really want to show your friends a funny video that just can't wait. The playnext command moves songs to the front of the queue **without** skipping the currently playing song.
- `shuffleplay` Are you getting tired of hearing the same songs when you queue a playlist on Acoustic? Well no more. Now you can auto-shuffle playlists and queue them instantly! :star_struck:
- `clearqueue` This is a long-awaited command, and it's finally here! It clears the queue **without** disconnecting the bot. How revolutionary and innovative...
#### `Lyrics` command gets a full rework with buttons support
And it looks pretty awesome, if I do say so myself <br />
![Lyrics lookin' dope af](https://cdn.jevestobs.dev/image_50.png)
### Changed:
- Some wording was messed with, and instructions should be clearer
- Song searches should be more accurate on average
- Viewing your custom playlist now prefetches the hyperlinks so you can visualize the playlist's song makeup
- Thumbnail art for Soundcloud 
- Database migration from MongoDB to ScyllaDB (+55% OPS read/write)
- Updated [privacy policy](https://acoustic.to/privacy) and [terms](https://acoustic.to/terms)

### Fixed:
- `skip` command interaction failed
- `ping` command inaccuracies
- `loop` command failure when skipping
