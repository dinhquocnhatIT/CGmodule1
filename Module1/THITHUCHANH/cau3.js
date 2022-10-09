function vowel_count(str1)
{
  let vowel_list = 'aeiouAEIOU';
  let vCount = 0;
  
  for(let i = 0; i < str1.length ; i++)
  {
    if (vowel_list.indexOf(str1[i]) !== -1)
    {
    //   vCount += 1;
        vCount++;
    }
  }

  return vCount;
}
console.log(vowel_count("0-"));