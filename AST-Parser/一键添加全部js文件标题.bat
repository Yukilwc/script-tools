ECHO start sync language dictionary
CALL npm run syncDic
ECHO end sync language dictionary

CALL npm run insertTitleIntoJs
PAUSE