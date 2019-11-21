function myFunction() {
  var doc_key = "1qe0ZzvjoqrV25GFsUCox0JhUP2sL3st588rY3gmILD8"
  var email = "we684123@gmail.com"
  var date = "2019/4/16"

  var url = 'https://docs.google.com/spreadsheets/d/1hcGKkd9OHrNpndvbuBVrY8YNgs4PVxLYYyGtKsyQGbA/pubhtml/sheet?headers=false&gid=2'
  var sheet = UrlFetchApp.fetch(url);
  var doc = DocumentApp.openById(doc_key)
  var f = doc.getText()
  if (f != String(sheet) && (String(sheet).search(date) != -1)) {
    GmailApp.sendEmail(email, 'get me E-COUPON!!!', 'GOGOGO!\n')
    doc.setText(String(sheet))
    console.log(String(sheet).search(date))
    console.log(String(sheet))
  } else {
    Logger.log('no ch') //喔幹 原來是沒改變，還在想說以前寫三小
  }
}
