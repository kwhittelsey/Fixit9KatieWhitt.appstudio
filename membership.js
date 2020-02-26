btnName.onClick = function(){
  membershipName = inptFirstName.value
  if ((membershipName == members)
    NSB.MsgBox("Member is already registered")
  else
    members.push(inptFirstName.value)
    NSB.MsgBox("Member successfully registered")
}
    


var members = ["Mary","Sam","Joey","Paul","Mike","Char","Jenny","Kennedy","Kaden","Kurt","Anne"]