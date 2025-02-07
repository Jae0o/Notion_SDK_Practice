import { PropsWithChildren } from "react";

import * as S from "./ContentLayout.styles";

const ContentLayout = ({ children }: PropsWithChildren) => {
  return <S.ContentLayout>{children}</S.ContentLayout>;
};

export default ContentLayout;
