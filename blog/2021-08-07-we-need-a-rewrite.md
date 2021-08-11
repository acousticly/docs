---
title: We need a rewrite
author: Jeve Stobs
author_title: Dev @ Acoustic
author_url: https://github.com/jeve-stobs
author_image_url: https://cdn.discordapp.com/avatars/670024176312123423/0ad8dee53263af0b68af1d7ea7132238.png?size=4096
tags: [rewrite, new-stuff]
description: Yeah, we needed to rewrite the bot again....
hide_table_of_contents: false
---

Why we decided to rewrite Acoustic for the third time. And how we plan to make Acoustic even faster in the future ➜

<!--truncate-->

Rewriting Acoustic for the third time was not a decision made lightly.
The dev team was already _exhausted_ 😩 from adding the finishing touches to Acoustic's Music, & then management sprung this on them!

However, monitoring had shown that there had been a massive performance degradation as we joined more and more servers.

![Ping spikes](https://media.discordapp.net/attachments/873598906884313108/875068071931424768/ping-spikes_1.png)

## Performance Issues

Ping would spike, interactions would fail more frequently, and lag was extremely noticeable when queueing songs.
If there were over **20** people using Acoustic (thank you), it could take upwards of 2 minutes for it to join the channel.
Thankfully, music didn't lag once it started, but this was still unacceptable performance.

[Discord.js](https://github.com/discordjs/discord.js/) doesn't scale too well and memory leaks are a notable issue.
There is a detailed [GitHub post](https://github.com/skillz4killz/dapi-bench#memory-management) about memory usage using various javascript libraries to interact with Discord's API that **heavily** influenced our decision.

We were able to minimize some of this interaction latency by reducing the number of gateway intents that we received but this was just a band-aid solution. So we decided to move over to Rust.

Rust is a high-level language designed for performance and it works _really_ well with Discord. It has almost 100% coverage of the Discord API so we can release features just as fast as we were able to do on [Discord.js](https://github.com/discordjs/discord.js/). It also integrates well as a backend for our dashboard that's coming soon so stay tuned.

## Moving forward

This rewrite is the **largest** yet and it opens up an entirely new world for what is possible. Server hosting will be cheaper as Rust is more efficient than JavaScript & it will allow us to operate much faster and at a higher level of quality than before.

We're really excited to show you all of the cool new things we have planned for this rewrite and the many releases to come.
Thanks for sticking with us!
