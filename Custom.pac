//
// MYbloXX by MYXXdev (Default)
// Updated: 09/02/22 - 01:40 MST
// Support Development: MYXXfm.com/donate
//
var MYbloXX="PROXY 127.0.0.1:8021";var ALLOW="DIRECT";var BYPASS="PROXY 8.8.8.8:53";function s(u,r){return shExpMatch(u,r)}
function d(h,r){return dnsDomainIs(h,r)}
function FindProxyForURL(url,host){var u=url.toLowerCase();var h=host.toLowerCase();
if(
s(u,"*app.localhost.direct*")||
s(u,"*register.appattest.apple.com*")||
s(u,"*adblock-tester*")||
s(u,"*adsbe*")||
s(u,"*adsl*")||
s(u,"*adverts.ie*")||
s(u,"*ai.marketing*")||
s(u,"*analytics.twitter*")||
s(u,"*api.ay.gy*")||
s(u,"*api.push.*")||
s(u,"*app.adjust*")||
s(u,"*banner.tw*")||
s(u,"*bannerweb.*")||
s(u,"*beatmarketing*")||
s(u,"*bnbstatic*")||
s(u,"*bostadsbolaget*")||
s(u,"*castrads*")||
s(u,"*cdn-marketing*")||
s(u,"*cdn.jsdelivr*")||
s(u,"*checkadblock*")||
s(u,"*conversions.appsflyer*")||
s(u,"*countervalues.live*")||
s(u,"*cuetracker.net*")||
s(u,"*dead*")||
s(u,"*deembesign.club*")||
s(u,"*gumtree*")||
s(u,"*gungho*")||
s(u,"*heads*")||
s(u,"*hulustream*")||
s(u,"*jsmu.edu*")||
s(u,"*kinja-static*")||
s(u,"*loads*")||
s(u,"*lpsnmedia*")||
s(u,"*marketing.lyft*")||
s(u,"*marketing.zobj*")||
s(u,"*marketingcloud*")||
s(u,"*ms-com*")||
s(u,"*old.reddit.com*")||
s(u,"*promo.api*")||
s(u,"*propellerhealth*")||
s(u,"*reads*")||
s(u,"*roads*")||
s(u,"*rotherhamad*")||
s(u,"*salads*")||
s(u,"*sentry-read*")||
s(u,"*simplex-aff*")||
s(u,"*sponsor.ajay*")||
s(u,"*ssb-banner.humber*")||
s(u,"*starad*")||
s(u,"*swindonad*")||
s(u,"*ulink.adjust*")||
s(u,"*universaltennis*")||
s(u,"*universaltruthschool*")||
s(u,"*unsub*")||
s(u,"*wadsw*")||
s(u,"*washingtonexaminer*")||
s(u,"*yieldwatch*")||
s(u,"*m.buy123.com.tw*")||
s(u,"*marketingturkiye.com*")||
s(u,"*cdn.branch.io*")||
s(u,"*gu-global.com*")||
s(u,"*tw.sym-global.com*")||
s(u,"*graph.facebook.com*")
)return ALLOW;
else if(s(u,"*adsafeprotected*")||
s(u,"*app-analytics*")||
s(u,"*app-measurement*")||
s(u,"*applovin*")||
s(u,"*googlead*")||
s(u,"*googlesyndication*")||
s(u,"*googletag*")
)return BYPASS;
else if(
s(u,"*vpp.itunes.apple.com*")||
s(u,"*appattest.apple.com*")||
s(u,"*certs.apple.com*")||
s(u,"*crl.apple.com*")||
s(u,"*valid.apple.com*")||
s(u,"*ocsp2.apple.com*")||
s(u,"*ocsp.apple.com*")
)return MYbloXX;
return ALLOW}
