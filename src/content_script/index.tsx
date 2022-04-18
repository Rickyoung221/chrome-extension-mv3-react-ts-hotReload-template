/**
 * Reference:https://blog.logrocket.com/creating-chrome-extension-react-typescript/
 */
import * as React from 'react';
import { DOMMessage, DOMMessageResponse } from './types';
console.log('[TRACE] Content Script is Running');

 //Listern Funciton for React app.
 const messagesFromReactAppListener = (
     msg: DOMMessage, 
     sender: chrome.runtime.MessageSender, 
     sendResponse: (response: DOMMessageResponse) => void
   ) => {
 
     console.log('[content.js]. Message received', msg);
     const response: DOMMessageResponse = {
       title: document.title,
       headlines: Array.from(document.getElementsByTagName<"h1">("h1")).map(h1 => h1.innerText)
     };
 
     console.log('[content.js]. Message response', response);
 
     sendResponse(response)
   }
 
 /**
  * Fired when a message is sent from either an extension process or a content script.
  */
 chrome.runtime.onMessage.addListener(messagesFromReactAppListener);