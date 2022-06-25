import { gql } from "@apollo/client";
import { Lesson } from "./Lesson";

const GET_LESSON_QUERY = gql`
    query{
        lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
            id
            lessonType
            availableAt
            slug
            title
        }
    }
`;

export function Sidebar() {
    return (
        <aside className="w-[348px] bg-gray-700 p-6 border-l boder-gray-600">
            <span className="font-bold text-2xl pb-6  border-b border-gray-500 block ">
                Cronograma de aulas
            </span>

            <div className="flex flex-col gap-8 ">
                <Lesson
                    title="Aula 1"
                    slug="aula-1"
                    type="class"
                    availableAt={new Date()}
                />
            </div>
        </aside>
    );
}
