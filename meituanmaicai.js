const cookieName = '美团买菜'
const $tools = tools();
const timeout = 3000; //接口超时退出, 用于可能发生的网络不稳定. 建议不少于3000毫秒, 0则关闭.
const showLog = false; //是否开启响应日志, true则开启

const token = 'wzyKpBaa-_ytszNBzzB38UUawJkGAAAA5goAANJc7ej5mox_nOofxbHwsx51iTqWIekcNGU4R5K2sKdm0J2XDiIMnPdtxoexeIcH_g'
const cookie = '_lxsdk_s=172e5207556-425-b95-989%7C%7C11; latlng=40.02726%2C116.31219%2C1592982075256; latlon=40.02726%2C116.31219%2C1592982075257; network=wifi; _lx_utm=utm_term%3D5.6.0%26utm_medium%3Diphone%26utm_content%3D00000000000006093A1EEABAC45CF854F8D211631705AA159274835250124603%26utm_source%3DAppStore%26utm_campaign%3DAimaicai_cBimaicai_cD100H0; logan_custom_report=; logan_session_token=14wjryj1y96kw82e5j0e; _utm_campaign=Aimaicai_cBimaicai_cD100H0; _utm_content=00000000000006093A1EEABAC45CF854F8D211631705AA159274835250124603; _utm_medium=iphone; _utm_source=AppStore; _utm_term=5.6.0; cityid=2; dpid=; token=wzyKpBaa-_ytszNBzzB38UUawJkGAAAA5goAANJc7ej5mox_nOofxbHwsx51iTqWIekcNGU4R5K2sKdm0J2XDiIMnPdtxoexeIcH_g; uuid=00000000000006093A1EEABAC45CF854F8D211631705AA159274835250124603; _lxsdk_unoinid=6093a1eeabac45cf854f8d211631705aa159274835250124603; _lxsdk=00000000000006093A1EEABAC45CF854F8D211631705AA159274835250124603; _lxsdk_cuid=172d51e34acc8-08a816df24192f-5207046f-3d10d-172d51e34adc8'
let msg = {};
//获取cookie
if ($tools.isRequest) {
  getCookie();
  $tools.time();
  $tools.done();
} else {
  doTask()
  $tools.time();
  $tools.done();
  //执行task
}

function getCookie() {

}

async function doTask() {
  await checkIn();
  await getBalance();
  await notify();
}

function checkIn() {
  return new Promise(resolve => {
    setTimeout(() => {
      const request = {
        url: 'https://mall.meituan.com/api/c/mallcoin/checkIn/userCheckIn?app_tag=union&bizId=2&poi=142&poiId=142&riskParams=%7B%22platform%22%3A5%2C%22app%22%3A95%2C%22utm_term%22%3A%225.6.0%22%2C%22uuid%22%3A%2200000000000006093A1EEABAC45CF854F8D211631705AA159274835250124603%22%2C%22utm_medium%22%3A%22iphone%22%2C%22fingerprint%22%3A%22i2HKpOmsirDPavelVfQBZNRCU7uhGC%2FsdjZJ%2BBikSX6mByMMl9SEO8b1Gfn2oNXNXijycsVvKbn5y8mUKLFahAq0yFxaHWjq4vazKjCwv3Sl1L9jv874soRojGSDJnmyi7J5Kkdz6qLUGifzn34pbvTPNL3EWwrHzZxn9e1H5NIx3BFcrGQwPRdOTro7XEQZeDu6vnCdlZvjw727XKFvFnxKYiFuJfsVvBsQaqtNcFlB%2F9Sb8OumPdibtZ4%2BHrOfgP52XiUU6OwNJNRnhEMmYHayC7A5eEHk7uCBBJ556OGbJDHABq97FeWWf5gzNN%2BmN0ApJdQl4FV%2BPgDbeZhcWH3NyhDjsARPSJ7pNBc7pVikBRA5skJIlPd%2Fh6Xb%2FAbfoYcnKzWwk8rYhwUcsgCcEQKusO5PwoHNRuKBk58OCbEbFlh5v12lfZBUUAX%2B5Ay62PpaASPkqC2QZtuXWtgRwGfpOHT9J0eLRcKtjOTH2P3AnBz7ecljoBSLSLKrmSd2ryjscfM1Vl%2FGShaGsQslMgr%2FUN3mEXzLY18Vg7u3VBXjgYOtPH2g3e92ZD%2Bhglgc7v9EXs9sM%2B39MwPSN0a2KCvzfj%2Bp96jpPZSgOHwauOS4VIl2ZSZaDsKivdLCFoDV1Bh6%2F3zn8sJ7sth05TA1HeWcM0GGbEts9vlV8AWXDrn0bprR9FkJVmg9vIRtP4DDkbJRgLXhtEvMmXY7p9s9nC17eAnxsZwbfkClcrBx7ocOfoRz%2Fv5RuShq7SxQmFUr7TpMffv%2Fna4RyYeNHrrQKPUojpS5Ls%2FZbRQdU6GyRKFLvoeU2oSDo8F0X1I7l4nbUBId%2B8o6F1Vu02TMPBxlgYz%2F%2BQNlNCtBtLeYgQ5qG9NRhZxw%2BQnc0cid%2BSi9cV6LaJZIgz8JoGc7lcszxrSa%2FfW6OLjbr0xklC%2BefjqPUY3GPBlQ2rEl98J61J8uf%2FNCDOBoyXSmeZVVzobvIneby6N5YJNL%2BChv0XoYAMQp3pxd4wU84dc1GFVgdcXbc35GrS6R3sUS4Ur6XeIIB9d915ZJeku6Pamf5e2JziTArnc8fu5LUaeIQx%2BoDyF06U2IDLOOwPGyphcey1fHCxr6bp0bGqFNNVJmzg7Zjh56enSaTYPQN5FLzf0yBWynqq7QEftqLt%2FesW%2BtzdNbpiNKJsGJOu8s%2F88Px8plnaTP450EiBCNwFxzkhCANGVkeEAcDE6bQuKa16S0OZAf3uJjd0fV7kqeuODy79ssfEntkPLMpiTgL4GCwyMm5wgaCeaDS1fC8sGkX4A2NdIM8YvyW2ql2LJrxOAvFD8OWA9Q%2Bk%2BTGnw0Ow2WFzBqkIQfxw1ndviwMR5xuItwCgla2VTGtz%2FJEsz9rXauKBQeDXtuiPX7WzZjAyP0C5x1siF958GPrEpKeX8vK3rGc5NcvsvMGA%3D%3D%22%7D&stockPois=142&tenantId=1&userId=245449496&utm_medium=iphone&utm_term=5.6.0&uuid=00000000000006093A1EEABAC45CF854F8D211631705AA159274835250124603#eyJDb29raWUiOiJfbHhzZGtfcz0xNzJlNTIwNzU1Ni00MjUtYjk1LTk4OSU3QyU3QzExOyBsYXRsbmc9NDAuMDI3MjYlMkMxMTYuMzEyMTklMkMxNTkyOTgyMDc1MjU2OyBsYXRsb249NDAuMDI3MjYlMkMxMTYuMzEyMTklMkMxNTkyOTgyMDc1MjU3OyBuZXR3b3JrPXdpZmk7IF9seF91dG09dXRtX3Rlcm0lM0Q1LjYuMCUyNnV0bV9tZWRpdW0lM0RpcGhvbmUlMjZ1dG1fY29udGVudCUzRDAwMDAwMDAwMDAwMDA2MDkzQTFFRUFCQUM0NUNGODU0RjhEMjExNjMxNzA1QUExNTkyNzQ4MzUyNTAxMjQ2MDMlMjZ1dG1fc291cmNlJTNEQXBwU3RvcmUlMjZ1dG1fY2FtcGFpZ24lM0RBaW1haWNhaV9jQmltYWljYWlfY0QxMDBIMDsgbG9nYW5fY3VzdG9tX3JlcG9ydD07IGxvZ2FuX3Nlc3Npb25fdG9rZW49MTR3anJ5ajF5OTZrdzgyZTVqMGU7IF91dG1fY2FtcGFpZ249QWltYWljYWlfY0JpbWFpY2FpX2NEMTAwSDA7IF91dG1fY29udGVudD0wMDAwMDAwMDAwMDAwNjA5M0ExRUVBQkFDNDVDRjg1NEY4RDIxMTYzMTcwNUFBMTU5Mjc0ODM1MjUwMTI0NjAzOyBfdXRtX21lZGl1bT1pcGhvbmU7IF91dG1fc291cmNlPUFwcFN0b3JlOyBfdXRtX3Rlcm09NS42LjA7IGNpdHlpZD0yOyBkcGlkPTsgdG9rZW49d3p5S3BCYWEtX3l0c3pOQnp6QjM4VVVhd0prR0FBQUE1Z29BQU5KYzdlajVtb3hfbk9vZnhiSHdzeDUxaVRxV0lla2NOR1U0UjVLMnNLZG0wSjJYRGlJTW5QZHR4b2V4ZUljSF9nOyB1dWlkPTAwMDAwMDAwMDAwMDA2MDkzQTFFRUFCQUM0NUNGODU0RjhEMjExNjMxNzA1QUExNTkyNzQ4MzUyNTAxMjQ2MDM7IF9seHNka191bm9pbmlkPTYwOTNhMWVlYWJhYzQ1Y2Y4NTRmOGQyMTE2MzE3MDVhYTE1OTI3NDgzNTI1MDEyNDYwMzsgX2x4c2RrPTAwMDAwMDAwMDAwMDA2MDkzQTFFRUFCQUM0NUNGODU0RjhEMjExNjMxNzA1QUExNTkyNzQ4MzUyNTAxMjQ2MDM7IF9seHNka19jdWlkPTE3MmQ1MWUzNGFjYzgtMDhhODE2ZGYyNDE5MmYtNTIwNzA0NmYtM2QxMGQtMTcyZDUxZTM0YWRjOCIsInQiOiJ3enlLcEJhYS1feXRzek5CenpCMzhVVWF3SmtHQUFBQTVnb0FBTkpjN2VqNW1veF9uT29meGJId3N4NTFpVHFXSWVrY05HVTRSNUsyc0tkbTBKMlhEaUlNblBkdHhvZXhlSWNIX2ciLCJSZWZlcmVyIjoiaHR0cHM6XC9cL21hbGwubWVpdHVhbi5jb21cL2NoZWNraW5cL2hvbWUuaHRtbD9wYWdlX3NvdXJjZT11c2VyX2NlbnRlciZ1c2VyaWQ9MjQ1NDQ5NDk2JnZlcnNpb25fbmFtZT01LjYuMCZ1dG1fdGVybT01LjYuMCZiaXpJZD0yJmFwcF90YWc9dW5pb24mc3RvY2tQb2lzPTE0MiZ4dXVpZD1jMzI0ODBiMDg1NzU0ZTE3OTZiYjIwMmQxZWZiOTAxYTA2ZjQ3ZTJjMGJiODU3NzFlMiZ0b2tlbj13enlLcEJhYS1feXRzek5CenpCMzhVVWF3SmtHQUFBQTVnb0FBTkpjN2VqNW1veF9uT29meGJId3N4NTFpVHFXSWVrY05HVTRSNUsyc0tkbTBKMlhEaUlNblBkdHhvZXhlSWNIX2cmdXRtX21lZGl1bT1pcGhvbmUmc291cmNlQXBwPWlwaG9uZSZwb2k9MTQyJmNpPTImdXRtX2NvbnRlbnQ9MDAwMDAwMDAwMDAwMDYwOTNBMUVFQUJBQzQ1Q0Y4NTRGOEQyMTE2MzE3MDVBQTE1OTI3NDgzNTI1MDEyNDYwMyZ1dG1fc291cmNlPUFwcFN0b3JlJnV0bV9jYW1wYWlnbj1BaW1haWNhaV9jQmltYWljYWlfY0QxMDBIMCZ1dWlkPTAwMDAwMDAwMDAwMDA2MDkzQTFFRUFCQUM0NUNGODU0RjhEMjExNjMxNzA1QUExNTkyNzQ4MzUyNTAxMjQ2MDMmbGFuZ3VhZ2U9emhfQ04mX19yZXFUcmFjZUlEPTBDQzkyRDc5LUE5NDMtNDVBRS1COUM3LTU0NEIwMUQ1MTFEOSIsIkhvc3QiOiJtYWxsLm1laXR1YW4uY29tIiwiVXNlci1BZ2VudCI6Ik1vemlsbGFcLzUuMCAoaVBob25lOyBDUFUgaVBob25lIE9TIDEzXzNfMSBsaWtlIE1hYyBPUyBYKSBBcHBsZVdlYktpdFwvNjA1LjEuMTUgKEtIVE1MLCBsaWtlIEdlY2tvKSBNb2JpbGVcLzE1RTE0OCBUaXRhbnNYXC8xMS4yNi4xMSBLTkJcLzEuMCBpT1NcLzEzLjMuMSBpbWFpY2FpXC9jb20uYmFvYmFvYWljaGkuaW1haWNhaVwvNS42LjAgaW1haWNhaVwvNS42LjAgQXBwXC8xMWcxMFwvNS42LjAgV0tXZWJWaWV3IEVIXC83LjMuMCBFSFNrZWxldG9uXC8xIn0=',
        headers: {
          "Cookie": cookie,
          "Host": "mall.meituan.com",
          "Referer": "https://mall.meituan.com/checkin/home.html",
          "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 TitansX/11.26.11 KNB/1.0 iOS/13.3.1 imaicai/com.baobaoaichi.imaicai/5.6.0 imaicai/5.6.0 App/11g10/5.6.0 WKWebView EH/7.3.0 EHSkeleton/1",
          "t": token
        }
      }
      msg.checkIn = {};
      $tools.get(request, function (error, response, data) {
        const result = isJSON(data);
        if (result && result.data.result == true) {
          msg.checkIn.status = true;
          msg.checkIn.data = result.data.rewardValue;
        } else {
          msg.checkIn.status = false;
          msg.checkIn.error = error;
        }
      })
      resolve();
    }, timeout);
  });
}

function getBalance() {
  return new Promise(resolve => {
    setTimeout(() => {
      const request = {
        url: 'https://mall.meituan.com/api/c/mallcoin/checkIn/getCheckInMainView?app_tag=union&bizId=2&channel=1&poi=295&poiId=295&stockPois=295&tenantId=1&time=1593312233127&userId=245449496&utm_medium=iphone&utm_term=5.6.0&uuid=00000000000006093A1EEABAC45CF854F8D211631705AA159274835250124603',
        headers: {
          "Cookie": cookie,
          "Host": "mall.meituan.com",
          "Referer": "https://mall.meituan.com/checkin/home.html",
          "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 TitansX/11.26.11 KNB/1.0 iOS/13.3.1 imaicai/com.baobaoaichi.imaicai/5.6.0 imaicai/5.6.0 App/11g10/5.6.0 WKWebView EH/7.3.0 EHSkeleton/1",
          "t": token
        }
      }
      msg.balance = {};
      $cmp.get(request, function (error, response, data) {
        const result = isJSON(data);
        if (result && result.code == 0) {
          msg.balance.status = true;
          msg.balance.data = result.data.userInfo.balance
        } else {
          $tools.log(showLog, error);
          msg.balance.status = false;
          msg.balance.msg = error;
        }
      })
      resolve();
    }, timeout);
  });
}

function notify() {
  return new Promise(resolve => {
    try {
      let message = "";
      if (msg.checkIn.status) {
        message += "签到金额:" + msg.checkIn.data;
      } else {
        message += "签到金额:" + msg.checkIn.error;
      }
      message = "\n";
      if (msg.balance.status) {
        message += "总额:" + msg.balance.data;
      } else {
        message += "总额:" + msg.balance.error;
      }
      $tools.notify(cookieName, cookieName, message)
      resolve();
    } catch (e) {
      resolve();
    }
  });
}

function isJSON(str) {
  $tools.log(showLog, str);
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

function tools() {
  const start = Date.now()
  const isRequest = typeof $request != "undefined"
  const isSurge = typeof $httpClient != "undefined"
  const isQuanX = typeof $task != "undefined"
  const isLoon = typeof $loon != "undefined"
  const isJSBox = typeof $app != "undefined" && typeof $http != "undefined"
  const isNode = typeof require == "function" && !isJSBox;
  const node = (() => {
    if (isNode) {
      const request = require('request');
      return ({
        request
      })
    } else {
      return (null)
    }
  })()
  const notify = (title, subtitle, message) => {
    if (isQuanX) {
      $notify(title, subtitle, message)
    }
    if (isSurge) {
      $notification.post(title, subtitle, message)
    }
    if (isNode) {
      log(showLog, title + subtitle + message)
    }
    if (isJSBox) {
      $push.schedule({
        title: title,
        body: subtitle ? subtitle + "\n" + message : message
      })
    }
  }
  const write = (value, key) => {
    if (isQuanX) {
      return $prefs.setValueForKey(value, key)
    }
    if (isSurge) {
      return $persistentStore.write(value, key)
    }
  }
  const read = (key) => {
    if (isQuanX) {
      return $prefs.valueForKey(key)
    }
    if (isSurge) {
      return $persistentStore.read(key)
    }
  }
  const adapterStatus = (response) => {
    if (response) {
      if (response.status) {
        response["statusCode"] = response.status
      } else if (response.statusCode) {
        response["status"] = response.statusCode
      }
    }
    return response
  }
  const get = (options, callback) => {
    if (isQuanX) {
      if (typeof options == "string") {
        options = {
          url: options
        }
      }
      options["method"] = "GET"
      $task.fetch(options).then(response => {
        callback(null, adapterStatus(response), response.body)
      }, reason => callback(reason.error, null, null))
    }
    if (isSurge) {
      $httpClient.get(options, (error, response, body) => {
        callback(error, adapterStatus(response), body)
      })
    }
    if (isNode) {
      node.request(options, (error, response, body) => {
        callback(error, adapterStatus(response), body)
      })
    }
    if (isJSBox) {
      if (typeof options == "string") {
        options = {
          url: options
        }
      }
      options["header"] = options["headers"]
      options["handler"] = function (resp) {
        let error = resp.error;
        if (error) {
          error = JSON.stringify(resp.error)
        }
        let body = resp.data;
        if (typeof body == "object") {
          body = JSON.stringify(resp.data);
        }
        callback(error, adapterStatus(resp.response), body)
      };
      $http.get(options);
    }
  }
  const post = (options, callback) => {
    if (isQuanX) {
      if (typeof options == "string") {
        options = {
          url: options
        }
      }
      options["method"] = "POST"
      $task.fetch(options).then(response => {
        callback(null, adapterStatus(response), response.body)
      }, reason => callback(reason.error, null, null))
    }
    if (isSurge) {
      $httpClient.post(options, (error, response, body) => {
        callback(error, adapterStatus(response), body)
      })
    }
    if (isNode) {
      node.request.post(options, (error, response, body) => {
        callback(error, adapterStatus(response), body)
      })
    }
    if (isJSBox) {
      if (typeof options == "string") {
        options = {
          url: options
        }
      }
      options["header"] = options["headers"]
      options["handler"] = function (resp) {
        let error = resp.error;
        if (error) {
          error = JSON.stringify(resp.error)
        }
        let body = resp.data;
        if (typeof body == "object") {
          body = JSON.stringify(resp.data)
        }
        callback(error, adapterStatus(resp.response), body)
      }
      $http.post(options);
    }
  }
  const log = (showLog, message) => {
    if (showLog) {
      console.log(message)
    }
  }

  const time = () => {
    const end = ((Date.now() - start) / 1000).toFixed(2)
    return console.log('\n签到用时: ' + end + ' 秒')
  }
  const done = (value = {}) => {
    if (isQuanX) {
      isRequest ? $done(value) : null
    }
    if (isSurge) {
      isRequest ? $done(value) : $done()
    }
  }
  return {
    isRequest,
    isJSBox,
    isSurge,
    isLoon,
    isNode,
    notify,
    write,
    read,
    get,
    post,
    log,
    time,
    done
  }
}
