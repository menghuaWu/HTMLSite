
--------------------------------------------------------
--  DDL for Table SERVICE_COL
--------------------------------------------------------

  CREATE TABLE "SERVICE_COL" 
   (	"SERVICE_CODE" VARCHAR2(100 BYTE), 
	"NAME" VARCHAR2(100 BYTE), 
	"WIDTH" NUMBER, 
	"HIDDEN" NUMBER(1,0), 
	"SORTABLE" NUMBER(1,0), 
	"SORTTYPE" VARCHAR2(20 BYTE), 
	"EDITABLE" NUMBER(1,0), 
	"EDITTYPE" VARCHAR2(20 BYTE), 
	"EDITRULES" VARCHAR2(100 BYTE), 
	"FORMATTER" VARCHAR2(100 BYTE), 
	"ALIGN" VARCHAR2(10 BYTE), 
	"CELLATTR" VARCHAR2(30 BYTE), 
	"LABEL" VARCHAR2(100 BYTE), 
	"SEQ" NUMBER
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "DASHBOARD"   NO INMEMORY ;
--------------------------------------------------------
--  DDL for Index SYS_C0074048
--------------------------------------------------------

  CREATE UNIQUE INDEX "SYS_C0074048" ON "SERVICE_COL" ("SERVICE_CODE", "NAME") 
  PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "DASHBOARD" ;
--------------------------------------------------------
--  Constraints for Table SERVICE_COL
--------------------------------------------------------

  ALTER TABLE "SERVICE_COL" MODIFY ("SERVICE_CODE" NOT NULL ENABLE);
  ALTER TABLE "SERVICE_COL" MODIFY ("NAME" NOT NULL ENABLE);
  ALTER TABLE "SERVICE_COL" MODIFY ("HIDDEN" NOT NULL ENABLE);
  ALTER TABLE "SERVICE_COL" MODIFY ("SORTABLE" NOT NULL ENABLE);
  ALTER TABLE "SERVICE_COL" MODIFY ("EDITABLE" NOT NULL ENABLE);
  ALTER TABLE "SERVICE_COL" ADD PRIMARY KEY ("SERVICE_CODE", "NAME")
  USING INDEX PCTFREE 10 INITRANS 2 MAXTRANS 255 COMPUTE STATISTICS 
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "DASHBOARD"  ENABLE;



--------------------------------------------------------
--  DDL for Table SERVICE_COL_EDITOPTIONS
--------------------------------------------------------

  CREATE TABLE "SERVICE_COL_EDITOPTIONS" 
   (	"SERVICE_CODE" VARCHAR2(100 BYTE), 
	"NAME" VARCHAR2(100 BYTE), 
	"VALUE" VARCHAR2(100 BYTE), 
	"TEXT" VARCHAR2(100 BYTE), 
	"OPTIONTYPE" VARCHAR2(20 BYTE)
   ) SEGMENT CREATION IMMEDIATE 
  PCTFREE 10 PCTUSED 40 INITRANS 1 MAXTRANS 255 
 NOCOMPRESS LOGGING
  STORAGE(INITIAL 65536 NEXT 1048576 MINEXTENTS 1 MAXEXTENTS 2147483645
  PCTINCREASE 0 FREELISTS 1 FREELIST GROUPS 1
  BUFFER_POOL DEFAULT FLASH_CACHE DEFAULT CELL_FLASH_CACHE DEFAULT)
  TABLESPACE "DASHBOARD"   NO INMEMORY ;
--------------------------------------------------------
--  Constraints for Table SERVICE_COL_EDITOPTIONS
--------------------------------------------------------

  ALTER TABLE "SERVICE_COL_EDITOPTIONS" MODIFY ("SERVICE_CODE" NOT NULL ENABLE);
  ALTER TABLE "SERVICE_COL_EDITOPTIONS" MODIFY ("NAME" NOT NULL ENABLE);





--------------------------------------------------------
--  INSERT Data to DB
--------------------------------------------------------
--Service_GetColCfg
--Service_GetColEditVal
--Service_GetColEditValQuery
--Service_GetColEditOpt
--Service_ChkListEditStation
Insert into EFS.SERVICE_TYPE (SERVICE_CODE,SERVICE_SQL_ID,SERVICE_ORDER,SERVICE_PARAMS) values ('Service_GetColCfg','Service_GetColCfg','1','ini');
Insert into EFS.SERVICE_TYPE (SERVICE_CODE,SERVICE_SQL_ID,SERVICE_ORDER,SERVICE_PARAMS) values ('Service_GetColEditValQuery','Service_GetColEditValQuery','1','ini');
Insert into EFS.SERVICE_TYPE (SERVICE_CODE,SERVICE_SQL_ID,SERVICE_ORDER,SERVICE_PARAMS) values ('Service_GetColEditVal','Service_GetColEditVal','1','ini');
Insert into EFS.SERVICE_TYPE (SERVICE_CODE,SERVICE_SQL_ID,SERVICE_ORDER,SERVICE_PARAMS) values ('Service_GetColEditOpt','Service_GetColEditOpt','1','ini');
Insert into EFS.SERVICE_TYPE (SERVICE_CODE,SERVICE_SQL_ID,SERVICE_ORDER,SERVICE_PARAMS) values ('Service_ChkListEditStation','Service_ChkListEditStation','1','ini');
Insert into SERVICE_SQL (SQL_ID,SQL_SERVICE,SQL_CONTENT) values ('Service_GetColCfg','query','SELECT a.service_code,
       a.name,
       a.label,
       a.width,
       a.hidden,
       a.sortable,
       a.sorttype,
       a.editable,
       a.edittype,
       a.editrules,
       a.formatter,
       a.align,
       a.cellattr,
       (SELECT DISTINCT NAME
          FROM service_col_editoptions b
         WHERE a.service_code = b.service_code
           AND a.name = b.name) editoptions
  FROM service_col a
 WHERE service_code = :p
order by seq');
Insert into SERVICE_SQL (SQL_ID,SQL_SERVICE,SQL_CONTENT) values ('Service_GetColEditValQuery','query','select VALUE,nvl(TEXT,''{}'') TEXT from SERVICE_COL_EDITOPTIONS where SERVICE_CODE=:SERVICE_CODE and NAME =:NAME and OPTIONTYPE=''QUERYVALUE''');
Insert into SERVICE_SQL (SQL_ID,SQL_SERVICE,SQL_CONTENT) values ('Service_GetColEditVal','query','select value,text from SERVICE_COL_EDITOPTIONS where optiontype=''VALUE'' AND  service_code=:SERVICE_CODE and name=:NAME');
Insert into SERVICE_SQL (SQL_ID,SQL_SERVICE,SQL_CONTENT) values ('Service_GetColEditOpt','query','select OPTIONTYPE,VALUE from SERVICE_COL_EDITOPTIONS where SERVICE_CODE=:SERVICE_CODE and NAME =:NAME and OPTIONTYPE not in (''VALUE'',''QUERYVALUE'')');
Insert into SERVICE_SQL (SQL_ID,SQL_SERVICE,SQL_CONTENT) values ('Service_ChkListEditStation','query','SELECT DISTINCT ST.SERVICE_CODE,SC.STATION FROM SERVICE_TYPE ST LEFT OUTER JOIN SERVICE_CONDITION SC ON ST.SERVICE_CODE=SC.SERVICE_TYPE where upper(ST.service_code) like  upper(REGEXP_REPLACE(:p, ''List$'', ''''))||''%''');
