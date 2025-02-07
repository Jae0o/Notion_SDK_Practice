export type PropertyType = "title" | "text" | "select";

interface Property {
  name: string;
  type: PropertyType;
}

export const PROPERTIES: Property[] = [
  /**
   * Notion 표 에서 추가하고 싶은 속성을 아래의 형태로 추가하기
   *
   * - name = 속성의 이름 ( Notion 에서 작성한 이름과 반드시 동일하게 )
   * - type = 속성의 타입
   *
   *    - title = 제목
   *    - text = 텍스트
   *    - select = 선택
   *
   */
  { name: "이름", type: "title" },
  { name: "내용", type: "select" },
];
