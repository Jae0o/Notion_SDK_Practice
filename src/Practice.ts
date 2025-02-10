import { Notion } from "./lib/api";
import { FormValues } from "./lib/container/Editor/hooks/useEditForm/useEditForm";
import { notionForm } from "./lib/utils";

const { VITE_NOTION_PAGE_ID } = import.meta.env;

/* -------------------------- 1. 속성 정의 ------------------------- */

export const PROPERTIES = [
  /**
   * Notion 표 에서 추가하고 싶은 속성을 아래의 형태로 추가하기
   *
   * - name = 속성의 이름 ( Notion 에서 작성한 이름과 반드시 동일하게 )
   * - type = 속성의 타입
   *
   *    - title = 제목 ( Notion Page 에서 제목으로 표시되는 속성 반드시 하나 지정 )
   *    - text = 텍스트
   *    - select = 선택
   *
   */
  { name: "이름", type: "title" },
  { name: "내용", type: "text" },
  { name: "상태", type: "select" },
] as const;

/* -------------------------- 2. API Method 정의 ------------------------- */

const { createTitle } = notionForm;

export const createNotionPage = async (param: FormValues) => {
  console.log(VITE_NOTION_PAGE_ID);
  // const res = await Notion.pages.create({
  //   // Notion 에서 Page가 생성되기 위한 정보를 전달
  //   parent: {
  //     database_id: VITE_NOTION_PAGE_ID,
  //     type: "database_id",
  //   },

  //   /**
  //    * 해당 Notion Page가 표에 추가되기 위한 속성들의 값을 전달
  //    *
  //    * !! 주의 !!
  //    *
  //    * - 반드시 존재하는 속성을 전달해야함 ( 없는 속성 전달시 Error )
  //    *
  //    * - 필요한 속성만 전달할 수 있음 ( 전달 하지 않은 속성은 빈칸으로 생성 )
  //    *
  //    */
  //   properties: {
  //     이름: createTitle(param.이름),
  //   },
  // });

  try {
    const response = await Notion.page.create({
      parent: {
        database_id: VITE_NOTION_PAGE_ID,
        type: "database_id",
      },
      properties: {
        이름: createTitle(param.이름),
        /**
         *
         *  필요한 다른 속성들 추가
         *
         */
      },
    });

    const data = await response.json();
    console.log("페이지 생성 성공:", data);
  } catch (error) {
    console.error("페이지 생성 실패:", error);
  }
};
