DB schema for refreshing project

Table: Goals
	Column		Type		PK	NULL	Comment
	ID		int		Y	N	PK - Unique ID
	Name		varchar(50)		N	Name (handle) of goal
	TransactionDate	DateTime		N	Goal data is stored cumulatively so that history can be kept
	GoalCode	varchar(10)		N	Used to match goal transactions to goals
							(Naming convention: Account Code (3 chars); Unique Goal (7 chars)
	GoalDate	DateTime		Y	Date desired to reach goal
	GoalAmount	int			N	Amount trying to save for
	GoalSaved	int			N	Amount saved toward goal
	GoalComplete	bit			N	1-Goal is complete; 0(default)-Goal is incomplete
	MonthlyAmount	int			N	Fixed amount per month set aside to reach goal
	Account		int			Y	FK into Account table; Not for initial release

Table: Accounts 
	Column		Type		PK	NULL	Comment
	ID		int		Y	N	PK - Unique ID
	Name		varchar(50)		N	Name (handle) of account
	AccountCode	varchar(3)		N	3 character unique code

# Note GoalSource is a seperate process from managing goal data that collects goal transactions and reports
# goal status

Table: GoalSource
	Column		Type		PK	NULL	Comment
	ID		int		Y	N	PK - Unique ID
	URL		varchar(200)		N	URL to scrape goal transactions

