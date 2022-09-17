let messages = [
    {text: "Hello", from: "John"},
    {text: "How goes?", from: "John"},
    {text: "See you soon", from: "Alice"}
  ];
  
  
  let readMessages = new WeakSet();
  
  // how to  store two message have been read
  
  readMessages.add(messages[0]);
  readMessages.add(messages[1]);
  
  // read the first message again
  
  readMessages.add(messages[0]);
  
  //Asking message 0 was read or not 
  console.log('Read Message 0: '+ readMessages.has(messages[0])); //True
  
  messages.shift(); //message[1]

  console.log(messages);