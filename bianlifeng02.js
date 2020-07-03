
const version = '/v1'
const shareCode = '3570061933985834'
const homeURL = 'https://h5.bianlifeng.com/meepo/taskCenter/home' + version
const signInURL = 'https://h5.bianlifeng.com/meepo/taskCenter/today/signIn' + version
const receiveURL = 'https://h5.bianlifeng.com/meepo/taskCenter/task/receive' + version
const finishURL = 'https://order-api.blibee.com/meepo/taskCenter/task/finish' + version
const cookieName = '便利蜂'
const cookieKey = 'blibee_2'
const deviceKey = 'blibee_deviceid_2'
const tokenKey = 'blibee_token_2'
const userKey = 'blibee_userid_2'
const regex = /__DEVICEID__=(\S*);\s__LOGIN_MINI__=;\s__TOKEN__=(\S*);\s__USERID__=(\S*)/
const datainfo = {}
const undoList = new Array()
const descList = new Array()
let ValidCookie = true
const $cmp = compatibility()

async function Sign() {
    await Valid()
    if (ValidCookie) {
        if (datainfo.today) {
            datainfo.isSign = true
        } else {
            await signIn()
        }
        await receive()
        await finish()
        await result()
        await notify()
    } else {
        $cmp.notify(cookieName + ' Cookie 失效❗️', '', '脚本终止，请重新获取 Cookie')
    }

}

if ($cmp.isRequest) {
    GetCookie()
    $cmp.done()
} else {
    makeHeaders()
    Sign()
    $cmp.done()
}

function GetCookie() {
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

function makeHeaders() {
    datainfo.headers1 = {
        'Content-Type': 'application/json; charset=UTF-8',
        'Cookie': $cmp.read(cookieKey),
        'Referer': 'https://h5.bianlifeng.com/bond/taskCenterNew?shareInfoFromH5=1&shareCode=' + shareCode + '&token=' + $cmp.read(tokenKey) + '&deviceId=' + $cmp.read(deviceKey) + '&userId=' + $cmp.read(userKey),
        'deviceid': $cmp.read(deviceKey),
        'token': $cmp.read(tokenKey),
    }
    datainfo.headers2 = {
        'deviceid': $cmp.read(deviceKey),
        'token': $cmp.read(tokenKey),
        'ws_user_id': $cmp.read(userKey),
    }
}

function Valid() {
    return new Promise(resolve => {
        const home = {
            url: homeURL,
            headers: datainfo.headers1,
            body: '{"all":true,"page":{"pageSize":10,"pageNo":1}}'
        }
        $cmp.post(home, function (error, response, data) {
            try{
                if (response.status == 200) {
                    const homeobj = JSON.parse(data)
                    if (homeobj.status == '0') {
                        datainfo.pointUnit = homeobj.data.pointUnit
                        datainfo.today = homeobj.data.signInTaskVo.todayCheckIn
                        datainfo.signid = homeobj.data.signInTaskVo.userSignInId
                        datainfo.tasklist = homeobj.data.taskListVo.taskItemVos
                    } else {
                        ValidCookie = false
                    }
                } else {
                    ValidCookie = false
                }
                resolve()
            } catch (e) {
                $cmp.notify(cookieName + "任务主页" + e.name + "‼️", JSON.stringify(e), e.message)
                resolve()
            }
        })
    })
}

function signIn() {
    return new Promise(resolve => {
        const today = {
            url: signInURL + '?userSignInId=' + datainfo.signid + '&shareId=' + shareCode,
            headers: datainfo.headers1
        }
        $cmp.get(today, function(error, response, data) {
            try{
                if (error) {
                    datainfo.error = 1
                    datainfo.errormessage = error
                } else {
                    datainfo.signIn = JSON.parse(data)
                }
                resolve()
            } catch (e) {
                $cmp.notify(cookieName + "签到" + e.name + "‼️", JSON.stringify(e), e.message)
                resolve()
            }
        })
    })
}

function receive() {
    return new Promise(resolve => {
        datainfo.receiveCnt = 0
        datainfo.receiveFail = 0
        for (let task of datainfo.tasklist) {
            let taskStatus = task.status
            let actionName = task.actionName
            let param = JSON.stringify(task.param)
            let taskName = task.taskName
            if (taskStatus == "init") {
                const bodyValue = '{"actionName":"' + actionName+ '","param":' + param + '}'
                const receive = {
                    url: receiveURL,
                    headers: datainfo.headers1,
                    body: bodyValue
                }
                $cmp.post(receive, function(error, response, data) {
                    try{
                        const receiveobj = JSON.parse(data)
                        if (receiveobj.status == '0') {
                            datainfo.receiveCnt += 1
                        } else {
                            datainfo.receiveFail += 1
                            $cmp.log(cookieName + " 接" + taskName + "任务失败：" + receiveobj.msg)
                        }
                    } catch (e) {
                        $cmp.notify(cookieName + "接" + taskName + "任务" + e.name + "‼️", JSON.stringify(e), e.message)
                    }
                })
            }
        }
        resolve()
    })
}

function finish() {
    return new Promise(resolve => {
        const home = {
            url: homeURL,
            headers: datainfo.headers1,
            body: '{"all":true,"page":{"pageSize":10,"pageNo":1}}'
        }
        datainfo.finishPoints = 0
        datainfo.finishFail = 0
        $cmp.post(home, function (error, response, data) {
            const homeobj = JSON.parse(data)
            const tasklist = homeobj.data.taskListVo.taskItemVos
            for (let task of tasklist) {
                let taskStatus = task.status
                let taskId = task.taskId
                let taskName = task.taskName
                let taskDesc = task.desc
                if (taskStatus == 'doing') {
                    const finish = {
                        url: finishURL + '?taskId=' + taskId,
                        headers: datainfo.headers2
                    }
                    $cmp.get(finish, function (error, response, data) {
                        try {
                            const finishobj = JSON.parse(data)
                            if (finishobj.status == '0') {
                                datainfo.finishPoints += Number(finishobj.data.pointAmount)
                            } else {
                                $cmp.log(cookieName + ' ' + taskName + "任务未完成：" + taskDesc)
                                undoList[datainfo.finishFail] = taskName
                                descList[datainfo.finishFail] = taskDesc
                                datainfo.finishFail += 1
                            }
                        } catch (e) {
                            $cmp.notify(cookieName + "做" + taskName + "任务" + e.name + "‼️", JSON.stringify(e), e.message)
                        }
                    })
                }
            }
        })
        resolve()
    })
}

function result() {
    return new Promise(resolve => {
        const home = {
            url: homeURL,
            headers: datainfo.headers1,
            body: '{"all":true,"page":{"pageSize":10,"pageNo":1}}'
        }
        $cmp.post(home, function (error, response, data) {
            const homeobj = JSON.parse(data)
            try{
                datainfo.allpoints = homeobj.data.myPoint
                datainfo.topDesc = homeobj.data.taskListVo.topDesc
                if (homeobj.data.signInTaskVo.shareId != shareCode) {
                    $cmp.log('📌shareCode: ' + homeobj.data.signInTaskVo.shareId)
                    datainfo.codeStatus = 'change'
                }
                resolve()
            } catch (e) {
                $cmp.notify(cookieName + "结果主页" + e.name + "‼️", JSON.stringify(e), e.message)
                resolve()
            }
        })
    })
}

function notify() {
    return new Promise(resolve => {
        try {
            let Title = cookieName + ' - '
            let subTitle = ''
            let detail = ''
            let errormessage = ''
            if (datainfo.error) {
                $cmp.log("blibee failed response: \n" + datainfo.errormessage)
                Title += '签到接口请求失败️'
                errormessage += '\n签到接口请求失败,详情请看日志。'
            } else if (datainfo.isSign) {
                Title += '重复签到！😊'
            } else {
                if (datainfo.signIn.status == '0') {
                    Title += '签到成功！🎉'
                    detail += '签到获得 ' + datainfo.signIn.data.pointAmount + ' ' + datainfo.pointUnit + '，'
                } else {
                    $cmp.log("blibee failed response: \n" + JSON.stringify(datainfo.signIn))
                    Title += '签到失败‼️'
                    errormessage += '\n签到失败，详情请看日志。'
                }
            }
            if (datainfo.receiveCnt) {
                subTitle += '领取任务 ' + datainfo.receiveCnt + ' 个 '
            }
            if (datainfo.receiveFail) {
                errormessage = '\n领取任务失败 ' + datainfo.receiveFail + ' 个，详情请看日志。'
            }
            if (datainfo.finishPoints) {
                detail += '任务获得 ' + datainfo.finishPoints + ' ' + datainfo.pointUnit + '，'
            }
            if (datainfo.finishFail) {
                errormessage += '\n未完成任务：'
                for (let i = 0; i < datainfo.finishFail; i++) {
                    errormessage += '\n' + undoList[i] + '：' + descList[i]
                }
            }
            subTitle += datainfo.topDesc
            detail += '账户共有 ' + datainfo.allpoints + ' ' + datainfo.pointUnit
            if (datainfo.codeStatus) detail += '。'
            $cmp.notify(Title, subTitle, detail + errormessage)
            resolve()
        } catch (e) {
            $cmp.notify("通知模块 " + e.name + "‼️", JSON.stringify(e), e.message)
            resolve()
        }
    })
}

function compatibility() {
    const isRequest = typeof $request != "undefined"
    const isSurge = typeof $httpClient != "undefined"
    const isQuanX = typeof $task != "undefined"
    const isJSBox = typeof $app != "undefined" && typeof $http != "undefined"
    const isNode = typeof require == "function" && !isJSBox;
    const node = (() => {
        if (isNode) {
            const request = require('request');
            return ({request})
        } else {
            return (null)
        }
    })()
    const notify = (title, subtitle, message) => {
        if (isQuanX) $notify(title, subtitle, message)
        if (isSurge) $notification.post(title, subtitle, message)
        if (isNode) log(title+subtitle+message)
        if (isJSBox) $push.schedule({title: title, body: subtitle?subtitle+"\n"+message:message})
    }
    const write = (value, key) => {
        if (isQuanX) return $prefs.setValueForKey(value, key)
        if (isSurge) return $persistentStore.write(value, key)
    }
    const read = (key) => {
        if (isQuanX) return $prefs.valueForKey(key)
        if (isSurge) return $persistentStore.read(key)
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
            if (typeof options == "string") options = { url: options }
            options["method"] = "GET"
            $task.fetch(options).then(response => {
                callback(null, adapterStatus(response), response.body)
            }, reason => callback(reason.error, null, null))
        }
        if (isSurge) $httpClient.get(options, (error, response, body) => {
            callback(error, adapterStatus(response), body)
        })
        if (isNode) {
            node.request(options, (error, response, body) => {
                callback(error, adapterStatus(response), body)
            })
        }
        if (isJSBox) {
            if (typeof options == "string") options = {url: options}
            options["header"] = options["headers"]
            options["handler"] = function (resp) {
                let error = resp.error;
                if (error) error = JSON.stringify(resp.error)
                let body = resp.data;
                if (typeof body == "object") body = JSON.stringify(resp.data);
                callback(error, adapterStatus(resp.response), body)
            };
            $http.get(options);
        }
    }
    const post = (options, callback) => {
        if (isQuanX) {
            if (typeof options == "string") options = { url: options }
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
            if (typeof options == "string") options = {url: options}
            options["header"] = options["headers"]
            options["handler"] = function (resp) {
                let error = resp.error;
                if (error) error = JSON.stringify(resp.error)
                let body = resp.data;
                if (typeof body == "object") body = JSON.stringify(resp.data)
                callback(error, adapterStatus(resp.response), body)
            }
            $http.post(options);
        }
    }
    const log = (message) => console.log(message)
    const done = (value = {}) => {
        if (isQuanX) isRequest ? $done(value) : null
        if (isSurge) isRequest ? $done(value) : $done()
    }
    return { isQuanX, isSurge, isJSBox, isRequest, notify, write, read, get, post, log, done }
}
