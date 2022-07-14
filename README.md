
3. Difference Between Window, Screen and Document :

   Window : The Window Object
             The window object is supported by all browsers. It represents the browser's window.
             All global JavaScript objects, functions, and variables automatically become members of the window object.
             Global variables are properties of the window object.
             Global functions are methods of the window object.
             Even the document object (of the HTML DOM) is a property of the window object:
             
             window.document.getElementById("header");
             is the same as:
             document.getElementById("header");

  Screen : The window.screen object contains information about the user's screen.
             The window.screen object can be written without the window prefix.
             Properties:
               1.screen.width
               2.screen.height
               3.screen.availWidth
               4.screen.availHeight
               5.screen.colorDepth
               6.screen.pixelDepth 
  
  Document : The document object represents your web page.
              If you want to access any element in an HTML page, you always start with accessing the document object.
              Below are some examples of how you can use the document object to access and manipulate HTML.
        
  Finding HTML Elements :
  Methods :
   1. document.getElementById(id)	is to Find an element by element id.
   2. document.getElementsByTagName(name)	is to Find elements by tag name.
   3. document.getElementsByClassName(name) is to	Find elements by class name.
