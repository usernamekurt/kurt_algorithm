function isAnagram (s, t) {
  const arrS = Array.from(s);
  const arrT = Array.from(t);
  let outcome = true;
  function CountElem(arr){
    const counter = {};
    for(let i = 0; i < arr.length; i++) {
      if(!counter[arr[i]]){
        counter[arr[i]] = 1;
      }
      counter[arr[i]] += 1;
    }
    return counter;
  }
  
  if(arrS.length !== arrT.length){
    return false;
  }

  const counterS = CountElem(arrS);
  const counterT = CountElem(arrT);
  console.log(counterS)
  console.log(counterT)
  console.log(counterS["t"] !== undefined)
  console.log(counterT["t"])


  const keys = Object.keys(counterS);


  keys.forEach((elem) => {
    if(counterS[elem] !== counterT[elem]){
      outcome = false;
      return outcome;
    }
    
  })
  return outcome;  
}