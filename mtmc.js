/*

Quantumult X (App Store:1.0.5+, TestFlight 190+):
[task_local]
38 7 * * * Myscript/mtmc.js, tag=115

[rewrite_local]
^https?:\/\/mall\.meituan\.com\/api\/c\/mallcoin\/checkIn\/getCheckInMainView\? url script-request-header Myscript/mtmc.js

All app:
[mitm]
hostname = mall.meituan.com

获取完 Cookie 后可不注释 rewrite / hostname，Token 更新时会弹窗。若因 MitM 导致该软件网络不稳定，可注释掉 hostname。
*/

const mainURL = 'https://mall.meituan.com/api/c/mallcoin/checkIn/userCheckIn?app_tag=union&bizId=2&poi=142&poiId=142&riskParams=%7B%22platform%22%3A5%2C%22app%22%3A95%2C%22utm_term%22%3A%225.6.0%22%2C%22uuid%22%3A%2200000000000006093A1EEABAC45CF854F8D211631705AA159274835250124603%22%2C%22utm_medium%22%3A%22iphone%22%2C%22fingerprint%22%3A%22i2HKpOmsirDPavelVfQBZNRCU7uhGC%2FsdjZJ%2BBikSX6mByMMl9SEO8b1Gfn2oNXNXijycsVvKbn5y8mUKLFahAq0yFxaHWjq4vazKjCwv3Sl1L9jv874soRojGSDJnmyi7J5Kkdz6qLUGifzn34pbvTPNL3EWwrHzZxn9e1H5NIx3BFcrGQwPRdOTro7XEQZeDu6vnCdlZvjw727XKFvFnxKYiFuJfsVvBsQaqtNcFlB%2F9Sb8OumPdibtZ4%2BHrOfgP52XiUU6OwNJNRnhEMmYHayC7A5eEHk7uCBBJ556OGbJDHABq97FeWWf5gzNN%2BmN0ApJdQl4FV%2BPgDbeZhcWH3NyhDjsARPSJ7pNBc7pVikBRA5skJIlPd%2Fh6Xb%2FAbfoYcnKzWwk8rYhwUcsgCcEQKusO5PwoHNRuKBk58OCbEbFlh5v12lfZBUUAX%2B5Ay62PpaASPkqC2QZtuXWtgRwGfpOHT9J0eLRcKtjOTH2P3AnBz7ecljoBSLSLKrmSd2ryjscfM1Vl%2FGShaGsQslMgr%2FUN3mEXzLY18Vg7u3VBXjgYOtPH2g3e92ZD%2Bhglgc7v9EXs9sM%2B39MwPSN0a2KCvzfj%2Bp96jpPZSgOHwauOS4VIl2ZSZaDsKivdLCFoDV1Bh6%2F3zn8sJ7sth05TA1HeWcM0GGbEts9vlV8AWXDrn0bprR9FkJVmg9vIRtP4DDkbJRgLXhtEvMmXY7p9s9nC17eAnxsZwbfkClcrBx7ocOfoRz%2Fv5RuShq7SxQmFUr7TpMffv%2Fna4RyYeNHrrQKPUojpS5Ls%2FZbRQdU6GyRKFLvoeU2oSDo8F0X1I7l4nbUBId%2B8o6F1Vu02TMPBxlgYz%2F%2BQNlNCtBtLeYgQ5qG9NRhZxw%2BQnc0cid%2BSi9cV6LaJZIgz8JoGc7lcszxrSa%2FfW6OLjbr0xklC%2BefjqPUY3GPBlQ2rEl98J61J8uf%2FNCDOBoyXSmeZVVzobvIneby6N5YJNL%2BChv0XoYAMQp3pxd4wU84dc1GFVgdcXbc35GrS6R3sUS4Ur6XeIIB9d915ZJeku6Pamf5e2JziTArnc8fu5LUaeIQx%2BoDyF06U2IDLOOwPGyphcey1fHCxr6bp0bGqFNNVJmzg7Zjh56enSaTYPQN5FLzf0yBWynqq7QEftqLt%2FesW%2BtzdNbpiNKJsGJOu8s%2F88Px8plnaTP450EiBCNwFxzkhCANGVkeEAcDE6bQuKa16S0OZAf3uJjd0fV7kqeuODy79ssfEntkPLMpiTgL4GCwyMm5wgaCeaDS1fC8sGkX4A2NdIM8YvyW2ql2LJrxOAvFD8OWA9Q%2Bk%2BTGnw0Ow2WFzBqkIQfxw1ndviwMR5xuItwCgla2VTGtz%2FJEsz9rXauKBQeDXtuiPX7WzZjAyP0C5x1siF958GPrEpKeX8vK3rGc5NcvsvMGA%3D%3D%22%7D&stockPois=142&tenantId=1&userId=245449496&utm_medium=iphone&utm_term=5.6.0&uuid=00000000000006093A1EEABAC45CF854F8D211631705AA159274835250124603#eyJDb29raWUiOiJfbHhzZGtfcz0xNzJlNTIwNzU1Ni00MjUtYjk1LTk4OSU3QyU3QzExOyBsYXRsbmc9NDAuMDI3MjYlMkMxMTYuMzEyMTklMkMxNTkyOTgyMDc1MjU2OyBsYXRsb249NDAuMDI3MjYlMkMxMTYuMzEyMTklMkMxNTkyOTgyMDc1MjU3OyBuZXR3b3JrPXdpZmk7IF9seF91dG09dXRtX3Rlcm0lM0Q1LjYuMCUyNnV0bV9tZWRpdW0lM0RpcGhvbmUlMjZ1dG1fY29udGVudCUzRDAwMDAwMDAwMDAwMDA2MDkzQTFFRUFCQUM0NUNGODU0RjhEMjExNjMxNzA1QUExNTkyNzQ4MzUyNTAxMjQ2MDMlMjZ1dG1fc291cmNlJTNEQXBwU3RvcmUlMjZ1dG1fY2FtcGFpZ24lM0RBaW1haWNhaV9jQmltYWljYWlfY0QxMDBIMDsgbG9nYW5fY3VzdG9tX3JlcG9ydD07IGxvZ2FuX3Nlc3Npb25fdG9rZW49MTR3anJ5ajF5OTZrdzgyZTVqMGU7IF91dG1fY2FtcGFpZ249QWltYWljYWlfY0JpbWFpY2FpX2NEMTAwSDA7IF91dG1fY29udGVudD0wMDAwMDAwMDAwMDAwNjA5M0ExRUVBQkFDNDVDRjg1NEY4RDIxMTYzMTcwNUFBMTU5Mjc0ODM1MjUwMTI0NjAzOyBfdXRtX21lZGl1bT1pcGhvbmU7IF91dG1fc291cmNlPUFwcFN0b3JlOyBfdXRtX3Rlcm09NS42LjA7IGNpdHlpZD0yOyBkcGlkPTsgdG9rZW49d3p5S3BCYWEtX3l0c3pOQnp6QjM4VVVhd0prR0FBQUE1Z29BQU5KYzdlajVtb3hfbk9vZnhiSHdzeDUxaVRxV0lla2NOR1U0UjVLMnNLZG0wSjJYRGlJTW5QZHR4b2V4ZUljSF9nOyB1dWlkPTAwMDAwMDAwMDAwMDA2MDkzQTFFRUFCQUM0NUNGODU0RjhEMjExNjMxNzA1QUExNTkyNzQ4MzUyNTAxMjQ2MDM7IF9seHNka191bm9pbmlkPTYwOTNhMWVlYWJhYzQ1Y2Y4NTRmOGQyMTE2MzE3MDVhYTE1OTI3NDgzNTI1MDEyNDYwMzsgX2x4c2RrPTAwMDAwMDAwMDAwMDA2MDkzQTFFRUFCQUM0NUNGODU0RjhEMjExNjMxNzA1QUExNTkyNzQ4MzUyNTAxMjQ2MDM7IF9seHNka19jdWlkPTE3MmQ1MWUzNGFjYzgtMDhhODE2ZGYyNDE5MmYtNTIwNzA0NmYtM2QxMGQtMTcyZDUxZTM0YWRjOCIsInQiOiJ3enlLcEJhYS1feXRzek5CenpCMzhVVWF3SmtHQUFBQTVnb0FBTkpjN2VqNW1veF9uT29meGJId3N4NTFpVHFXSWVrY05HVTRSNUsyc0tkbTBKMlhEaUlNblBkdHhvZXhlSWNIX2ciLCJSZWZlcmVyIjoiaHR0cHM6XC9cL21hbGwubWVpdHVhbi5jb21cL2NoZWNraW5cL2hvbWUuaHRtbD9wYWdlX3NvdXJjZT11c2VyX2NlbnRlciZ1c2VyaWQ9MjQ1NDQ5NDk2JnZlcnNpb25fbmFtZT01LjYuMCZ1dG1fdGVybT01LjYuMCZiaXpJZD0yJmFwcF90YWc9dW5pb24mc3RvY2tQb2lzPTE0MiZ4dXVpZD1jMzI0ODBiMDg1NzU0ZTE3OTZiYjIwMmQxZWZiOTAxYTA2ZjQ3ZTJjMGJiODU3NzFlMiZ0b2tlbj13enlLcEJhYS1feXRzek5CenpCMzhVVWF3SmtHQUFBQTVnb0FBTkpjN2VqNW1veF9uT29meGJId3N4NTFpVHFXSWVrY05HVTRSNUsyc0tkbTBKMlhEaUlNblBkdHhvZXhlSWNIX2cmdXRtX21lZGl1bT1pcGhvbmUmc291cmNlQXBwPWlwaG9uZSZwb2k9MTQyJmNpPTImdXRtX2NvbnRlbnQ9MDAwMDAwMDAwMDAwMDYwOTNBMUVFQUJBQzQ1Q0Y4NTRGOEQyMTE2MzE3MDVBQTE1OTI3NDgzNTI1MDEyNDYwMyZ1dG1fc291cmNlPUFwcFN0b3JlJnV0bV9jYW1wYWlnbj1BaW1haWNhaV9jQmltYWljYWlfY0QxMDBIMCZ1dWlkPTAwMDAwMDAwMDAwMDA2MDkzQTFFRUFCQUM0NUNGODU0RjhEMjExNjMxNzA1QUExNTkyNzQ4MzUyNTAxMjQ2MDMmbGFuZ3VhZ2U9emhfQ04mX19yZXFUcmFjZUlEPTBDQzkyRDc5LUE5NDMtNDVBRS1COUM3LTU0NEIwMUQ1MTFEOSIsIkhvc3QiOiJtYWxsLm1laXR1YW4uY29tIiwiVXNlci1BZ2VudCI6Ik1vemlsbGFcLzUuMCAoaVBob25lOyBDUFUgaVBob25lIE9TIDEzXzNfMSBsaWtlIE1hYyBPUyBYKSBBcHBsZVdlYktpdFwvNjA1LjEuMTUgKEtIVE1MLCBsaWtlIEdlY2tvKSBNb2JpbGVcLzE1RTE0OCBUaXRhbnNYXC8xMS4yNi4xMSBLTkJcLzEuMCBpT1NcLzEzLjMuMSBpbWFpY2FpXC9jb20uYmFvYmFvYWljaGkuaW1haWNhaVwvNS42LjAgaW1haWNhaVwvNS42LjAgQXBwXC8xMWcxMFwvNS42LjAgV0tXZWJWaWV3IEVIXC83LjMuMCBFSFNrZWxldG9uXC8xIn0='
const mainURL2 = 'https://mall.meituan.com/api/c/mallcoin/checkIn/getCheckInMainView?app_tag=union&bizId=2&channel=1&poi=295&poiId=295&stockPois=295&tenantId=1&time=1593312233127&userId=245449496&utm_medium=iphone&utm_term=5.6.0&uuid=00000000000006093A1EEABAC45CF854F8D211631705AA159274835250124603'
const CookieName = '美团买菜'
const token = 'wzyKpBaa-_ytszNBzzB38UUawJkGAAAA5goAANJc7ej5mox_nOofxbHwsx51iTqWIekcNGU4R5K2sKdm0J2XDiIMnPdtxoexeIcH_g'
const cookie = '_lxsdk_s=172e5207556-425-b95-989%7C%7C11; latlng=40.02726%2C116.31219%2C1592982075256; latlon=40.02726%2C116.31219%2C1592982075257; network=wifi; _lx_utm=utm_term%3D5.6.0%26utm_medium%3Diphone%26utm_content%3D00000000000006093A1EEABAC45CF854F8D211631705AA159274835250124603%26utm_source%3DAppStore%26utm_campaign%3DAimaicai_cBimaicai_cD100H0; logan_custom_report=; logan_session_token=14wjryj1y96kw82e5j0e; _utm_campaign=Aimaicai_cBimaicai_cD100H0; _utm_content=00000000000006093A1EEABAC45CF854F8D211631705AA159274835250124603; _utm_medium=iphone; _utm_source=AppStore; _utm_term=5.6.0; cityid=2; dpid=; token=wzyKpBaa-_ytszNBzzB38UUawJkGAAAA5goAANJc7ej5mox_nOofxbHwsx51iTqWIekcNGU4R5K2sKdm0J2XDiIMnPdtxoexeIcH_g; uuid=00000000000006093A1EEABAC45CF854F8D211631705AA159274835250124603; _lxsdk_unoinid=6093a1eeabac45cf854f8d211631705aa159274835250124603; _lxsdk=00000000000006093A1EEABAC45CF854F8D211631705AA159274835250124603; _lxsdk_cuid=172d51e34acc8-08a816df24192f-5207046f-3d10d-172d51e34adc8'
const $cmp = compatibility()
var balance = 0;
let subTitle = ''
let detail = ''

Checkin();

function isJSON(str) {
    $cmp.log(str);
    if (typeof str == 'string') {
        try {
            let obj = JSON.parse(str)
            if (typeof obj == 'object' && obj) {
                return obj
            } else {
                return false
            }
        } catch (e) {
            return false
        }
    }
    return false
}

function myBalance() {

}

function Checkin() {
    const request = {
        url: mainURL2,
        headers: {
            "Cookie": cookie,
            "Host": "mall.meituan.com",
            "Referer": "https://mall.meituan.com/checkin/home.html",
            "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 TitansX/11.26.11 KNB/1.0 iOS/13.3.1 imaicai/com.baobaoaichi.imaicai/5.6.0 imaicai/5.6.0 App/11g10/5.6.0 WKWebView EH/7.3.0 EHSkeleton/1",
            "t": token
        }
    }
    $cmp.get(request, function (error, response, data) {
        if (!error) {
            const result = isJSON(data);
            if (result && result.code == 0) {
                balance = result.data.userInfo.balance;
                const oof = {
                    url: mainURL,
                    headers: {
                        "Cookie": cookie,
                        "Host": "mall.meituan.com",
                        "Referer": "https://mall.meituan.com/checkin/home.html",
                        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 TitansX/11.26.11 KNB/1.0 iOS/13.3.1 imaicai/com.baobaoaichi.imaicai/5.6.0 imaicai/5.6.0 App/11g10/5.6.0 WKWebView EH/7.3.0 EHSkeleton/1",
                        "t": token
                    }
                }
                $cmp.get(oof, function (error, response, data) {
                    if (!error) {
                        const result = isJSON(data);
                        if (result && result.data.result == true) {
                            subTitle += '签到成功❗'
                            detail += '今日获取' + result.data.rewardValue
                                + '零钱 \n零钱总计：'
                                + balance;
                        } else {
                            subTitle += '重复签到'
                            detail += '重复签到 \n零钱总计：' + balance
                        }
                    } else {
                        subTitle += '签到接口请求失败，详情请见日志。'
                        detail += error
                        $cmp.log("美团买菜 failed response : \n" + error)
                    }
                    $cmp.notify(CookieName, subTitle, detail)
                    $cmp.done();
                })
            } else {
                $cmp.log("零钱总额获取失败")
            }
        } else {
            $cmp.log("美团买菜 failed response : 零钱总额获取失败")
        }
    })

}

function compatibility() {
    const e = "undefined" != typeof $request,
        t = "undefined" != typeof $httpClient, r = "undefined" != typeof $task,
        o = "undefined" != typeof $app && "undefined" != typeof $http,
        n = "function" == typeof require && !o, s = (() => {
            if (n) {
                const e = require("request");
                return {request: e}
            }
            return null
        })(), i = (e, s, i) => {
            r && $notify(e, s, i), t && $notification.post(e, s, i), n && a(
                e + s + i), o && $push.schedule(
                {title: e, body: s ? s + "\n" + i : i})
        }, u = (e, o) => r ? $prefs.setValueForKey(e, o) : t
        ? $persistentStore.write(e, o) : void 0,
        d = e => r ? $prefs.valueForKey(e) : t ? $persistentStore.read(e)
            : void 0,
        l = e => (e && (e.status ? e.statusCode = e.status : e.statusCode
            && (e.status = e.statusCode)), e), f = (e, i) => {
            r && ("string" == typeof e
            && (e = {url: e}), e.method = "GET", $task.fetch(e).then(e => {
                i(null, l(e), e.body)
            }, e => i(e.error, null, null))), t && $httpClient.get(e, (e, t, r) => {
                i(e, l(t), r)
            }), n && s.request(e, (e, t, r) => {
                i(e, l(t), r)
            }), o && ("string" == typeof e
            && (e = {url: e}), e.header = e.headers, e.handler = function (e) {
                let t = e.error;
                t && (t = JSON.stringify(e.error));
                let r = e.data;
                "object" == typeof r && (r = JSON.stringify(e.data)), i(t,
                    l(e.response), r)
            }, $http.get(e))
        }, p = (e, i) => {
            r && ("string" == typeof e
            && (e = {url: e}), e.method = "POST", $task.fetch(e).then(e => {
                i(null, l(e), e.body)
            }, e => i(e.error, null, null))), t && $httpClient.post(e,
                (e, t, r) => {
                    i(e, l(t), r)
                }), n && s.request.post(e, (e, t, r) => {
                i(e, l(t), r)
            }), o && ("string" == typeof e
            && (e = {url: e}), e.header = e.headers, e.handler = function (e) {
                let t = e.error;
                t && (t = JSON.stringify(e.error));
                let r = e.data;
                "object" == typeof r && (r = JSON.stringify(e.data)), i(t,
                    l(e.response), r)
            }, $http.post(e))
        }, a = e => console.log(e), y = (o = {}) => {
            r && e && $done(o), t && (e ? $done(o) : $done())
        };
    return {
        isQuanX: r,
        isSurge: t,
        isJSBox: o,
        isRequest: e,
        notify: i,
        write: u,
        read: d,
        get: f,
        post: p,
        log: a,
        done: y
    }
}

function hex_md5(r) {
    return rstr2hex(rstr_md5(str2rstr_utf8(r)))
}

function b64_md5(r) {
    return rstr2b64(rstr_md5(str2rstr_utf8(r)))
}

function any_md5(r, t) {
    return rstr2any(rstr_md5(str2rstr_utf8(r)), t)
}

function hex_hmac_md5(r, t) {
    return rstr2hex(rstr_hmac_md5(str2rstr_utf8(r), str2rstr_utf8(t)))
}

function b64_hmac_md5(r, t) {
    return rstr2b64(rstr_hmac_md5(str2rstr_utf8(r), str2rstr_utf8(t)))
}

function any_hmac_md5(r, t, d) {
    return rstr2any(rstr_hmac_md5(str2rstr_utf8(r), str2rstr_utf8(t)), d)
}

function md5_vm_test() {
    return "900150983cd24fb0d6963f7d28e17f72" == hex_md5("abc").toLowerCase()
}

function rstr_md5(r) {
    return binl2rstr(binl_md5(rstr2binl(r), 8 * r.length))
}

function rstr_hmac_md5(r, t) {
    var d = rstr2binl(r);
    d.length > 16 && (d = binl_md5(d, 8 * r.length));
    for (var n = Array(16), _ = Array(16), m = 0; m < 16; m++) {
        n[m] = 909522486
            ^ d[m], _[m] = 1549556828 ^ d[m];
    }
    var f = binl_md5(n.concat(rstr2binl(t)), 512 + 8 * t.length);
    return binl2rstr(binl_md5(_.concat(f), 640))
}

function rstr2hex(r) {
    for (var t, d = hexcase ? "0123456789ABCDEF" : "0123456789abcdef", n = "",
        _ = 0; _ < r.length; _++) {
        t = r.charCodeAt(_), n += d.charAt(
            t >>> 4 & 15) + d.charAt(15 & t);
    }
    return n
}

function rstr2b64(r) {
    for (var t = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
        d = "", n = r.length, _ = 0; _ < n; _ += 3) {
        for (var m = r.charCodeAt(_)
            << 16 | (_ + 1 < n ? r.charCodeAt(_ + 1) << 8 : 0) | (_ + 2 < n
                ? r.charCodeAt(_ + 2) : 0), f = 0; f < 4; f++) {
            8 * _ + 6 * f > 8
            * r.length ? d += b64pad : d += t.charAt(m >>> 6 * (3 - f) & 63);
        }
    }
    return d
}

function rstr2any(r, t) {
    var d, n, _, m, f, h = t.length, e = Array(Math.ceil(r.length / 2));
    for (d = 0; d < e.length; d++) {
        e[d] = r.charCodeAt(2 * d) << 8
            | r.charCodeAt(2 * d + 1);
    }
    var a = Math.ceil(8 * r.length / (Math.log(t.length) / Math.log(2))),
        i = Array(a);
    for (n = 0; n < a; n++) {
        for (f = Array(), m = 0, d = 0; d < e.length; d++) {
            m = (m << 16)
                + e[d], _ = Math.floor(m / h), m -= _ * h, (f.length > 0 || _
                > 0)
            && (f[f.length] = _);
        }
        i[n] = m, e = f
    }
    var o = "";
    for (d = i.length - 1; d >= 0; d--) {
        o += t.charAt(i[d]);
    }
    return o
}

function str2rstr_utf8(r) {
    for (var t, d, n = "", _ = -1; ++_ < r.length;) {
        t = r.charCodeAt(_), d = _
        + 1 < r.length ? r.charCodeAt(_ + 1) : 0, 55296 <= t && t <= 56319
        && 56320
        <= d && d <= 57343 && (t = 65536 + ((1023 & t) << 10) + (1023
            & d), _++), t
        <= 127 ? n += String.fromCharCode(t) : t <= 2047
            ? n += String.fromCharCode(
                192 | t >>> 6 & 31, 128 | 63 & t) : t <= 65535
                ? n += String.fromCharCode(224 | t >>> 12 & 15,
                    128 | t >>> 6 & 63,
                    128 | 63 & t) : t <= 2097151 && (n += String.fromCharCode(
                240 | t >>> 18 & 7, 128 | t >>> 12 & 63, 128 | t >>> 6 & 63,
                128 | 63 & t));
    }
    return n
}

function str2rstr_utf16le(r) {
    for (var t = "", d = 0; d < r.length; d++) {
        t += String.fromCharCode(
            255 & r.charCodeAt(d), r.charCodeAt(d) >>> 8 & 255);
    }
    return t
}

function str2rstr_utf16be(r) {
    for (var t = "", d = 0; d < r.length; d++) {
        t += String.fromCharCode(
            r.charCodeAt(d) >>> 8 & 255, 255 & r.charCodeAt(d));
    }
    return t
}

function rstr2binl(r) {
    for (var t = Array(r.length >> 2), d = 0; d < t.length; d++) {
        t[d] = 0;
    }
    for (d = 0; d < 8 * r.length; d += 8) {
        t[d >> 5] |= (255 & r.charCodeAt(
            d / 8)) << d % 32;
    }
    return t
}

function binl2rstr(r) {
    for (var t = "", d = 0; d < 32 * r.length; d += 8) {
        t += String.fromCharCode(
            r[d >> 5] >>> d % 32 & 255);
    }
    return t
}

function binl_md5(r, t) {
    r[t >> 5] |= 128 << t % 32, r[14 + (t + 64 >>> 9 << 4)] = t;
    for (var d = 1732584193, n = -271733879, _ = -1732584194, m = 271733878,
        f = 0; f < r.length; f += 16) {
        var h = d, e = n, a = _, i = m;
        d = md5_ff(d, n, _, m, r[f + 0], 7, -680876936), m = md5_ff(m, d, n, _,
            r[f + 1], 12, -389564586), _ = md5_ff(_, m, d, n, r[f + 2], 17,
            606105819), n = md5_ff(n, _, m, d, r[f + 3], 22,
            -1044525330), d = md5_ff(d, n, _, m, r[f + 4], 7,
            -176418897), m = md5_ff(m, d, n, _, r[f + 5], 12,
            1200080426), _ = md5_ff(_, m, d, n, r[f + 6], 17,
            -1473231341), n = md5_ff(n, _, m, d, r[f + 7], 22,
            -45705983), d = md5_ff(d, n, _, m, r[f + 8], 7,
            1770035416), m = md5_ff(m, d, n, _, r[f + 9], 12,
            -1958414417), _ = md5_ff(_, m, d, n, r[f + 10], 17,
            -42063), n = md5_ff(n, _, m, d, r[f + 11], 22,
            -1990404162), d = md5_ff(d, n, _, m, r[f + 12], 7,
            1804603682), m = md5_ff(m, d, n, _, r[f + 13], 12,
            -40341101), _ = md5_ff(_, m, d, n, r[f + 14], 17,
            -1502002290), n = md5_ff(n, _, m, d, r[f + 15], 22,
            1236535329), d = md5_gg(d, n, _, m, r[f + 1], 5,
            -165796510), m = md5_gg(m, d, n, _, r[f + 6], 9,
            -1069501632), _ = md5_gg(_, m, d, n, r[f + 11], 14,
            643717713), n = md5_gg(n, _, m, d, r[f + 0], 20,
            -373897302), d = md5_gg(d, n, _, m, r[f + 5], 5,
            -701558691), m = md5_gg(m, d, n, _, r[f + 10], 9,
            38016083), _ = md5_gg(_, m, d, n, r[f + 15], 14,
            -660478335), n = md5_gg(n, _, m, d, r[f + 4], 20,
            -405537848), d = md5_gg(d, n, _, m, r[f + 9], 5,
            568446438), m = md5_gg(m, d, n, _, r[f + 14], 9,
            -1019803690), _ = md5_gg(_, m, d, n, r[f + 3], 14,
            -187363961), n = md5_gg(n, _, m, d, r[f + 8], 20,
            1163531501), d = md5_gg(d, n, _, m, r[f + 13], 5,
            -1444681467), m = md5_gg(m, d, n, _, r[f + 2], 9,
            -51403784), _ = md5_gg(_, m, d, n, r[f + 7], 14,
            1735328473), n = md5_gg(n, _, m, d, r[f + 12], 20,
            -1926607734), d = md5_hh(d, n, _, m, r[f + 5], 4,
            -378558), m = md5_hh(m, d, n, _, r[f + 8], 11,
            -2022574463), _ = md5_hh(_, m, d, n, r[f + 11], 16,
            1839030562), n = md5_hh(n, _, m, d, r[f + 14], 23,
            -35309556), d = md5_hh(d, n, _, m, r[f + 1], 4,
            -1530992060), m = md5_hh(m, d, n, _, r[f + 4], 11,
            1272893353), _ = md5_hh(_, m, d, n, r[f + 7], 16,
            -155497632), n = md5_hh(n, _, m, d, r[f + 10], 23,
            -1094730640), d = md5_hh(d, n, _, m, r[f + 13], 4,
            681279174), m = md5_hh(m, d, n, _, r[f + 0], 11,
            -358537222), _ = md5_hh(_, m, d, n, r[f + 3], 16,
            -722521979), n = md5_hh(n, _, m, d, r[f + 6], 23,
            76029189), d = md5_hh(d, n, _, m, r[f + 9], 4,
            -640364487), m = md5_hh(m, d, n, _, r[f + 12], 11,
            -421815835), _ = md5_hh(_, m, d, n, r[f + 15], 16,
            530742520), n = md5_hh(n, _, m, d, r[f + 2], 23,
            -995338651), d = md5_ii(d, n, _, m, r[f + 0], 6,
            -198630844), m = md5_ii(m, d, n, _, r[f + 7], 10,
            1126891415), _ = md5_ii(_, m, d, n, r[f + 14], 15,
            -1416354905), n = md5_ii(n, _, m, d, r[f + 5], 21,
            -57434055), d = md5_ii(d, n, _, m, r[f + 12], 6,
            1700485571), m = md5_ii(m, d, n, _, r[f + 3], 10,
            -1894986606), _ = md5_ii(_, m, d, n, r[f + 10], 15,
            -1051523), n = md5_ii(n, _, m, d, r[f + 1], 21,
            -2054922799), d = md5_ii(d, n, _, m, r[f + 8], 6,
            1873313359), m = md5_ii(m, d, n, _, r[f + 15], 10,
            -30611744), _ = md5_ii(_, m, d, n, r[f + 6], 15,
            -1560198380), n = md5_ii(n, _, m, d, r[f + 13], 21,
            1309151649), d = md5_ii(d, n, _, m, r[f + 4], 6,
            -145523070), m = md5_ii(m, d, n, _, r[f + 11], 10,
            -1120210379), _ = md5_ii(_, m, d, n, r[f + 2], 15,
            718787259), n = md5_ii(n, _, m, d, r[f + 9], 21,
            -343485551), d = safe_add(d, h), n = safe_add(n, e), _ = safe_add(_,
            a), m = safe_add(m, i)
    }
    return Array(d, n, _, m)
}

function md5_cmn(r, t, d, n, _, m) {
    return safe_add(bit_rol(safe_add(safe_add(t, r), safe_add(n, m)), _), d)
}

function md5_ff(r, t, d, n, _, m, f) {
    return md5_cmn(t & d | ~t & n, r, t, _, m, f)
}

function md5_gg(r, t, d, n, _, m, f) {
    return md5_cmn(t & n | d & ~n, r, t, _, m, f)
}

function md5_hh(r, t, d, n, _, m, f) {
    return md5_cmn(t ^ d ^ n, r, t, _, m, f)
}

function md5_ii(r, t, d, n, _, m, f) {
    return md5_cmn(d ^ (t | ~n), r, t, _, m, f)
}

function safe_add(r, t) {
    var d = (65535 & r) + (65535 & t), n = (r >> 16) + (t >> 16) + (d >> 16);
    return n << 16 | 65535 & d
}

function bit_rol(r, t) {
    return r << t | r >>> 32 - t
}

var hexcase = 0, b64pad = "";
