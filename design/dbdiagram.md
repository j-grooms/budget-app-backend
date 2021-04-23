Users
-
id int PK
username unique varchar(32)
password hash
firstName varchar(16)
lastName varchar(16)
monthlyIncome int

Essentials
-
id pk int
userId FK >- Users.id
type varchar(16)
company varchar(32)
amount int

Subscriptions
-
id int pk
userId FK >- Users.id
type varchar(16)
company varchar(32)
amount int

Discretionary
-
id pk int
userId FK >- Users.id
type varcher(16)
company varchar(32)
amount int

Savings
-
id pk int
userId FK >- Users.id
amount int

