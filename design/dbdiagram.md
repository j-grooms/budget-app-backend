Users
-
id int PK
username unique varchar(32)
email unique varchar(256)
password binary
firstName varchar(16)
lastName varchar(16)
monthlyIncome int

Mandatories
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

Discretionaries
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
