---
title: Ping issues
author: Jeve Stobs
author_title: Dev @ Acoustic
author_url: https://github.com/jeve-stobs
author_image_url: https://cdn.discordapp.com/avatars/670024176312123423/0ad8dee53263af0b68af1d7ea7132238.png?size=4096
tags: [ping, lag, ping-spike]
description: The ping issues that we are currently experiencing might be something more sinister than poor hosting.
hide_table_of_contents: false
---

How we discovered the root of our issues & why they might be more difficult to curtail in the near future. ➜

<!--truncate-->

## Well, it turns out I was wrong

For some of you, I can understand how that may be difficult to believe, but I promise you that it's true.

The extent to which I was wrong is the important part. I wasn't merely _incorrect_ or _confused_; I was dead wrong. Acoustic has had hosting issues since the day of its inception. As the frugal developer that I am, I didn't want to pay for a complex [AWS subscription](https://aws.amazon.com/pricing) or anything from [Digital Ocean](https://digitalocean.com), so I was forced to look elsewhere.

My reason behind this was, "I can buy a more expensive server once I need it." Considering we were growing at a rate of +20% every week, it was necessary to upgrade our servers about once a week. I projected that this would occur. However, I didn't foresee the amount of frustration that downtime would cause users.

## User downtime is a b*tch

As evidenced by our status monitors, in the past 6-months Acoustic has been down for more than **24 hours**. Running some quick math, you can calculate that is a **98.9%** uptime. While that's not too much downtime, there were an estimated **120** songs lost and over **50** economy commands that were never registered.

At this point, Acoustic was going through servers as people go through underwear. Thankfully, I was able to find a semi-affordable host that could handle the load of Acoustic for a long time. But that's when our latency issues began.

I figured that our host was the issue, so I decided to do a series of server upgrades and changes. Long story short, the problem was not related to **any** networking problems server-side, just the result of how Node.js handles compute tasks.

:::info Note

Here's a quick crash course on Node.js: While Node may have multi-threaded cluster support, a single process will only be allocated to a single thread. This means that if User A queues a command at the same time as User B queues a command, those commands can't be served at the same time. So they are served sequentially, meaning that the first user to issue a command will be the first user to receive a response.
:::

Long story short, I've made some changes to Acoustic that _should_ improve latency until the rewrite is complete, which should be done when it's done.
