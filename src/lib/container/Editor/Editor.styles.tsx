import styled from "styled-components";

export const EditorLayout = styled.form`
  width: 100%;
  height: 100%;
  padding: 2rem;

  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

export const EditorInputContainer = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.8rem;
`;

export const EditorInputTitleBox = styled.span`
  width: 100%;

  display: flex;
  align-items: flex-end;
  gap: 1rem;
`;

export const EditorInputTitle = styled.h5`
  font-size: 1.6rem;
  font-weight: 700;
`;

export const EditorInputType = styled.p`
  font-size: 1.2rem;
  font-weight: 600;
`;

export const EditorInput = styled.input`
  width: 100%;
  padding: 0.6rem 0.8rem;

  border: 1px solid ${({ theme }) => theme.colors.gray};
  border-radius: 0.4rem;

  font-size: 1.2rem;

  &:focus {
    outline: none;
    border: 2px solid ${({ theme }) => theme.colors.point};
  }
`;

export const EditorError = styled.small`
  width: 100%;
  padding: 0rem 0.8rem;

  color: red;
`;

export const EditorButtonContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: flex-end;
`;

export const EditorButton = styled.button`
  padding: 0.8rem 1.4rem;

  border: none;
  background-color: ${({ theme }) => theme.colors.point};
  border-radius: 0.4rem;
  box-shadow: 0rem 0rem 0.2rem 0.2rem rgba(0, 0, 0, 0.1);

  font-size: 1.4rem;
  font-weight: 500;
`;
