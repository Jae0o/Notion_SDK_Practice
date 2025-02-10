import { useForm } from "react-hook-form";
import { PROPERTIES } from "../../../../../Practice";
import { useMemo } from "react";

export type FormValues = {
  [P in (typeof PROPERTIES)[number] as P["name"]]: string;
};

const useEditForm = () => {
  const defaultValues: FormValues = useMemo(() => {
    const values = {} as FormValues;

    PROPERTIES.forEach(property => {
      values[property.name] = "";
    });

    return values;
  }, []);

  const { register, handleSubmit, formState } = useForm<FormValues>({
    defaultValues,
  });

  return {
    handleSubmit,
    register,
    errors: formState.errors,
  };
};

export default useEditForm;
