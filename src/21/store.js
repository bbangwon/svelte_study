import { writable } from "svelte/store";
import { initialBests } from "./bestData.js";
import { v4 as uuidv4 } from "uuid";

//커스텀 스토어
const setBestData = () => {
  const { subscribe, update } = writable(initialBests);

  const onToggle = (id) => {
    update((datas) => {
      const setDatas = datas.map((best) => {
        return best.id === id ? { ...best, like: !best.like } : best;
      });
      datas = setDatas;
      console.log(setDatas);
      return datas;
    });
  };

  const onRemove = (id) => {
    update((datas) => {
      const setDatas = datas.filter((best) => best.id !== id);
      datas = setDatas;
      return datas;
    });
  };

  const onSubmit = (bestTexts) => {
    if (bestTexts) {
      const best = {
        id: uuidv4(),
        name: bestTexts.name,
        price: bestTexts.price,
        descript: bestTexts.descript,
        image: bestTexts.image,
        like: false,
      };
      update((datas) => {
        const setDatas = [...datas, best];
        datas = setDatas;
        return datas;
      });
    }
  };

  return {
    subscribe,
    onToggle,
    onRemove,
    onSubmit,
  };
};

const setFormBest = () => {
  let formText = {
    name: "",
    price: "",
    image: "",
    descript: "",
  };

  const { subscribe, update, set } = writable(formText);

  const resetForm = () => {
    set(formText);
  };

  return {
    subscribe,
    set,
    resetForm,
  };
};

export const bestTexts = setFormBest();
export const bests = setBestData();
