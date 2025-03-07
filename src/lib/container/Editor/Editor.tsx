import { SubmitHandler } from "react-hook-form";
import { createNotionPage, PROPERTIES } from "../../../Practice";
import { ContentLayout } from "../../components";

import * as S from "./Editor.styles";
import { useEditForm } from "./hooks";
import { FormValues } from "./hooks/useEditForm/useEditForm";

const Editor = () => {
  const { handleSubmit, register, errors } = useEditForm();

  const onSubmit: SubmitHandler<FormValues> = data => {
    createNotionPage(data);
  };

  return (
    <ContentLayout>
      <S.EditorLayout onSubmit={handleSubmit(onSubmit)}>
        {PROPERTIES.map(({ name, type }) => (
          <S.EditorInputContainer key={name}>
            <S.EditorInputTitleBox>
              <S.EditorInputTitle>{name}</S.EditorInputTitle>
              <S.EditorInputType>{`( ${type.toUpperCase()} )`}</S.EditorInputType>
            </S.EditorInputTitleBox>
            <S.EditorInput
              {...register(name, { required: `${type}을 입력해주세요.` })}
              placeholder={name}
            />
            <S.EditorError>{errors[name]?.message ?? ""}</S.EditorError>
          </S.EditorInputContainer>
        ))}

        <S.EditorButtonContainer>
          <S.EditorButton type="submit">Submit</S.EditorButton>
        </S.EditorButtonContainer>
      </S.EditorLayout>
    </ContentLayout>
  );
};

export default Editor;
