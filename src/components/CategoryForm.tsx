import { useForm } from "react-hook-form";
import { useRecoilState } from "recoil";
import { CategoriesState } from "../atoms";

interface IForm {
  category: string;
}

const CategoryForm = () => {
  const { register, handleSubmit, setValue, setError, formState } =
    useForm<IForm>();
  const [categories, setCategories] = useRecoilState(CategoriesState);

  function onSubmit({ category }: IForm) {
    if (categories.includes(category)) {
      setError("category", { message: "already exist" }, { shouldFocus: true });
    } else {
      setCategories((prev) => [...prev, category]);
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

export default CategoryForm;
