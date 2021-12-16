import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { Categories, customCategoryState } from "../atoms";

interface IForm {
  category: string;
}

const CreateCategory = () => {
  const { register, handleSubmit, setValue, setError, formState } =
    useForm<IForm>();
  const [customCategories, setCustomCategories] =
    useRecoilState(customCategoryState);

  function onSubmit({ category }: IForm) {
    if (customCategories.includes(category) || category in Categories) {
      setError("category", { message: "already exist" }, { shouldFocus: true });
    } else {
      setCustomCategories((prev) => [...prev, category]);
    }
    setValue("category", "");
  }

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("category", { required: "Required" })} />
        <button>Create New Category</button>
        <span>{formState.errors?.category?.message}</span>
      </form>
    </div>
  );
};

export default CreateCategory;
