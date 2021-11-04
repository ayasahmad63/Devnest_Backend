# POSTGRESQL 
 
 ## INSTALLATION AND SERVER START
   ### INSTALLATION
>sudo apt update<br/>
>sudo apt install postgresql postgresql-contrib<br/>
>psql --version
### Server Start
>sudo service postgresql status<br/>
>sudo service postgresql restart  //important <br/>
>sudo service postgresql start <br/>
>sudo service postgresql stop
###  PostgreSQL with psql shell
>sudo -u postgres psql


# Postgresql Commands

## General Commands
 
 - ***\q***   <br/> ` To exit the postgresq shell`
  
  - ***\l*** <br/> `To Display the list of Databases `

  - ***\du*** <br/> ` To display the list of Users `

  - ***\c [DataBase name]*** <br/>  `Connect the Current User to DataBase that name you are given`
  


 ## User And DataBase Commands
  
  - ***Create New User*** <br/>
  ```sql
    CREATE USER WITH  [database-name] PASSWORD ' [password] ';
  ```

- ***Create New DataBase***<br/>
```sql 
CREATE DATA [database-name];
```
- ***Grant Access of DataBase to User***<br/>
```sql
GRANT ALL PRIVILEGES ON DATABASE [database-name] TO [user-name] ; 
 ```
 `GRANT SPECIFIC  ACCESS TO USER `
 ```sql
  GRANT [operation-name] PRIVILEGES ON DATABASE [database-name] TO [user-name] ;
        
    Some of the Operations are:-
    1)UPDATE
    2)SELECT
    3)INSERT
    4)DELETE
```  

-  ***Deletion of DataBase***
```sql
DROP DATABASE [database-name];
```
 

## Table Commands

 - ***\d***<br/> `Display the lists of Tables(relations) `
 - ***\d   [table-name]*** <br/> `Display Fields info of Specific Table `

- ***Creation of Table*** 
```sql
CREATE TABLE [table-name](
        [table- column-name] [datatype(only one type of value will be embedded)] NOT NULLL,
        [next-column-name]   [datatyope   ""   ""  "".....                   ...],
        .
        .
        .             
        .
        );
     
           EXAMPLE:-CREATE TABLE COMPANY(
                ID  INT NOT NULL,
                NAME TEXT NOT NULL,
                AGE INT,                      /*  Fill Entries According to yourself. */
                ADDRESS CHAR(50),
                SALARY REAL,
                JOIN_DATE DATE);                                     
```

- ***Deletion of Table***
```sql
DROP TABLE IF EXISTS [table-name];
```


## Visualization 

- Database (Drive)
  - Tables (Files)
  - Schemas (Folders)
    - Tables (Files)


## Schema Commands

 - ***Creation of Schema*** <br/> 
 ```sql
  CREATE SCHEMA [schema-name];
  ```

  - ***Create table inside Schema***
  ```sql
    CREATE TABLE [schema-name].[table-name](
      ID   INT              NOT NULL,
      NAME VARCHAR (20)     NOT NULL,                   /*  Fill Entries According to yourself. */
      AGE  INT              NOT NULL,
      ADDRESS  CHAR (25),
      SALARY   DECIMAL (18, 2),
      PRIMARY KEY (ID)
    );
  ```

  - ***Deletion of Schema with Table***
  ```sql 
  DROP SCHEMA [schema-name] CASCADE;
  ```

#### Inertion of Value in Table

```sql
  INSERT INTO {TABLE NAME}[(IN SEQUENCE KEYS)] VALUES [(VALUES FOR PARTICULAR KEY)]
       EX:-INSERT INTO COMPANY(ID,NAME,AGE,ADDRESS,SALARY) VALUES (1, 'PAUL', 32, 'Texas', 1000.00);

```

## Example of Queries
```sql
SELECT (15 + 6) AS ADDITION ;                         /* Prints sum of 15 and 6 in column addition */
SELECT COUNT(*) AS "RECORDS" FROM COMPANY;
SELECT CURRENT_TIMESTAMP;                             /* Prints current time */
select * from COMPANY;
SELECT * FROM COMPANY WHERE AGE >= 25 AND SALARY >= 65000;
SELECT * FROM COMPANY WHERE NAME LIKE 'Pa%';
SELECT * FROM COMPANY WHERE SALARY::text LIKE '200%';         /* Prints all rows in which slary starts with
                                                                 200 and convert salary column type to text */

SELECT * FROM COMPANY WHERE AGE IN ( 25, 27 );
SELECT * FROM COMPANY WHERE AGE NOT IN ( 25, 27 );
SELECT * FROM COMPANY WHERE AGE BETWEEN 25 AND 27;
```

### Update Query
```sql
UPDATE COMPANY SET SALARY = 15000 WHERE ID = 3;
UPDATE COMPANY SET ADDRESS = 'Texas', SALARY=20000;
```
### Delete Particular Row from Table
```sql
DELETE FROM COMPANY WHERE ID = 2;
```

## Primary keys & Foreign keys :

```sql
CREATE TABLE customers(
   customer_id INT GENERATED ALWAYS AS IDENTITY,
   customer_name VARCHAR(255) NOT NULL,
   PRIMARY KEY(customer_id)
);

CREATE TABLE contacts(
   contact_id INT GENERATED ALWAYS AS IDENTITY,
   customer_id INT,
   contact_name VARCHAR(255) NOT NULL,
   phone VARCHAR(15),
   email VARCHAR(100),
   PRIMARY KEY(contact_id),
   CONSTRAINT fk_customer
      FOREIGN KEY(customer_id)
	  REFERENCES customers(customer_id)
	  ON DELETE CASCADE                /*ON DELETE CASCADE also deletes the reference
                                        data present in the other table*/
);
```