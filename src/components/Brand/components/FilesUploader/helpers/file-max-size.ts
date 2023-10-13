import { DEFAULT_MAX_SIZE_IN_BYTES } from "./constants";
import type { GetValidator } from "./validate";


const maxFileSize: GetValidator<number, File> = (
  maxSizeInBytes = DEFAULT_MAX_SIZE_IN_BYTES
) => {
  if (maxSizeInBytes <= 0) {
    throw new Error(
      `Валидатор maxFileSize ожидает положительное ограничение размера файла, получил ${maxSizeInBytes}`
    );
  }

  return async (file) =>
    file.size <= maxSizeInBytes
      ? null
      : `Файл должен быть до ${(maxSizeInBytes / 1048576).toFixed(1)} мб`;
};

export { DEFAULT_MAX_SIZE_IN_BYTES };
export default maxFileSize;
