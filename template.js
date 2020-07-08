const cookieName = '美团买菜'
const $tools = tools();
const timeout = 3000; //接口超时退出, 用于可能发生的网络不稳定. 建议不少于3000毫秒, 0则关闭.
const showLog = false; //是否开启响应日志, true则开启

//结束
//获取cookie
if ($tools.isRequest()) {
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
  if ($request && $request.method == 'POST') {
    let cookieKeyValue = $request.headers['Cookie']
    if ($cmp.read(cookieKey) != (undefined || null)) {
      if ($cmp.read(cookieKey) != cookieKeyValue) {
        let cookie = $cmp.write(cookieKeyValue, cookieKey)
        if (!cookie) {
          $cmp.notify("更新" + cookieName + " Cookie 失败‼️", "", "")
        } else {
          let deviceKeyValue = regex.exec(cookieKeyValue)[1]
          let tokenKeyValue = regex.exec(cookieKeyValue)[2]
          let userKeyValue = regex.exec(cookieKeyValue)[3]
          $cmp.write(deviceKeyValue, deviceKey)
          $cmp.write(tokenKeyValue, tokenKey)
          $cmp.write(userKeyValue, userKey)
          $cmp.notify("更新" + cookieName + " Cookie 成功 🎉", "", "")
        }
      }
    } else {
      let cookie = $cmp.write(cookieKeyValue, cookieKey);
      if (!cookie) {
        $cmp.notify("首次写入" + cookieName + " Cookie 失败‼️", "", "")
      } else {
        let deviceKeyValue = regex.exec(cookieKeyValue)[1]
        let tokenKeyValue = regex.exec(cookieKeyValue)[2]
        let userKeyValue = regex.exec(cookieKeyValue)[3]
        $cmp.write(deviceKeyValue, deviceKey)
        $cmp.write(tokenKeyValue, tokenKey)
        $cmp.write(userKeyValue, userKey)
        $cmp.notify("首次写入" + cookieName + " Cookie 成功 🎉", "", "")
      }
    }
  } else {
    $cmp.notify("写入" + cookieName + " Cookie 失败‼️", "", "配置错误, 无法读取请求头。")
  }
}

function doTask() {

}

function runAsync1() {
  var p = new Promise(function (resolve, reject) {
    //做一些异步操作
    const time = new Date().getTime()
    setTimeout(function () {
      console.log('异步任务1执行完成');
      resolve('随便什么数据1');
    }, 3000);
  });
  return p;
}

function runAsync2() {
  var p = new Promise(function (resolve, reject) {
    //做一些异步操作
    setTimeout(function () {
      console.log('异步任务2执行完成');
      resolve('随便什么数据2');
    }, 5000);
  });
  return p;
}

function runAsync3() {
  var p = new Promise(function (resolve, reject) {
    //做一些异步操作
    setTimeout(function () {
      console.log('异步任务3执行完成');
      resolve('随便什么🎉🎉数据3');
    }, 2000);
  });
  return p;
}

//分步执行
runAsync1()
.then(function (data) {
  console.log(data);
  return runAsync2();
})
.then(function (data) {
  console.log(data);
  return runAsync3();
})
.then(function (data) {
  console.log(data);
});
//并发执行
Promise
.all([runAsync1(), runAsync2(), runAsync3()])
.then(function (results) {
  console.log(results.length);
});

sign()

function sign() {
  const url = {url: signurlVal, headers: JSON.parse(signheaderVal)}
  tools.post(url, (error, response, data) => {
    tools.log(`${cookieName}, data: ${data}`)
    const title = `${cookieName}`
    let subTitle = ''
    let detail = ''
    const result = JSON.parse(data)
    if (result.result_code == "success") {
      subTitle = `签到结果: 成功`
      detail = `签到积分: ${result.data.stats.credit_amount}, 连签: ${result.data.stats.continuous_checkin_days}天`
    } else if (result.result_code == "credit_limit_reached") {
      subTitle = `签到结果: 成功 (重复签到)`
    } else {
      subTitle = `签到结果: 失败`
      detail = `说明: ${result.debug_msg}, 请重新获取`
    }
    tools.msg(title, subTitle, detail)
    tools.done()
  })
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
      log(title + subtitle + message)
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
};
