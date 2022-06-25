import { useGetLessonsQuery } from "../graphql/generated";
import { Lesson } from "./Lesson";

export function Sidebar() {
    const { data } = useGetLessonsQuery();

    console.log(data);
    console.log(data);
    console.log(data);
    console.log(data);

    return (
        <aside className="w-[348px] bg-gray-700 p-6 border-l boder-gray-600">
            <span className="font-bold text-2xl pb-6  border-b border-gray-500 block ">
                Cronograma de aulas
            </span>

            <div className="flex flex-col gap-8 ">
                {data?.lessons.map((lesson) => {
                    return (
                        <Lesson
                            key={lesson.id}
                            title={lesson.title}
                            slug={lesson.slug}
                            type={lesson.lessonType}
                            availableAt={new Date(lesson.availableAt)}
                        />
                    );
                })}
            </div>
        </aside>
    );
}
