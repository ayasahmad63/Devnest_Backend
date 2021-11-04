# `Redis Basics`


## Installation 

    1.For Windows
        
        - Enable WSL from "Turn Windows features on or off settings"
        - Restart the machine
	    - Install Ubuntu20.04 from Windows Store
	    - Open Ubuntu and setup name and password
	    - Run the following commands:
		      > sudo apt-get update
		      > sudo apt-get upgrade
		      > sudo apt-get install redis-server
		      > sudo service redis-server restart
		      > redis-cli

     2) For Linux

	     - Run the commands:
		      > sudo apt-get install redis-server
		      > sudo service redis-server restart
		      > redis-cli
      
***

# ***REDIS COMMAND***
***
## General 
  
  - **SET key value**           </br >  `sets value in json form` 
  
   - **GET  key**               </br  > ` Display value of particular key`

   - **ttl key**      </br> ` Shows remaining time of key before exiration    (ttl :- time to live) ` 

   - **KEYS***   </br> `Displays all the Keys`

   - **DEL key** </br> `Delete the Particular Key`

   - **FLUSHALL** </br> `Delete All Keys`

   - **EXISTS key** </br> ` Display 1 if it exists otherwise 0`

   - **EXPIRE key time** </br > `Delete paricular Existing key after t seconds `

- **SETEX key time value** </br> `Creates the key with vlaue and expiration time t `

- **PING "String"** </br > `To Display Message`



***




## FOR ARRAYS

  - **LPUSH Array Value** </br> `Adds Element(value) in the array from Left(start)`

- **RPUSH Array Value** </br> `Adds Element(value) in the array from the right(end) `

- **LPOP key** </br> ` Deletes Element from left`

- **RPOP key** </br> `Deletes Element from right`

- **LRANGE Array start[0] stop[-1]** </br> `Displays Every Element in the key`


**NOTE:-** ` GET key cannot be used in case of array because it operates on strings.So we use LRANGE `

***

## FOR SETS


- **SADD Key Value** </br> `Adds elements in the set, can't push dupliacte values`

- **SMEMBERS  Key**</br>`Displays All values`


***


## FOR OBJECT/HASH

- **HSET key field value** </br> `Creates object key having field f with value v`

- ** HGET key field** </br> `Display Value of the field inside key`

- **HDEL key field** </br> `Delete the field`

- **HGETALL key** </br> `Display each field value pairs of the object key`

-  **HEXISTS key** </br> `To check the field exists or not`

***


