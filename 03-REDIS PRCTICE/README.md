# PUB /SUB & STREAMS IN REDIS

##  SUBSCRIBE :-       `One which Receive the Message `
> How to Subscribe a Channel
  
   ```
   SUBSRCIBE [channnel-name]
     ex:- SUBSCRIBE devnest
   
  ```

## PUBLISH:-   `  One which Sent the Message `
> How to publish 
 ```
 PUBLISH [channel-name] [message]
   ex:-PUBLISH devnest hello 
```

### UNSUBSCRIBE 
 ``` 
 UNSUBCRIBE [channel-name]
  ex:-UNSCRIBE devnest
```
### PSUBSCRIBE d*  :-    `It will Subscribe all the channel whose name start with d `
```
 Ex:- PSUBSCRIBE d*
```

- <i> A Publisher can have n number of subscriber </i>

### !! Above commands can be used between two channels and no history is saved !!


<hr>

# STREAM
### !! TO Save History of Messages ,We use Stream !! 
## Creation and Adding values in Stream

```
XADD [stream-name] [id] [key-name] [key-value]
     Ex:- XADD mystream 10000 name anna
          XADD mrstream 10001 name ayas
          XADD mystream 10002 name cathy

XADD [stream-name] [ * ] [key-name ] [key-value]
  * :-It will automatically assign key according to timestamp

    Ex:-XADD mystream * name devnest 

``` 
> Providing condition In term of MAXLEN

```
XADD [stream-name] [max length] [max length count] [id] [key-name] [key-value]
    Ex:- XADD mystream MAXLEN 10000 * name Rik
```
### Reading Values in Stream

```
XREAD COUNT [finalcount-number] STREAMS [stream-name] [initialcount-number or id from which it start taking]
  Ex:- XREAD COUNT 200 STREAMS mystream 0   //iska mtlb hai mystream me 0 index se 200 tk ko aa jao
       XREAD COUNT 200 STREAMS mystream 10002-0  //10002-0 ke baad jitni bhi row hai show krdo
```
> BLOCK FUNCTION
 ```
 XREAD BLOCK 10000 STREAMS mystream $   
      //It will holds the connection for 10sec then automatically disconnect it.
```

#### Displaying Streams Within a Range With limits also

``` 
XRANGE [tream-name] [start-id] [end-id]
   Ex:-XRANGE mystream 10000-0 10002-0

XRANGE [tream-name] [start-id] [end-id] COUNT [count-no]
   Ex:-XRANGE mystream 10000-0 10002-0 COUNT 5
```
- <i>Below is useful when you don't know the id </i>
> Displaying all values using XRANGE
```
XRANGE mystream - +
```


> Displaying values with limit using XRANGE

```
 XRANGE mystream - + COUNT 5
```

> Display streams in reverse order

```
 XREVRANGE mystream + -
```

> Display stream in reverse order with a limit

```
 XREVRANGE mystream + - COUNT 4
```
 