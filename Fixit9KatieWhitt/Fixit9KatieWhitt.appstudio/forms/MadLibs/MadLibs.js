
sbmt.onclick=function(){
  let n1=iptNoun1.value
  let n2=iptNoun2.value
  let n3=iptNoun3.value
  let n4=iptNoun4.value
  let n5=iptNoun5.value
  let v1=iptVerb1.value
  let v2=iptVerb2.value
  let v3=iptVerb3.value
  let v4=iptVerb4.value
  let v5=iptVerb5.value
  let a1=iptAdj1.value
  let a2=iptAdj2.value
  let a3=iptAdj3.value
  let a4=iptAdj4.value
  let a5=iptAdj5.value
  
  let libMessage=`A ${n1} in Nebraska was arrested this morning after ${v1} in front of a ${a1} ${n2}. The perpetrator had a history of ${v2}, but no one - not even her ${n3} - ever imagined she'd ${v3} with a ${n4}.
Even her ${n4} was surprised. "I always thought she was ${a2}, but I never thought she'd do something like this."
Either way, we imagine that after witnessing her ${v3} with a ${a3} ${n4}, there are probably a whole lot of ${n5}s that are going to need therapy.`

lblMad.textContent=libMessage

n1 = " " 
n2 = " " 
n3 = " "
n4 = " " 
n5 = " " 
v1 = " " 
v2 = " "
v3 = " "
v4 = " "
v5 = " " 
a1 = " " 
a2 = " " 
a3 = " " 
a4 = " " 
a5 = " " 


}
