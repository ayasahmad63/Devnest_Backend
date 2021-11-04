# CRUD WITH fs  MODULE

- Nodejs is a scripting language 
- In nodejs we can apply any javascript program
- JS that we used in front-end can only access our browsers.

> FS:- File System Module

## CRUD Commands
 
 #### Get inside Node 
 ```js
       node;
 
```
 #### Importing fs Module
 ```js
  var fs=require("fs");
 ```
 ### CREATE 

 #### Creation of Folder
  
   ```js
   fs.mkdir("[folder-name]");
      Ex:- fs.mkdir("day_1");
   ```
 #### Creation of file 
 
```js
fs.writeFileSync("day_1/hello.txt","Hello awsome people",(err)=>{
... if(err){
..... console.log(err);
..... }
... });
 ```
>creates file named hello.txt inside day_1 with content Hello awesome people
     arrow function for error check
 
 ### RENAME FILE

```js
fs.renameSync("day_1/hello.txt","day_1/hello1.txt");
```
>renames the file
specifying the full path is important

### READ 

```js
fs.readFileSync("day_1/hello.txt)
```
>  Now you will get the buffer (buffer is for better performance like it break into some code and you will read it line by
 line.)
 ```js
 fs.readFileSync("day_1/hello.txt","utf-8");
 ```
 > To read the buffer line we must use "utf-8" it convert it into english

 ### UPDATE

```js
fs.appendFileSync("[file specifying the full path]","[appended part]");
  Ex:-fs.appendFileSync("day_1/hello.txt", "Welcome");
```

### DELETE
 - !! 
   We can't delete whole folder directly,firstly we have to delete the file then folder!!
   ##### DELETE FILE
```js
fs.unlinkSync("day_1/hello1.txt");
```
   ##### Delete Folder
   ```js
   fs.rmdirSync('day_1');
   ```


   ## Above command are called repl method(repl:-read execute print loop)

