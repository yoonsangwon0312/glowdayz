import { Query, Resolver } from '@nestjs/graphql';

@Resolver()
export class TestResolver {
    @Query((returns) => Boolean) // GraphQL을 위함 Boolean은 필수
    isPizzaGood(): boolean {
        // 타입스크립트를 위함 : Boolean은 옵션
        return true;
    }
}
