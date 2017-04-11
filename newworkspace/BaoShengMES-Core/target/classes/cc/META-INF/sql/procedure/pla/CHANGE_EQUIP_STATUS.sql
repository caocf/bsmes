--设备状态更改
CREATE OR REPLACE PROCEDURE "CHANGE_EQUIP_STATUS"(EQUIPLINECODE IN VARCHAR2,TARGETSTATUS IN VARCHAR2,OPERATOR IN VARCHAR2)
AS
  EQUIPLINEID  T_FAC_EQIP_INFO.ID%TYPE;
  MAINEQUIPID  T_FAC_EQIP_INFO.ID%TYPE;

BEGIN
    SELECT ID INTO EQUIPLINEID FROM T_FAC_EQIP_INFO WHERE CODE = EQUIPLINECODE;

    SELECT ID INTO MAINEQUIPID FROM T_FAC_EQIP_INFO A WHERE EXISTS (
            SELECT
                B."ID"
            FROM T_FAC_PRODUCT_EQIP B WHERE B.PRODUCT_LINE_ID = EQUIPLINEID
            AND A.ID = B.EQUIP_ID
            AND B.IS_MAIN = '1' --主设备
        )
        AND ROWNUM = 1;

    UPDATE T_FAC_EQIP_INFO SET STATUS = TARGETSTATUS WHERE ID = EQUIPLINEID;
    UPDATE T_FAC_STATUS_HISTORY SET END_TIME = SYSDATE WHERE EQUIP_ID = EQUIPLINEID AND END_TIME IS NULL;
    INSERT INTO T_FAC_STATUS_HISTORY (ID,EQUIP_ID,STATUS,START_TIME,CREATE_TIME,CREATE_USER_CODE,MODIFY_TIME,MODIFY_USER_CODE,REASON) VALUES (SYS_GUID(),EQUIPLINEID,TARGETSTATUS,SYSDATE,SYSDATE,OPERATOR,SYSDATE,OPERATOR,'');


    UPDATE T_FAC_EQIP_INFO SET STATUS = TARGETSTATUS WHERE ID = MAINEQUIPID;
    UPDATE T_FAC_STATUS_HISTORY SET END_TIME = SYSDATE WHERE EQUIP_ID = MAINEQUIPID AND END_TIME IS NULL;
    INSERT INTO T_FAC_STATUS_HISTORY (ID,EQUIP_ID,STATUS,START_TIME,CREATE_TIME,CREATE_USER_CODE,MODIFY_TIME,MODIFY_USER_CODE,REASON) VALUES (SYS_GUID(),MAINEQUIPID,TARGETSTATUS,SYSDATE,SYSDATE,OPERATOR,SYSDATE,OPERATOR,'');
END CHANGE_EQUIP_STATUS;