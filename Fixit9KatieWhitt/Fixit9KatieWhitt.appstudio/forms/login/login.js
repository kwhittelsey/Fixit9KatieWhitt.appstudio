var accountName = ""


btnSubmit.onclick=function(){
  accountName = inptAccount.value
  let pass = inptPassword.value
  if ((accountName == "Smith") && (pass == "123Dogs#")):
    ChangeForm(welcome)
    
  else: 
    NSB.MsgBox("The login is not recognized. Please try again.")
    inptAccount.value = ""
    inptPassword.value = ""
    ChangeForm(welcome)
}
