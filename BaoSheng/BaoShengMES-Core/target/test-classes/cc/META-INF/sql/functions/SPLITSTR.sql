CREATE OR REPLACE FUNCTION SPLITSTR(P_STRING IN VARCHAR2, P_DELIMITER IN VARCHAR2)
    RETURN STR_SPLIT
    PIPELINED
AS
    V_LENGTH   NUMBER := LENGTH(P_STRING);
    V_START    NUMBER := 1;
    V_INDEX    NUMBER;
BEGIN
    WHILE(V_START <= V_LENGTH)
    LOOP
        V_INDEX := INSTR(P_STRING, P_DELIMITER, V_START);

        IF V_INDEX = 0
        THEN
            PIPE ROW(SUBSTR(P_STRING, V_START));
            V_START := V_LENGTH + 1;
        ELSE
            PIPE ROW(SUBSTR(P_STRING, V_START, V_INDEX - V_START));
            V_START := V_INDEX + 1;
        END IF;
    END LOOP;

    RETURN;
END SPLITSTR;
