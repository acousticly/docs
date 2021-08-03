---
id: commands
description: You can find a list of Acoustic's commands here.
title: Commands
custom_edit_url: https://github.com/acousticly/docs/edit/master/docs/Commands.md
---

:::info Note

### Keep this in mind!

- The default prefix of Acoustic is `~`. If you have changed your prefix to something else, please use your prefix instead of `~`. If you forget your prefix, mention Acoustic (`@Acoustic`).
- **Never include `<>` in your messages when using a command!**
- Time can be in different formats
  - Example: `100`, `2m30s`
:::

## Music

| Command      | description                                                                           | Usage                                              |
| ------------ | ------------------------------------------------------------------------------------- | -------------------------------------------------- |
| 247          | Stays in the voice channel even if no one is in it.                                   | `~24/7`                                            |
| add          | Add a song to the playlist                                                            | `~add <playlist name> <song>`                      |
| back         | Plays the previous song in the queue.                                                 | `back`                                             |
| bassboost    | Bassboost the song                                                                    | `~bassboost [value]`                               |
| create       | Create a playlist                                                                     | `~create <playlist name> <search query/link>`      |
| dc           | Disconnects the bot from the voice channel.                                           | `dc`                                               |
| delete       | Delete a playlist                                                                     | `~delete <playlist name>`                          |
| eliminate    | remove a song from the playlist                                                       | `~eliminate <playlist name> <position> [position]` |
| fast-forward | Fast forwards the player by your specified amount.                                    | `~fast-forward <time>`                             |
| join         | Makes the bot join your voice channel.                                                | `join`                                             |
| load         | Load a playlist                                                                       | `~load <playlist name>`                            |
| loop         | Loops the song or queue.                                                              | `~loop [queue / song]`                             |
| lyrics       | Get lyrics on a song.                                                                 | `~lyrics <song>`                                   |
| move         | Moves the specified song to the specified position.                                   | `~move <position> <new position>`                  |
| nightcore    | Toggles nightcore mode.                                                               | `nightcore`                                        |
| np           | Shows the current song playing.                                                       | `np`                                               |
| pause        | Pauses the music.                                                                     | `pause`                                            |
| pitch        | Sets the player's pitch. If you input "reset", it will set the pitch back to default. | `pitch`                                            |
| play         | Play a song.                                                                          | `~play <link / song name>`                         |
| previous     | Displays the previous tracks that have been played.                                   | `~previous [pageNumber]`                           |
| queue        | Displays the queue.                                                                   | `~queue [pageNumber]`                              |
| remove       | Removes a song from the queue                                                         | `~remove <position> [position]`                    |
| resume       | Resumes the music.                                                                    | `resume`                                           |
| rewind       | Rewinds the player by your specified amount.                                          | `~rewind <time>`                                   |
| search       | Searches for a song.                                                                  | `~search <link / song name>`                       |
| seek         | Sets the playing track's position to the specified position.                          | `~seek <time>`                                     |
| shuffle      | Shuffles the playlist.                                                                | `~shuffle`                                         |
| skip         | Skips the current song.                                                               | `~skip`                                            |
| speed        | Sets the player's playback speed.                                                     | `~speed <number>`                                  |
| vaporwave    | Toggles vaporwave mode.                                                               | `~vaporwave`                                       |
| view         | View a playlist                                                                       | `~view <playlist name>`                            |
| volume       | Changes the volume of the song                                                        | `~volume <number>`                                 |

## Economy

| Command     | Description                                                                                      | Usage                                |
| ----------- | ------------------------------------------------------------------------------------------------ | ------------------------------------ |
| Balance     | Returns the user's balance                                                                       | `~bal`                               |
| Base        | Buy/View bases which you can use to earn money from                                              | `~base`                              |
| Beg         | Gives you a small amount of money from a random user in the server                               | `~beg`                               |
| Blackjack   | Play blackjack against the bot for a certain amount of money                                     | `~blackjack \<bet>`                  |
| Camera      | Takes a picture using the camera and sells the image for cash.                                   | `~camera`                            |
| Coinflip    | Choose heads or tails wih a bet.                                                                 | `~coinflip \<heads/tails> \<bet>`    |
| Daily       | Get your daily (every 12 hour) rewards.                                                          | `~daily`                             |
| Deposit     | Deposits a certain amount of money into your vault.                                              | `~dep \<amount>`                     |
| Fish        | Try your luck and fish in an open lake                                                           | `~fish`                              |
| Hunt        | Try your luck and hunt in an open field.                                                         | `~bal`                               |
| Gamble      | Gamble in a basic dice game against Acoustic                                                     | `~gamble \<amount>`                  |
| Leaderboard | Shows the leaderboard of the richest players                                                     | `~lb`                                |
| Mine        | Mines some of that fresh crypto (maybe Dogecoin???)                                              | `~mine`                              |
| Postmeme    | Posts a random meme and gives you money based on how popular it is.                              | `~pm`                                |
| Search      | Searches under an item of your choice and gives you a random amount of money.                    | `~search`                            |
| Updgrade    | Buy/view upgrades you can do on your base                                                        | `~upgrade \<buy/view> \<upgrade id>` |
| WikiHow     | Guess the title of a WikiHow article based on the image. If you guess right, then you get money. | `~wikihow`                           |
| Withdraw    | Withdraws money from your vault.                                                                 | `~withdraw`                          |
| Work        | Get a job and start working to earn money.                                                       | `~work \<get> \<id> Then use ~work`  |

## Info

| Command | description                                               | Usage             |
| ------- | --------------------------------------------------------- | ----------------- |
| help    | Sends information about all the commands that I can do.   | `~help [command]` |
| invite  | Send an invite link so people can add me to their server. | `~invite`         |
| privacy | Sends a link to the privacy policy.                       | `~privacy`        |
| status  | Gets the status of the bot.                               | `~status`         |
| support | Get support on the bot.                                   | `~support`        |
| uptime  | Gets the uptime of the bot.                               | `~uptime`         |
| ping    | Displays the latency of Acoustc at the current time.      | `~ping`           |

## Fun

| Command  | description                                                       | Usage       |
| -------- | ----------------------------------------------------------------- | ----------- |
| youtube  | Watch YouTube with your friends in a voice channel.               | `~youtube`  |
| poker    | Play poker with your friends in a voice channel.                  | `~poker`    |
| chess    | Play chess with your friends in a voice channel.                  | `~chess`    |
| betrayal | Play betrayal with your friends in a voice channel.               | `~betrayal` |
| fishing  | Play fishing by yourself or with your friends in a voice channel. | `~fishing`  |

## Misc

| Command | description                               | Usage              |
| ------- | ----------------------------------------- | ------------------ |
| poll    | Create a poll for users to answer.        | `~poll <Question>` |
| avatar  | Retrieves the avatar of the desired user. | `~avatar @Person`  |
