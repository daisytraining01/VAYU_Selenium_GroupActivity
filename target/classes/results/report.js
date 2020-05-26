$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/FeatureFile3.feature");
formatter.feature({
  "line": 2,
  "name": "Title of your feature",
  "description": "",
  "id": "title-of-your-feature",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@All"
    }
  ]
});
formatter.background({
  "line": 4,
  "name": "",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User opens the browser",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginUser.user_opens_the_browser()"
});
formatter.result({
  "duration": 11695464500,
  "status": "passed"
});
formatter.scenario({
  "line": 8,
  "name": "New user registration",
  "description": "",
  "id": "title-of-your-feature;new-user-registration",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 7,
      "name": "@tag1"
    }
  ]
});
formatter.step({
  "line": 9,
  "name": "navigates to the RegisterPage",
  "keyword": "Given "
});
formatter.step({
  "line": 10,
  "name": "User enters valid data from excel",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "User is successfully logged into the system",
  "keyword": "Then "
});
formatter.step({
  "line": 12,
  "name": "User successfully logout from the application",
  "keyword": "And "
});
formatter.match({
  "location": "NewUserRegister.navigates_to_the_RegisterPage()"
});
formatter.result({
  "duration": 5543039000,
  "status": "passed"
});
formatter.match({
  "location": "NewUserRegister.user_enters_valid_data_from_excel()"
});
formatter.result({
  "duration": 12602285400,
  "status": "passed"
});
formatter.match({
  "location": "NewUserRegister.user_is_successfully_logged_into_the_system()"
});
formatter.result({
  "duration": 2098361100,
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//a[contains(text(),\u0027sign-in\u0027)]\"}\n  (Session info: chrome\u003d83.0.4103.61)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MAVBCP75\u0027, ip: \u0027192.168.43.19\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.61, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\VIMALR~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:52957}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 001c10214d6c2957bc97c9301a7d40c5\n*** Element info: {Using\u003dxpath, value\u003d//a[contains(text(),\u0027sign-in\u0027)]}\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\r\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy15.getText(Unknown Source)\r\n\tat com.vayu.action.ActionClass.GetText(ActionClass.java:52)\r\n\tat com.vayu.stepdefination.NewUserRegister.user_is_successfully_logged_into_the_system(NewUserRegister.java:57)\r\n\tat ✽.Then User is successfully logged into the system(feature/FeatureFile3.feature:11)\r\n",
  "status": "failed"
});
formatter.match({
  "location": "NewUserRegister.user_successfully_logout_from_the_application()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 1525772100,
  "status": "passed"
});
});