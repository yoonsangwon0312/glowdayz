export const validationErrorCode = {
    //===== 일반적인 유효성 검사 데코레니터(Common validation decorators) =====//
    isDefined: {
        code: 'V0001',
        message: '정의되지 않은 값이 포함되어있습니다.',
        solutionMessage: '입력한 값이 undefined, null 인지 확인해 주시기 바랍니다.',
        originDescription:
            'Checks if value is defined (!== undefined, !== null). This is the only decorator that ignores skipMissingProperties option.',
    },
    isOptional: {
        code: 'V0002',
        message: '해당 코드를 관리자에게 알려주세요.',
        solutionMessage:
            '해당 코드는 에러가 발생하지 않습니다. 만약 에러가 발생한다면, 이 유효성 검사를 사용하고있는 DTO를 수정해 주시기 바랍니다.',
        originDescription:
            'Checks if given value is empty (=== null, === undefined) and if so, ignores all the validators on the property.',
    },
    equals: {
        code: 'V0003',
        message: '입력한 값이 설정된 값과 일치하지 않습니다.',
        solutionMessage: '해당 유효성 검사를 사용하고 있는 DTO의 조건(===)에 맞게 입력해 주시길 바랍니다.',
        originDescription: 'Checks if value equals ("===") comparison.',
    },
    notEquals: {
        code: 'V0004',
        message: '입력한 값과 설정된 값과 일치하지 않아야 합니다.',
        solutionMessage: '해당 유효성 검사를 사용하고 있는 DTO의 조건(!==)에 맞게 입력해 주시길 바랍니다.',
        originDescription: 'Checks if value not equal ("!==") comparison',
    },
    isEmpty: {
        code: 'V0005',
        message: '입력 값이 존재합니다. 이 값은 비어있어야 합니다.',
        solutionMessage: "입력 값이 ==={'', null, undefined} 중 하나여야 합니다.",
        originDescription: "Checks if given value is empty (=== '', === null, === undefined).",
    },
    isNotEmpty: {
        code: 'V0006',
        message: '입력 값이 존재하지 않습니다. 이 값은 비어있으면 안됩니다.',
        solutionMessage: "입력 값이 !=={'', null, undefined} 가 아니어야 합니다.",
        originDescription: "Checks if given value is not empty (!== '', !== null, !== undefined).",
    },
    isIn: {
        code: 'V0007',
        message: '입력한 값이 설정된 값에 포함되어 있지 않습니다.',
        solutionMessage: '해당 유효성 검사를 사용하고 있는 DTO의 조건(array)에 맞는 값을 입력해 주시길 바랍니다.',
        originDescription: 'Checks if value is in a array of allowed values.',
    },
    isNotIn: {
        code: 'V0008',
        message: '입력한 값이 설정된 값에 포함되어 있지 않아야 합니다.',
        solutionMessage: '해당 유효성 검사를 사용하고 있는 DTO의 조건(array)에 맞지 않는 값을 입력해 주시길 바랍니다.',
        originDescription: 'Checks if value is not in a array of disallowed values.',
    },
    //===== 유형 검증 데코레이터(Type validation decorators) =====//
    isBoolean: {
        code: 'V1001',
        message: 'true 또는 false를 입력하세요',
        solutionMessage: 'Boolean(false/true) 타입이어야 합니다.',
        originDescription: 'Checks if a value is a boolean.',
    },
    isDate: {
        code: 'V1002',
        message: '정확한 날짜를 입력하세요',
        solutionMessage: '{Date, DateTime, Time} 타입 중 하나여야 합니다.',
        originDescription: 'Checks if the value is a date.',
    },
    isString: {
        code: 'V1003',
        message: '문자를 입력하세요',
        solutionMessage: 'string(문자열(string)) 타입이어야 합니다.',
        originDescription: 'Checks if the string is a string.',
    },
    isNumber: {
        code: 'V1004',
        message: '숫자를 입력하세요',
        solutionMessage: 'number(소수[Float, Decimal] + 정수[Int]) 타입이어야 합니다.',
        originDescription: 'Checks if the value is a number.',
    },
    isInt: {
        code: 'V1005',
        message: '정수를 입력하세요',
        solutionMessage: 'number(정수[Int]) 타입이어야 합니다.',
        originDescription: 'Checks if the value is an integer number.',
    },
    isArray: {
        code: 'V1005',
        message: '두가지 이상 입력하세요',
        solutionMessage: 'array(map, set, array) 타입이어야 합니다.',
        originDescription: 'Checks if the value is an array',
    },
    //===== 숫자 검증 데코레이터(Number validation decorators) =====//
    isDivisibleBy: {
        code: 'V2001',
        message: '설정된 값으로 나눌 수 없습니다.',
        solutionMessage:
            '입력값이 숫자이며, 해당 유효성 검사를 사용하고 있는 DTO의 조건(number)으로 나눌 수 있는 값인지 확인하시길 바랍니다.',
        originDescription: "Checks if the value is a number that's divisible by another.",
    },
    isPositive: {
        code: 'V2002',
        message: '입력된 값이 0보다 커야 합니다.',
        solutionMessage: '입력값이 숫자이며, 0보다 커야 합니다. (input > 0)',
        originDescription: 'Checks if the value is a positive number greater than zero.',
    },
    isNegative: {
        code: 'V2003',
        message: '입력된 값이 0보다 작아야 합니다.',
        solutionMessage: '입력값이 숫자이며, 0보다 작아야 합니다. (input < 0)',
        originDescription: 'Checks if the given number is less than or equal to given number.',
    },
    min: {
        code: 'V2004',
        message: '입력된 값이 설정된 값보다 작습니다.',
        solutionMessage: '입력값이 숫자이며, 해당 유효성 검사를 사용하는 DTO의 조건(number) 보다 커야 합니다.',
        originDescription: 'Checks if the given number is greater than or equal to given number.',
    },
    max: {
        code: 'V2005',
        message: '입력된 값이 설정된 값보다 큽니다.',
        solutionMessage: '입력값이 숫자이며, 해당 유효성 검사를 사용하는 DTO의 조건(number) 보다 작아야 합니다.',
        originDescription: 'Checks if the given number is less than or equal to given number.',
    },
    //===== 날짜 유효성 검사 데코레이터(Date validation decorators) =====//
    minDate: {
        code: 'V3001',
        message: '입력된 값이 설정된 값보다 작습니다.',
        solutionMessage: '입력값이 날짜(Date)타입이며, 해당 유효성 검사를 사용하는 DTO의 조건(Date) 보다 커야 합니다.',
        originDescription: "Checks if the value is a date that's after the specified date.",
    },
    maxDate: {
        code: 'V3002',
        message: '입력된 값이 설정된 값보다 큽니다.',
        solutionMessage:
            '입력값이 날짜(Date)타입이며, 해당 유효성 검사를 사용하는 DTO의 조건(Date) 보다 작아야 합니다.',
        originDescription: "Checks if the value is a date that's before the specified date.",
    },
    //===== 문자열 유형 유효성 검사 데코레이터(String-type validation decorators) =====//
    isBooleanString: {
        code: 'V4001',
        message: 'true 또는 false를 입력하세요',
        solutionMessage: '입력값이 문자열(string)타입이며, Boolean(true/false)이어야 합니다.',
        originDescription: 'Checks if a string is a boolean (e.g. is "true" or "false").',
    },
    isDateString: {
        code: 'V4002',
        message: '날짜를 입력하세요.',
        solutionMessage: '입력값이 문자열(string)타입이며, ISO8601 날짜 형식이어야 합니다.',
        originDescription: 'Alias for @isISO8601().',
    },
    isNumberString: {
        code: 'V4003',
        message: '숫자를 입력하세요',
        solutionMessage: '입력값이 문자열(string)타입이며, 숫자(number)이어야 합니다.',
        originDescription: 'Checks if a string is a number.',
    },
    //===== 문자열 유효정 검사 데코레이터(String validation decorators) =====//
    contains: {
        code: 'V5001',
        message: '입력한 값이 설정된 문자열 값과 일치하는 부분이 없습니다.',
        solutionMessage:
            '입력값이 문자열(string)타입이며, 해당 유효성 검사를 사용하는 DTO의 조건(string)의 문자열이 입력값에 포함되어 있어야 합니다.',
        originDescription: 'Checks if the string contains the seed.',
    },
    notContains: {
        code: 'V5002',
        message: '입력한 값이 설정된 문자열 값과 일치하는 부분이 있습니다.',
        solutionMessage:
            '입력값이 문자열(string)타입이며, 해당 유효성 검사를 사용하는 DTO의 조건(string)의 문자열이 입력값에 포함되어 있으면 안됩니다.',
        originDescription: 'Checks if the string not contains the seed.',
    },
    isAlpha: {
        code: 'V5003',
        message: '알파벳만 입력하십시요',
        solutionMessage: '입력값이 문자열(string)타입이며, 알파벳(a-zA-Z)만 입력할 수 있습니다.',
        originDescription: 'Checks if the string contains only letters (a-zA-Z).',
    },
    isAlphanumeric: {
        code: 'V5004',
        message: '알파벳과 숫자만 입력하십시요',
        solutionMessage: '입력값이 문자열(string)타입이며, 알파벳(a-zA-z)과 숫자(number)만 입력할 수 있습니다.',
        originDescription: 'Checks if the string contains only letters and numbers.',
    },
    isDecimal: {
        code: 'V5005',
        message: '십진수로 입력하십시요',
        solutionMessage: '입력값이 문자열(string)타입이며, 십진수(%d)만 입력할 수 있습니다.',
        originDescription:
            "Checks if the string is a valid decimal value. Default isDecimalOptions are force_decimal=False, decimal_digits: '1,', locale: 'en-US'",
    },
    isAscii: {
        code: 'V5006',
        message: '아스키 문자에 포합되지 않은 문자가 입력되었습니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, ASCII 문자에 포함된 문자만 입력할 수 있습니다.',
        originDescription: 'Checks if the string contains ASCII chars only.',
    },
    isBase32: {
        code: 'V5007',
        message: 'base32로 인코딩 되지 않았습니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, base32로 인코딩된 문자열만 입력할 수 있습니다.',
        originDescription: 'Checks if a string is base32 encoded.',
    },
    isBase64: {
        code: 'V5008',
        message: 'base364로 인코딩 되지 않았습니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, base364로 인코딩된 문자열만 입력할 수 있습니다.',
        originDescription: 'Checks if a string is base64 encoded.',
    },
    isIBAN: {
        code: 'V5009',
        message: '국제 은행 계좌 번호(IBAN)가 아닙니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, IBAN(국제 은행 계좌 번호)만 입력할 수 있습니다.',
        originDescription: 'Checks if a string is a IBAN (International Bank Account Number).',
    },
    isBIC: {
        code: 'V5010',
        message: '은행 식별 코드(BIC) 또는 SWIFT 코드가 아닙니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, BIC(은행 식별 코드) 또는 SWIFT 코드만 입력할 수 있습니다.',
        originDescription: 'Checks if a string is a BIC (Bank Identification Code) or SWIFT code.',
    },
    isByteLength: {
        code: 'V5011',
        message: 'Byte 크기가 설정치를 제한을 벗어났습니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, Byte크기가 설정값의 min, max 옵션 제한을 맞춰야 합니다.',
        originDescription: "Checks if the string's length (in bytes) falls in a range.",
    },
    isCreditCard: {
        code: 'V5012',
        message: '신용카드 번호가 아닙니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, 신용카드 형태의 문자열만 입력 가능합니다.',
        originDescription: 'Checks if the string is a credit card.',
    },
    isCurrency: {
        code: 'V5013',
        message: '존재하지 않는 통화입니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, 통화 형태의 문자열만 입력 가능합니다.',
        originDescription: 'Checks if the string is a valid currency amount.',
    },
    isEthereumAddress: {
        code: 'V5014',
        message: '이더리움 주소가 아닙니다.',
        solutionMessage:
            '입력값이 문자열(string)타입이며, 조건(정규식)을 사용해 이더리움 주소인지 확인합니다. 체크섬을 확인하지 않습니다.',
        originDescription:
            'Checks if the string is an Ethereum address using basic regex. Does not validate address checksums.',
    },
    isBtcAddress: {
        code: 'V5015',
        message: "'BTC' 주소가 아닙니다.",
        solutionMessage: '입력값이 문자열(string)타입이며, BTC 주소만 입력 가능합니다.',
        originDescription: 'Checks if the string is a valid BTC address.',
    },
    isDataURI: {
        code: 'V5016',
        message: "'URI' 형식이 아닙니다.",
        solutionMessage: '입력값이 문자열(string)타입이며, URI 형식만 입력 가능합니다.',
        originDescription: 'Checks if the string is a data uri format.',
    },
    isEmail: {
        code: 'V5017',
        message: '이메일 형식이 아닙니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, 이메일 형식만 입력 가능합니다.',
        originDescription: 'Checks if the string is an email.',
    },
    isFQDN: {
        code: 'V5018',
        message: '정규화된 도메인 형식이 아닙니다.(예: domain.com)',
        solutionMessage: '입력값이 문자열(string)타입이며, 도메인 형식만 입력 가능합니다.',
        originDescription: 'Checks if the string is a fully qualified domain name (e.g. domain.com).',
    },
    isFullWidth: {
        code: 'V5019',
        message: '전각문자가 포함되어 있지 않습니다.(예: (O): 1 2 3 a b c ? !, (X): 123abc?!)',
        solutionMessage: '입력값이 문자열(string)타입이며, 전각문자가 포함된 값만 입력 가능합니다.',
        originDescription: 'Checks if the string contains any full-width chars.',
    },
    isHalfWidth: {
        code: 'V5020',
        message: '반각문자가 포함되어 있지 않습니다.(예: (O): 123abc?!, (X): 1 2 3 a b c ? !)',
        solutionMessage: '입력값이 문자열(string)타입이며, 반각문자가 포함된 값만 입력 가능합니다.',
        originDescription: 'Checks if the string contains any half-width chars.',
    },
    isVariableWidth: {
        code: 'V5021',
        message: '전각문자와 반각문자가 혼합되어야 합니다.(예: (O): 12 3a b c? !, (X): 1 2 3 a b c ? ! or 123abc?!)',
        solutionMessage: '입력값이 문자열(string)타입이며, 전각문자와 반각문자가 포함된 값만 입력 가능합니다.',
        originDescription: 'Checks if the string contains a mixture of full and half-width chars.',
    },
    isHexColor: {
        code: 'V5022',
        message: '16진수 색상이 아닙니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, 색상(#[0-F] * 6) 형태만 입력 가능합니다.',
        originDescription: 'Checks if the string is a hexadecimal color.',
    },
    isHSLColor: {
        code: 'V5023',
        message: "'HSL' 색상이 아닙니다.('CSS Colors Level 4'를 기준으로 합니다.)",
        solutionMessage: '입력값이 문자열(string)타입이며, 색상(HSL) 형태만 입력 가능합니다.(CSS Color Level 4 기준)',
        originDescription: "Checks if the string is an HSL color based on 'CSS Colors Level 4 specification.'",
    },
    isRgbColor: {
        code: 'V5024',
        message: "'RGB' 또는 'RGBA' 색상이 아닙니다.",
        solutionMessage: '입력값이 문자열(string)타입이며, 색상(RGB/RGBA) 형태만 입력 가능합니다.',
        originDescription: 'Checks if the string is a rgb or rgba color.',
    },
    isIdentityCard: {
        code: 'V5025',
        message: '신분증 코드가 아닙니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, 신분증 코드 형태만 입력 가능합니다.',
        originDescription: 'Checks if the string is a valid identity card code..',
    },
    isPassportNumber: {
        code: 'V5026',
        message: '설정된 국가 코드와 관련된 유효한 여권 번호가 아닙니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, 조건(국가코드(string))에 맞는 여권 번호만 입력 가능합니다.',
        originDescription: 'Checks if the string is a valid passport number relative to a specific country code.',
    },
    isPostalCode: {
        code: 'V5027',
        message: '우편번호가 아닙니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, 우편번호만 입력 가능합니다.',
        originDescription: 'Checks if the string is a postal code.',
    },
    isHexadecimal: {
        code: 'V5028',
        message: '16진수가 아닙니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, 16진수만 입력 가능합니다.',
        originDescription: 'Checks if the string is a hexadecimal number.',
    },
    isOctal: {
        code: 'V5029',
        message: '8진수가 아닙니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, 8진수만 입력 가능합니다.',
        originDescription: 'Checks if the string is a octal number.',
    },
    isMACAddress: {
        code: 'V5030',
        message: "'MAC 주소'가 아닙니다.",
        solutionMessage: '입력값이 문자열(string)타입이며, MAC 번호만 입력 가능합니다.',
        originDescription: 'Checks if the string is a MAC Address.',
    },
    isIP: {
        code: 'V5031',
        message: "'IP4' 또는 'IP6' 번호가 아닙니다.",
        solutionMessage: '입력값이 문자열(string)타입이며, 조건(4|6)에 맞는 IP타입만 입력 가능합니다.',
        originDescription: 'Checks if the string is an IP (version 4 or 6).',
    },
    isPort: {
        code: 'V5032',
        message: '포트번호가 유효하지 않습니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, 유효한 포트번호만 입력 가능합니다.',
        originDescription: 'Checks if the string is a valid port number.',
    },
    isISBN: {
        code: 'V5033',
        message: '국제 표준 도서 번호(ISBN)가 아닙니다.(10 또는 13 버전을 기준으로 합니다.)',
        solutionMessage: '입력값이 문자열(string)타입이며, 조건(10|13)에 맞는 ISBN번호만 입력 가능합니다.',
        originDescription: 'Checks if the string is an ISBN (version 10 or 13).',
    },
    isEAN: {
        code: 'V5034',
        message: '유럽 물품 번호(EAN)가 아닙니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, EAN번호만 입력 가능합니다.',
        originDescription: 'Checks if the string is an if the string is an EAN (European Article Number).',
    },
    isISIN: {
        code: 'V5035',
        message: '재고/보안 식별자(ISIN)가 아닙니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, ISIN만 입력 가능합니다.',
        originDescription: 'Checks if the string is an ISIN (stock/security identifier).',
    },
    isISO8601: {
        code: 'V5036',
        message: 'ISO 8601 날짜 형식이 아닙니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, ISO 8601 날짜 형식만 입력 가능합니다.',
        originDescription:
            'Checks if the string is a valid ISO 8601 date format. Use the option strict = true for additional checks for a valid date.',
    },
    isJSON: {
        code: 'V5037',
        message: '유효한 JSON 형태가 아닙니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, 유효한 JSON 형태만 입력 가능합니다.',
        originDescription: 'Checks if the string is valid JSON.',
    },
    isJWT: {
        code: 'V5038',
        message: '유효한 JWT 형태가 아닙니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, 유효한 JWT 형태만 입력 가능합니다.',
        originDescription: 'Checks if the string is valid JWT.',
    },
    isObject: {
        code: 'V5039',
        message: '객체 형태가 아닙니다.',
        solutionMessage:
            "입력값이 문자열(string)타입이며, 유효한 객체(Object) 형태만 입력 가능합니다. 또한 'null, function, array'가 들어간지 확인해 주세요.",
        originDescription: 'Checks if the object is valid Object (null, functions, arrays will return false).',
    },
    isNotEmptyObject: {
        code: 'V5040',
        message: '객체가 비어있습니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, 객체(Object)가 비어있으면 안됩니다.',
        originDescription: 'Checks if the object is not empty.',
    },
    isLowercase: {
        code: 'V5041',
        message: '소문자가 아닙니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, 소문자(a-z)만 입력 가능합니다.',
        originDescription: 'Checks if the string is lowercase.',
    },
    isLatLong: {
        code: 'V5042',
        message: '유효한 위도, 경도 좌표가 아닙니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, 유효한 위도(0-90), 경도(0-360)만 입력 가능합니다.',
        originDescription: 'Checks if the string is a valid latitude-longitude coordinate in the format lat, long.',
    },
    isLatitude: {
        code: 'V5043',
        message: '유효한 위도 좌표가 아닙니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, 유효한 위도(0-90)만 입력 가능합니다.',
        originDescription: 'Checks if the string or number is a valid latitude coordinate.',
    },
    isLongitude: {
        code: 'V5044',
        message: '유효한 경도 좌표가 아닙니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, 유효한 경도(0-360)만 입력 가능합니다.',
        originDescription: 'Checks if the string or number is a valid longitude coordinate.',
    },
    isMobilePhone: {
        code: 'V5045',
        message: '설정된 국가의 유효한 휴대폰 번호가 아닙니다..',
        solutionMessage:
            '입력값이 문자열(string)타입이며, 조건(locale)에 유효한 휴대폰 번호(number)만 입력 가능합니다.',
        originDescription: 'Checks if the string is a mobile phone number.',
    },
    isISO31661Alpha2: {
        code: 'V5046',
        message: 'ISO 3166-1 alpha-2 공식 할당 국가 코드가 아닙니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, ISO 3166-1 alpha-2 공식 할당 국가 코드만 입력 가능합니다.',
        originDescription: 'Checks if the string is a valid ISO 3166-1 alpha-2 officially assigned country code.',
    },
    isISO31661Alpha3: {
        code: 'V5047',
        message: 'ISO 3166-1 alpha-3 공식 할당 국가 코드가 아닙니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, ISO 3166-1 alpha-3 공식 할당 국가 코드만 입력 가능합니다.',
        originDescription: 'Checks if the string is a valid ISO 3166-1 alpha-3 officially assigned country code.',
    },
    isLocale: {
        code: 'V5048',
        message: 'locale(예:KR)타입이 아닙니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, locale 타입만 입력 가능합니다.',
        originDescription: 'Checks if the string is a locale.',
    },
    isPhoneNumber: {
        code: 'V5049',
        message: 'locale(예:KR)타입이 아닙니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, libphonenumber-js에 등록된 휴대폰 번호만 입력 가능합니다.',
        originDescription: 'Checks if the string is a valid phone numberusing libphonenumber-js.',
    },
    isMongoId: {
        code: 'V5050',
        message: 'MongoDB 아이디 형식이 아닙니다.',
        solutionMessage:
            '입력값이 문자열(string)타입이며, MongoDB ObjectId 형식(0-F)으로 인코딩된 표현만 입력 가능합니다.',
        originDescription: 'Checks if the string is a valid hex-encoded representation of a MongoDB ObjectId.',
    },
    isMultibyte: {
        code: 'V5051',
        message: '하나 이상의 멀티바이트가 포함되어야 합니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, 멀티바이트가 포함된 문자열만 입력 가능합니다.',
        originDescription: 'Checks if the string contains one or more multibyte chars.',
    },
    IsSurrogatePair: {
        code: 'V5052',
        message: 'Surrogate Pair 문자가 포함되어 있지 않습니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, 숫자(소수[Float, Decimal] + 정수[Int])만 입력 가능합니다.',
        originDescription: 'Checks if the string contains any surrogate pairs chars.',
    },
    IsUrl: {
        code: 'V5053',
        message: 'URL 형식이 아닙니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, URL형식만 입력 가능합니다.',
        originDescription: 'Checks if the string is an url.',
    },
    IsMagnetURI: {
        code: 'V5054',
        message: '마크넷 URL 형식이 아닙니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, 마그넷 URI 형식만 입력 가능합니다.',
        originDescription: 'Checks if the string is a magnet uri format.',
    },
    IsUUID: {
        code: 'V5055',
        message: 'UUID 형식이 아닙니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, 조건(3|4|5|all)에 맞는 UUID 형식만 입력 가능합니다.',
        originDescription: 'Checks if the string is a UUID (version 3, 4, 5 or all ).',
    },
    IsFirebasePushId: {
        code: 'V5056',
        message: 'Firebase 푸쉬 아이디가 아닙니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, Firebase 푸쉬 ID만 입력 가능합니다.',
        originDescription: 'Checks if the string is a Firebase Push ID',
    },
    IsUppercase: {
        code: 'V5057',
        message: '대문자가 아닙니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, 대문자(A-Z)만 입력 가능합니다.',
        originDescription: 'Checks if the string is uppercase.',
    },
    length: {
        code: 'V5058',
        message: '입력된 값이 설정된 길이 범위를 벗어났습니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, 조건(min, max) 범위에 맞는 값만 입력 가능합니다.',
        originDescription: "Checks if the string's length falls in a range.",
    },
    minLength: {
        code: 'V5059',
        message: '입력된 값이 설정된 길이보다 짧습니다.',
        solutionMessage:
            '입력값이 문자열(string)타입이며, 조건(min(number))보다 긴 길이(length)의 값만 입력 가능합니다.',
        originDescription: "Checks if the string's length is not less than given number.",
    },
    maxLength: {
        code: 'V5060',
        message: '입력된 값이 설정된 길이보다 짧습니다.',
        solutionMessage:
            '입력값이 문자열(string)타입이며, 조건(max(number))보다 짧은 길이(length)의 값만 입력 가능합니다.',
        originDescription: "Checks if the string's length is not more than given number.",
    },
    matches: {
        code: 'V5061',
        message: '입력값이 설정된 패턴과 다릅니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, 조건(정규식(RegExp))과 일치하는 값만 입력 가능합니다.',
        originDescription:
            "Checks if string matches the pattern. Either matches('foo', /foo/i) or matches('foo', 'foo', 'i').",
    },
    IsMilitaryTime: {
        code: 'V5062',
        message: '입력값의 형태는 HH:MM 형식이어야 합니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, HH:MM 형식의 string값만 입력 가능합니다.',
        originDescription: 'Checks if the string is a valid representation of military time in the format HH:MM.',
    },
    IsHash: {
        code: 'V5063',
        message:
            'Hash 형식이 아닙니다.(유형: md4, md5, sha1, sha256, sha384, sha512, ripemd128, ripemd160, tiger128, tiger160, tiger192, crc32, crc32b)',
        solutionMessage: '입력값이 문자열(string)타입이며, Hash 형식만 입력 가능합니다.',
        originDescription:
            'Checks if the string is a hash The following types are supported:md4, md5, sha1, sha256, sha384, sha512, ripemd128, ripemd160, tiger128, tiger160, tiger192, crc32, crc32b.',
    },
    IsMimeType: {
        code: 'V5064',
        message: '유효한 MIME 유형 형식과 일치하지 않습니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, MINE 유형 형식만 입력 가능합니다.',
        originDescription: 'Checks if the string matches to a valid MIME type format.',
    },
    IsSemVer: {
        code: 'V5065',
        message: 'Semantic Versioning Specification(SemVer)형식과 일치하지 않습니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, SemVer 형식만 입력 가능합니다.',
        originDescription: 'Checks if the string is a Semantic Versioning Specification (SemVer).',
    },
    IsISSN: {
        code: 'V5066',
        message: 'ISSN 형식이 아닙니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, ISSN 형식만 입력 가능합니다.',
        originDescription: 'Checks if the string is a ISSN.',
    },
    IsISRC: {
        code: 'V5067',
        message: 'ISRC 형식이 아닙니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, ISRC 형식만 입력 가능합니다.',
        originDescription: 'Checks if the string is a ISRC.',
    },
    IsRFC3339: {
        code: 'V5068',
        message: 'RFC 3339 날짜 형식이 아닙니다.',
        solutionMessage: '입력값이 문자열(string)타입이며, 유효한 RFC 3339 날짜 형식만 입력 가능합니다.',
        originDescription: 'Checks if the string is a valid RFC 3339 date.',
    },
    //===== 배열 유효성 검사 데코레이터(Array validation decorators) =====//
    arrayContains: {
        code: 'V6001',
        message: '입력한 값의 배열 중 설정된 값이 포함되지 않은 값이 포함되어있습니다.',
        solutionMessage:
            '입력값이 배열(map, set, array)타입이며, 조건(any[])과 일치하는 값이 모든 요소에 존재해야합니다..',
        originDescription: 'Checks if array contains all values from the given array of values.',
    },
    arrayNotContains: {
        code: 'V6002',
        message: '입력한 값의 배열 중 설정된 값이 포함된 값이 포함되어있습니다.',
        solutionMessage: '입력값이 배열(map, set, array)타입이며, 유효한 RFC 3339 날짜 형식만 입력 가능합니다.',
        originDescription: 'Checks if array does not contain any of the given values.',
    },
    arrayNotEmpty: {
        code: 'V6003',
        message: '배열이 비어있습니다.',
        solutionMessage: '입력값이 배열(map, set, array)타입이며, 배열이 비어있으면 안됩니다. (예: array: [])',
        originDescription: 'Checks if given array is not empty.',
    },
    arrayMinSize: {
        code: 'V6004',
        message: '배열의 길이가 설정된 길이보다 짧습니다.',
        solutionMessage: '입력값이 배열(map, set, array)타입이며, 배열의 길이가 조건(min(number))보다 길어야 합니다.',
        originDescription: "Checks if the array's length is greater than or equal to the specified number.",
    },
    arrayMaxSize: {
        code: 'V6005',
        message: '배열의 길이가 설정된 길이보다 깁니다.',
        solutionMessage: '입력값이 배열(map, set, array)타입이며, 배열의 길이가 조건(min(number))보다 짧아야 합니다.',
        originDescription: "Checks if the array's length is less or equal to the specified number.",
    },
    arrayUnique: {
        code: 'V6006',
        message: '배열 중 같은 내용의 요소가 감지되었습니다. 배열 내 모든 유소는 고유해야합니다.',
        solutionMessage: '입력값이 배열(map, set, array)타입이며, 배열의 모든 요소가 고유(Unique)해야 합니다.',
        originDescription:
            "Checks if all array's values are unique. Comparison for objects is reference-based. Optional function can be speciefied which return value will be used for the comparsion.",
    },
    //===== 객체 검증 데코레이터(Object validation decorators) =====//
    IsInstance: {
        code: 'V7001',
        message: '객체 타입이 아닙니다.',
        solutionMessage: '입력값이 객체(object)타입이어야 합니다.',
        originDescription: 'Checks if the property is an instance of the passed value.',
    },
    //===== 기타 데코레이터(Other decorators) =====//
    allow: {
        code: 'V8001',
        message: '관리자에게 문의하십시오.',
        solutionMessage: '이 부분은 저도 잘 모르겠습니다. -동민-',
        originDescription: 'Prevent stripping off the property when no other constraint is specified for it.',
    },
    //===== 새로 추가된 데코레이터(new decorators) [V9001]부터 시작 =====//
    /*
     * 에러코드 리스트에 등록되지 않은 에러를 추가해 주세요
     * error form
     * [에러 메시지 명(에러를 구분하는 key)]: {
     *      code: 현재 코드(V: Validate Error Prefix, 9xxx: 새롭게 추가되는 에러 코드 번호)
     *      message: User가 직접 메시지를 받아도 이해할 수 있는 메시지
     *      solutionMessage: 개발 도중 에러 발생시 개발자가 해결할 수 있는 방법을 제시하는 메시지
     *      originDescription: class-validator 문서에서 설명하는 데코레이터 원문, 미사용시 ''(emptyString)으로 처리
     * }
     *
     */
    whitelistValidation: {
        code: 'V9001',
        message: '관리자에게 문의하십시오.',
        solutionMessage:
            'class Validation이 정의되지 않은 부분이 존재합니다. 만약 whitelist를 종료하고 싶다면 main에 whitelist설정을 false로 변경해 주시기 바랍니다.',
        originDescription: '',
    },
    isEnum: {
        code: 'V9002',
        message: '관리자에게 문의하십시오.',
        solutionMessage: 'Enum 타입에 지정하지 않은 문자가 포함되어있습니다.',
        originDescription: '',
    },
};
