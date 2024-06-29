# codenamesRPC

discord RPC for the webbrowser game codenames

i was planning on adding a way to view the role of the player as well but i cant find an easy way to do so

might make a nice accessilibity shortcut from start menu in the future


- Explanation:
a node server runs locally and starts the discord RPC, via an extention in the browser information about the game is then sent to the server and embeded into the activity

i couldnt make the extention public because google wanted me to pay $5
(if youre wondering the warning is because chrome will stop supporting manifest v2 this year)

after installing the extention into chrome and then running the codenames.exe it should update your discord RPC every 20 seconds as you play codenames

the .exe was compiles by pkg from a node project, thats why its such a large file


- Installation:

this app is currenly only supported for windows with chrome

download the zip and extract the extention from it, then download the codenames.exe file from https://filetransfer.io/data-package/UCgGmOre  
(idk where to store the .exe since its too large for github)

installing the extention:

1. unzip the extention file
2. manage your chrome extentions at "chrome://extensions"
3. turn on "developer mode" at the right top
4. click "load unpacked"
5. select the unzipped extention folder


- troubleshooting

  check if the extention is enabled in chrome extentions
  
  check if the server (the command prompt) is receiving packets every 20 seconds
  
  check if discord activities are turned on on your account ;)
  
  for any additional questions feel free to add me on discord: zyrozyro
  
