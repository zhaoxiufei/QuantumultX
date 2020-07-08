const cookieName = '美团买菜'
const $tools = tools();
const showLog = true; //是否开启响应日志, true则开启

const token = '1py8o-dU__HMxNYnTKqLit3zJSUAAAAAAgsAANwLRiD8sLJ-RVT1D3aSzEnzCmObixjui_ZFqADnaiPGmXSWPs2F8OY_gM4sVfHZiQ'
const cookie = '_lxsdk_s=1732e202b42-34e-a0-d62%7C%7C109; latlng=40.02708%2C116.31237%2C1594209049407; latlon=40.02708%2C116.31237%2C1594209049408; network=wifi; _utm_campaign=Aimaicai_cBimaicai_cD100H0; _utm_content=00000000000006093A1EEABAC45CF854F8D211631705AA159274835250124603; _utm_medium=iphone; _utm_source=AppStore; _utm_term=5.6.0; cityid=2; dpid=; token=1py8o-dU__HMxNYnTKqLit3zJSUAAAAAAgsAANwLRiD8sLJ-RVT1D3aSzEnzCmObixjui_ZFqADnaiPGmXSWPs2F8OY_gM4sVfHZiQ; uuid=00000000000006093A1EEABAC45CF854F8D211631705AA159274835250124603; _lx_utm=utm_term%3D5.6.0%26utm_medium%3Diphone%26utm_content%3D00000000000006093A1EEABAC45CF854F8D211631705AA159274835250124603%26utm_source%3DAppStore%26utm_campaign%3DAimaicai_cBimaicai_cD100H0; logan_custom_report=; logan_session_token=cgjetf8m1rkj11p6fq4f; _lxsdk_unoinid=6093a1eeabac45cf854f8d211631705aa159274835250124603; _lxsdk=00000000000006093A1EEABAC45CF854F8D211631705AA159274835250124603; _lxsdk_cuid=1732e202b40c8-0231aaf527eb8d-787f1d-3d10d-1732e202b40c8'
let msg = {};
//获取cookie
if ($tools.isRequest) {
  getCookie();
  $tools.done();
} else {
  doTask()
  $tools.done();
  //执行task
}

function getCookie() {

}

async function doTask() {
  await checkIn();
  await getBalance();
  await notify()
}

function checkIn() {
  return new Promise(resolve => {
    const request = {
      url: 'https://mall.meituan.com/api/c/mallcoin/checkIn/getCheckInMainView?app_tag=union&bizId=2&channel=1&poi=295&poiId=295&stockPois=295&tenantId=1&time=1594207002866&userId=111116212&utm_medium=iphone&utm_term=5.6.0&uuid=00000000000006093A1EEABAC45CF854F8D211631705AA159274835250124603',
      headers: {
        "Cookie": '_utm_campaign=Aimaicai_cBimaicai_cD100H0; _utm_content=00000000000006093A1EEABAC45CF854F8D211631705AA159274835250124603; _utm_medium=iphone; _utm_source=AppStore; _utm_term=5.6.0; cityid=2; dpid=; latlng=40.02708%2C116.31237%2C1594207000817; latlon=40.02708%2C116.31237%2C1594207000784; network=wifi; token=1py8o-dU__HMxNYnTKqLit3zJSUAAAAAAgsAANwLRiD8sLJ-RVT1D3aSzEnzCmObixjui_ZFqADnaiPGmXSWPs2F8OY_gM4sVfHZiQ; uuid=00000000000006093A1EEABAC45CF854F8D211631705AA159274835250124603; _lxsdk_s=1732e202b42-34e-a0-d62%7C%7C42; _lx_utm=utm_term%3D5.6.0%26utm_medium%3Diphone%26utm_content%3D00000000000006093A1EEABAC45CF854F8D211631705AA159274835250124603%26utm_source%3DAppStore%26utm_campaign%3DAimaicai_cBimaicai_cD100H0; _lxsdk_unoinid=6093a1eeabac45cf854f8d211631705aa159274835250124603; _lxsdk=00000000000006093A1EEABAC45CF854F8D211631705AA159274835250124603; _lxsdk_cuid=1732e202b40c8-0231aaf527eb8d-787f1d-3d10d-1732e202b40c8',
        "Host": "mall.meituan.com",
        "Referer": "https://mall.meituan.com/checkin/home.html?page_source=user_center&userid=111116212&version_name=5.6.0&utm_term=5.6.0&bizId=2&app_tag=union&stockPois=244&xuuid=c32480b085754e1796bb202d1efb901a06f47e2c0bb85771e2&token=1py8o-dU__HMxNYnTKqLit3zJSUAAAAAAgsAANwLRiD8sLJ-RVT1D3aSzEnzCmObixjui_ZFqADnaiPGmXSWPs2F8OY_gM4sVfHZiQ&utm_medium=iphone&sourceApp=iphone&poi=244&ci=2&utm_content=00000000000006093A1EEABAC45CF854F8D211631705AA159274835250124603&utm_source=AppStore&utm_campaign=Aimaicai_cBimaicai_cD100H0&uuid=00000000000006093A1EEABAC45CF854F8D211631705AA159274835250124603&language=zh_CN&__reqTraceID=841437D4-416E-4213-9FC3-37D693A17340",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 TitansX/11.26.11 KNB/1.0 iOS/13.3.1 imaicai/com.baobaoaichi.imaicai/5.6.0 imaicai/5.6.0 App/11g10/5.6.0 WKWebView EH/7.3.0 EHSkeleton/1",
        "t": '1py8o-dU__HMxNYnTKqLit3zJSUAAAAAAgsAANwLRiD8sLJ-RVT1D3aSzEnzCmObixjui_ZFqADnaiPGmXSWPs2F8OY_gM4sVfHZiQ'
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
        msg.checkIn.error = "重复签到";
      }
      resolve();
    })

  });
}

function getBalance() {
  return new Promise(resolve => {
    const request = {
      url: '/api/c/mallcoin/checkIn/getCheckInMainView?app_tag=union&bizId=2&channel=1&poi=244&poiId=244&stockPois=244&tenantId=1&time=1594207002866&userId=111116212&utm_medium=iphone&utm_term=5.6.0&uuid=00000000000006093A1EEABAC45CF854F8D211631705AA159274835250124603',
      headers: {
        "Cookie": cookie,
        "Host": "mall.meituan.com",
        "Referer": "https://mall.meituan.com/checkin/home.html",
        "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 13_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Mobile/15E148 TitansX/11.26.11 KNB/1.0 iOS/13.3.1 imaicai/com.baobaoaichi.imaicai/5.6.0 imaicai/5.6.0 App/11g10/5.6.0 WKWebView EH/7.3.0 EHSkeleton/1",
        "t": token
      }
    }
    msg.balance = {};
    $tools.get(request, function (error, response, data) {
      const result = isJSON(data);
      if (result && result.code == 0) {
        msg.balance.status = true;
        msg.balance.data = result.data.userInfo.balance
      } else {
        $tools.log(showLog, error);
        msg.balance.status = false;
        msg.balance.msg = error;
      }
      resolve();
    })
  });
}

function notify() {
  return new Promise(resolve => {
    try {
      $tools.log(showLog, msg)
      let message = "";
      if (msg.checkIn.status) {
        message += "签到金额:" + msg.checkIn.data;
      } else {
        message += "签到金额:" + msg.checkIn.error;
      }
      message += "\n";
      if (msg.balance.status) {
        message += "总额:" + msg.balance.data;
      } else {
        message += "总额:" + msg.balance.error;
      }
      $tools.notify(cookieName, cookieName, message)
      $tools.time();
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
