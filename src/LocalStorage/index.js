import { isDefined } from "@nextml/lodestar";

export const STORAGE_KEY = "@nextml/lodestar-react";

const read = () => {
  try {
    const store = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (isDefined(store)) {
      return store;
    } else {
      return {};
    }
  } catch (error) {
    console.error(error);
  }
};

export const LocalStorage = {
  read,
};
