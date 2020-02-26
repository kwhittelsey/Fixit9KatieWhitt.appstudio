sbmt.onClick = function(){
  let noun1 = inptNoun1.value
  let noun2 = inptNoun2.value
  let noun3 = inptNoun3.value
  let verb = inptVerb.value
  let ajective = inptAdjective.value
  let verbIng = verb.concat("ing")
  let nounS = noun2.concat('s')
  lblSentence.value = `A ${noun1} in Nebraska was arrested this morning after ${verbIng} in front of a ${adjective} ${noun2}. The perpetrator had a history of ${verbIng}, but no one - not even her ${noun3} - ever imaginged she\'d ${verb1} with a ${noun2}. Even her ${noun3} was surprised. I always thought she was ${adjective}, but I hever thought she'd do something like this. Either way, we imagine that after witnessing her ${verbIng} with a ${adjective} ${noun2}, there are probably a whole lot of ${nounS} that are going to need therapy.`
}



btnReset.onclick=function(){
 lblSentence.value = 'Play again!'
}