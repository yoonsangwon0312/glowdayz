export const prismaErrorCode = {
    //===== 공통 =====/
    P1000: {
        code: 'P1000',
        message: '데이터베이스 서버에 대한 인증에 실패했습니다. {database_host}를 확인하십시오.',
    },
    P1001: {
        code: 'P1001',
        message: '데이터베이스 서버에 연결할 수 없습니다. {database_host}:{database_port}를 확인하십시오.',
    },
    P1002: {
        code: 'P1002',
        message:
            '데이터베이스 서버에 연결시간이 초과되었습니다. 데이터베이스 서버가 실행되어있는지 확인 후 다시 시도하십시오.',
    },
    P1003: {
        code: 'P1003',
        message: `{database_file_name} 데이터베이스가 {database_file_path}에 존재하지 않습니다.
            \r{database_name}의 데이터베이스가 {database_host}:{database_port}서버에 없습니다.
            \r{database_name}.{database_schema_name}의 데이터베이스가 {database_host}:{database_port}서버에 없습니다`,
    },
    P1008: {
        code: 'P1008',
        message: '{time}이후 작업 시간이 초과되었습니다',
    },
    P1009: {
        code: 'P1009',
        message: '데이터베이스 {database_name}가 {database_host}:{database_port}서버에 이미 있습니다.',
    },
    P1010: {
        code: 'P1010',
        message: '사용자 {database_user}가 데이터베이스에 대한 액세스를 거부했습니다. {database_name}',
    },
    P1011: {
        code: 'P1011',
        message: 'TLS 연결 열기 오류: {message}',
    },
    P1012: {
        code: 'P1012',
        message: `{full_error}
            \r가능한 오류: 
            \r● 인수 {}가 누락되었습니다.
            \r● 함수 {}가 인수를 취하지만 {}을 받았습니다.
            \r● 속성에 {} 인수가 없습니다 @{}.
            \r● 데이터 소스 블록에 {} 인수가 없습니다 {}.
            \r● 제너레이터 블록에 {} 인수가 없습니다 {}.
            \r● 속성 구문 분석 오류 @{}: {}
            \r● 속성 @{}이 두 번 정의되었습니다.
            \r● {}이 이름을 가진 다른 모델이 존재하기 때문에 데이터베이스 이름을 가진 모델을 정의할 수 없습니다: {}
            \r● {}은(는) 예약된 스칼라 유형 이름이며 사용할 수 없습니다.
            \r● {}해당 이름의 {}가 이미 존재하기 때문에 {}을(를) 정의할 수 없습니다.
            \r● 키 {}가 이미 {}에 정의되어 있습니다.
            \r● 인수 {}가 이미 명명되지 않은 인수로 지정되었습니다.
            \r● 인수 {}가 이미 지정되었습니다.
            \r● 그런 주장은 없습니다.
            \r● 필드 {}는 이미 모델에 정의되어 있습니다 {}.
            \r● {}모델의 필드 {}는 목록이 될 수 없습니다. 현재 커넥터는 기본 유형 목록을 지원하지 않습니다.
            \r● 인덱스 이름 {}은 여러 번 선언되었습니다. 현재 커넥터에서 인덱스 이름은 전역적으로 고유해야 합니다.
            \r● 값 {}은 이미 enum에 정의되어 {}있습니다.
            \r● 알 수 없는 속성: @{}.
            \r● 알 수 없는 기능: {}.
            \r● 알 수 없는 데이터 소스 공급자: {}.
            \r● shadowDatabaseUrl은 데이터 소스의 url과 동일 {}합니다. 다른 데이터베이스를 섀도우 데이터베이스로 지정하십시오.
            \r● 미리보기 기능 {}을 알 수 없습니다. 다음 중 하나가 예상됨: {}
            \r● {}은(는) {}에 유효한 값이 아닙니다.
            \r● 유형 {}이 기본 제공 유형 이 아니며 다른 모델, 사용자 정의 유형 또는 열거형을 참조하지 않습니다.
            \r● 유형 {}은 기본 제공 유형 이 아닙니다.
            \r● 예기치 않은 토큰입니다. 다음 중 하나가 필요합니다: {}
            \r● 환경 변수를 찾을 수 없음: {}.
            \r● {} 값을 예상했지만 {} 값을 받았습니다 {}.
            \r● {} 값을 예상했지만 구문 분석하는 동안 실패했습니다 {}: {}.
            \r● 모델 유효성 검사 오류 {}: {}
            \r● {}모델의 필드 유효성 검사 오류 {}: {}
            \r● 데이터 소스 유효성 검사 오류 {datasource}: {message}"
            \r● 열거형 유효성 검사 오류 {}: {}
            \r● 검증 오류: {}`,
    },
    P1013: {
        code: 'P1013',
        message: '제공된 데이터베이스 문자열이 잘못되었습니다. {details}',
    },
    P1014: {
        code: 'P1014',
        message: '모델의 기본 {종류} {model}가 존재하지 않습니다.',
    },
    P1015: {
        code: 'P1015',
        message: `Prisma 스키마는 데이터베이스 버전에 대해 지원되지 않는 기능을 사용하고 있습니다.
        \r데이터베이스 버전: {database_version}
        \r오류: {errors}`,
    },
    P1016: {
        code: 'P1016',
        message: '원시 쿼리에 잘못된 수의 매개변수가 있습니다. 예상: {expected}, 실제: {actual}.',
    },
    P1017: {
        code: 'P1017',
        message: '서버가 연결을 닫았습니다.',
    },
    //===== Prisma Client (Query Engine) =====/
    P2000: {
        code: 'P2000',
        message: '열(column)에 제공된 값이 열 유형에 비해 너무 깁니다. 열: {column_name}',
    },
    P2001: {
        code: 'P2001',
        message:
            'where 조건( {model_name}.{argument_name} = {argument_value})이 존재하지 않는 곳에서 검색된 레코드입니다.',
    },
    P2002: {
        code: 'P2002',
        message: '{constraint}에 대한 고유 제약 조건이 실패했습니다.',
    },
    P2003: {
        code: 'P2003',
        message: '필드(Field)에서 외래 키(ForeignKeys) 제약 조건이 실패했습니다: {field_name}',
    },
    P2004: {
        code: 'P2004',
        message: '데이터베이스에서 제약 조건이 실패했습니다: {database_error}',
    },
    P2005: {
        code: 'P2005',
        message: '{field_value}필드에 대해 데이터베이스에 저장된 값 {field_name}이 필드 유형에 유효하지 않습니다',
    },
    P2006: {
        code: 'P2006',
        message: '제공된 값 {field_value}에 대한 {model_name}필드는 {field_name}이 유효하지 않습니다.',
    },
    P2007: {
        code: 'P2007',
        message: '데이터 유효성 검사 오류 {database_error}',
    },
    P2008: {
        code: 'P2008',
        message: '{query_parsing_error}에서 쿼리를 구문 분석하지 못했습니다. {query_position}',
    },
    P2009: {
        code: 'P2009',
        message: '쿼리 유효성 검사 실패: {query_validation_error} at {query_position}',
    },
    P2010: {
        code: 'P2010',
        message: '원시(Raw) 쿼리가 실패했습니다. 코드: {code}. 메시지: {message}',
    },
    P2011: {
        code: 'P2011',
        message: '{constraint}에 대한 Null 제약 조건 위반',
    },
    P2012: {
        code: 'P2012',
        message: '에서 필수 값이 누락되었습니다. {path}',
    },
    P2013: {
        code: 'P2013',
        message: '{argument_name}필드 {field_name}에 대한 필수 인수가 누락되었습니다. {object_name}',
    },
    P2014: {
        code: 'P2014',
        message:
            '변경하려는 {model_a_name}와 {model_b_name}모델 간의 필수 관계(Required Relation) {relation_name}을(를) 위반합니다.',
    },
    P2015: {
        code: 'P2015',
        message: '관련 레코드를 찾을 수 없습니다. {details}',
    },
    P2016: {
        code: 'P2016',
        message: '쿼리 해석 오류입니다. {details}',
    },
    P2017: {
        code: 'P2017',
        message:
            '{parent_name}과 {child_name}모델 간의 관계(Relation)에 대한 기록이 연결되어 있지 않습니다. {relation_name}',
    },
    P2018: {
        code: 'P2018',
        message: '필요한 연결된 레코드를 찾을 수 없습니다. {details}',
    },
    P2019: {
        code: 'P2019',
        message: '입력 오류입니다. {details}',
    },
    P2020: {
        code: 'P2020',
        message: '유형에 대한 값이 범위를 벗어났습니다. {details}',
    },
    P2021: {
        code: 'P2021',
        message: '{table}현재 데이터베이스에 테이블 이 없습니다.',
    },
    P2022: {
        code: 'P2022',
        message: '{column}현재 데이터베이스에 열 이 없습니다.',
    },
    P2023: {
        code: 'P2023',
        message: '일관되지 않는 열 데이터: {message}',
    },
    P2024: {
        code: 'P2024',
        message: `연결 풀에서 새 연결을 가져오는 동안 시간이 초과되었습니다.
        \r(추가 정보: http://pris.ly/d/connection-pool , 현재 연결 제한: {connection_limit})`,
    },
    P2025: {
        code: 'P2025',
        message:
            '필요하지만 하나 이상의 레코드를 찾을 수 없기 때문에 작업이 실패했습니다.(관계된(relation) 데이터의 레코드를 찾을 수 없습니다.) {cause}',
    },
    P2026: {
        code: 'P2026',
        message: '현재 데이터베이스 공급자는 쿼리에 사용된 기능을 지원하지 않습니다: {feature}',
    },
    P2027: {
        code: 'P2027',
        message: '쿼리 실행 중 데이터베이스에서 여러 오류가 발생했습니다: {errors}',
    },
    //===== Prisma Migrate (Migration Engine) =====//
    P3000: {
        code: 'P3000',
        message: '데이터베이스 생성 실패: {database_error}',
    },
    P3001: {
        code: 'P3001',
        message: '파괴적인 변경 및 데이터 손실 가능성이 있는 마이그레이션 가능: {migration_engine_destructive_details}',
    },
    P3002: {
        code: 'P3002',
        message: '시도한 마이그레이션이 롤백되었습니다: {database_error}',
    },
    P3003: {
        code: 'P3003',
        message: `마이그레이션 형식이 변경되어 저장된 마이그레이션이 더 이상 유효하지 않습니다.
            \r이 문제를 해결하려면 다음 단계를 따르십시오: https://pris.ly/d/migrate`,
    },
    P3004: {
        code: 'P3004',
        message: `{database_name}데이터베이스는 시스템 데이터베이스이므로 프리즈마 마이그레이션으로 변경하면 안 됩니다.
            \r다른 데이터베이스에 연결하십시오.`,
    },
    P3005: {
        code: 'P3005',
        message: `{database_name}에 대한 데이터베이스 스키마가 비어 있지 않습니다.
            \r기존 프로덕션 데이터베이스의 기준을 설정하는 방법에 대해 자세히 알아보기: https://pris.ly/d/migrate-baseline`,
    },
    P3006: {
        code: 'P3006',
        message: `마이그레이션을 {migration_name}섀도우 데이터베이스에 완전히 적용하지 못했습니다.
            \r{error_code}오류: {inner_error}`,
    },
    P3007: {
        code: 'P3007',
        message: `요청한 미리보기 기능 중 일부는 아직 마이그레이션 엔진에서 허용되지 않습니다.
            \r마이그레이션을 사용하기 전에 데이터 모델에서 제거하십시오. (차단: {list_of_blocked_features})`,
    },
    P3008: {
        code: 'P3008',
        message: '마이그레이션 {migration_name}은 데이터베이스에 적용된 대로 이미 기록되었습니다.',
    },
    P3009: {
        code: 'P3009',
        message: `마이그레이션이 대상 데이터베이스에서 실패한 마이그레이션을 찾았습니다.
            \r새 마이그레이션이 적용되지 않습니다.
            \r프로덕션 데이터베이스에서 마이그레이션 문제를 해결하는 방법에 대해 자세히 알아보기: https://pris.ly/d/migrate-resolve
            \r{details}`,
    },
    P3010: {
        code: 'P3010',
        message: '마이그레이션 이름이 너무 깁니다. 200자(바이트)를 넘지 않아야 합니다.',
    },
    P3011: {
        code: 'P3011',
        message: `마이그레이션 {migration_name}은 데이터베이스에 적용되지 않았기 때문에 롤백할 수 없습니다.
            \r힌트: 전체 마이그레이션 이름을 전달했습니까?
            \r(예: "20201207184859_initial_migration")`,
    },
    P3012: {
        code: 'P3012',
        message: '마이그레이션 {migration_name}은 실패한 상태가 아니므로 롤백할 수 없습니다.',
    },
    P3013: {
        code: 'P3013',
        message: `데이터 소스 공급자 배열은 마이그레이션에서 더 이상 지원되지 않습니다.
            \r단일 공급자를 사용하도록 데이터 소스를 변경하십시오.
            \rhttps://pris.ly/multi-provider-deprecation 에서 자세히 읽어보세요.`,
    },
    P3014: {
        code: 'P3014',
        message: `Prisma Migrate가 섀도우 데이터베이스를 생성할 수 없습니다.
            \r데이터베이스 사용자에게 데이터베이스 생성 권한이 있는지 확인하십시오.
            \r추가 정보: https://pris.ly/d/migrate-shadow
            \r원본 오류: {error_code}
            \r{inner_error}`,
    },
    P3015: {
        code: 'P3015',
        message: `{migration_file_path}에서 마이그레이션 파일을 찾을 수 없습니다.
            \r디렉터리를 삭제하거나 마이그레이션 파일을 복원하십시오.`,
    },
    P3016: {
        code: 'P3016',
        message: `데이터베이스 재설정을 위한 대체 방법이 실패했습니다.
            \r이는 마이그레이션이 데이터베이스를 완전히 정리할 수 없음을 의미합니다.
            \r원래 오류: {error_code}
            \r{inner_error}`,
    },
    P3017: {
        code: 'P3017',
        message: `{migration_name} 마이그레이션을 찾을 수 없습니다.
            \r마이그레이션이 존재하는지, 전체 디렉토리 이름을 포함했는지 확인하십시오.
            \r(예: "20201207184859_initial_migration")`,
    },
    P3018: {
        code: 'P3018',
        message: `마이그레이션을 적용하지 못했습니다.
            \r오류가 복구되기 전에는 새 마이그레이션을 적용할 수 없습니다.
            \r프로덕션 데이터베이스에서 마이그레이션 문제를 해결하는 방법에 대해 자세히 알아보기: https://pris.ly/d/migrate-resolve
            \r마이그레이션 이름: {migration_name}
            \r데이터베이스 오류 코드: {database_error_code}
            \r데이터베이스 오류: {database_error}`,
    },
    P3019: {
        code: 'P3019',
        message: `{provider}스키마에 지정된 데이터 소스 공급자가 migration_lock.toml, {expected_provider}에 지정된 공급자 와 일치하지 않습니다.
            \r현재 마이그레이션 디렉터리를 제거하고 prisma migrate dev로 새 마이그레이션 기록을 시작하십시오.
            \r자세히 읽기: https://pris.ly/d/migrate-provider-switch`,
    },
    P3020: {
        code: 'P3020',
        message: `Azure SQL에서 섀도우 데이터베이스 자동 생성이 비활성화되어 있습니다.
            \rshadowDatabaseUrl데이터 소스 특성을 사용하여 섀도우 데이터베이스를 설정하십시오.`,
    },
    //===== Prisma DB Pull (Introspection Engine) =====//
    P4000: {
        code: 'P4000',
        message: '자체 검사 작업이 스키마 파일을 생성하지 못했습니다: {introspection_error}',
    },
    P4001: {
        code: 'P4001',
        message: '검사된 데이터베이스가 비어 있습니다: {connection_string}',
    },
    P4002: {
        code: 'P4002',
        message: '검사된 데이터베이스의 스키마가 일치하지 않습니다: {explanation}',
    },
};
