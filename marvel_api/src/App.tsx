import React, { useEffect, useTransition } from 'react';
import axios from 'axios'
import md5 from 'md5'

const baseUrl = "http://gateway.marvel.com/v1/public/characters?"
const publicKey = "f429b810cb44d4e5627972e51641384d"
const privateKey = "ab32f0ce7a0950afbf0757bc6ce2362709e5de2d"

const time = Number(new Date())

const hash = md5(time + privateKey + publicKey)

const App: React.FC = ()=> {

  useEffect(() => {
    axios
    .get(baseUrl+`ts=${time}`+'&apikey='+`${publicKey}`+'&hash='+`${hash}`)
    .then(response => console.log(response))
    .catch(erro => console.log(erro))

  },[])
 
  return (
    <div className="App">
      API Marvel
    </div>
  );
}

export default App;
