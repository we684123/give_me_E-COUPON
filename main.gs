  function check_update() {
    var doc_id = "10CmKiybPF6ooYaO3vjggxSGfTErqnR27e3GWuJXJyUU"
    var email = "we684123@gmail.com"
    
    var date = Utilities.formatDate(new Date(), "GMT+8", "yyyy/MM/dd")
    var url = 'https://docs.google.com/spreadsheets/d/1hcGKkd9OHrNpndvbuBVrY8YNgs4PVxLYYyGtKsyQGbA/pubhtml/sheet?headers=false&gid=2'
    var sheet = UrlFetchApp.fetch(url);
    var doc = DocumentApp.openById(doc_id)
    var f = doc.getText()

    if (f != String(sheet) && (String(sheet).search(date) != -1)) {
      GmailApp.sendEmail(email, 'get me E-COUPON!!!', 'GOGOGO!\n')
      doc.setText(String(sheet))
      console.log(String(sheet).search(date))
      console.log(String(sheet))
    } else {
      Logger.log('have not change') //喔幹 原來是沒改變，還在想說以前寫三小
    }
  }
