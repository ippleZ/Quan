^https:\/\/newclient\.map\.baidu\.com\/client\/crossmarketing\/\?container=du_aide_module url reject-dict
^https:\/\/newclient\.map\.baidu\.com\/client\/crossmarketing\/\?container=du_card_ugc url reject-dict
^https:\/\/newclient\.map\.baidu\.com\/client\/crossmarketing\/\?container=du_trip_route_tab url reject-dict
^https:\/\/newclient\.map\.baidu\.com\/client\/crossmarketing\/\?oem= url reject-dict
^https:\/\/newclient\.map\.baidu\.com\/client\/imap\/dl\/s\/UpdateInfo\.php\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/baidu/map.js
^https:\/\/newclient\.map\.baidu\.com\/client\/noticebar\/get\? url reject-dict
^https:\/\/newclient\.map\.baidu\.com\/client\/phpui2\/\?qt=ads url reject-dict
^https:\/\/newclient\.map\.baidu\.com\/client\/usersystem\/mine\/page\? url script-response-body https://raw.githubusercontent.com/RuCu6/QuanX/main/Scripts/baidu/map.js
^https:\/\/newclient\.map\.baidu\.com\/grow-engine\/api\/common\/userHome\? url reject-dict
^https:\/\/yongche\.baidu\.com\/goorder\/passenger\/notice url reject-dict
^https:\/\/yongche\.baidu\.com\/gomarketing\/api\/activity\/talos\/activitycard\? url reject-dict
^https:\/\/yongche\.baidu\.com\/gomarketing\/api\/popup\/getentrancecordovaurl url reject-dict
^https:\/\/yongche\.baidu\.com\/goorder\/passenger\/baseinfo url reject-dict
hostname = newclient.map.baidu.com, yongche.baidu.com
