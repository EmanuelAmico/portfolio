"use client";
import { useCallback, useState, useEffect } from "react";

type SetState<T> = React.Dispatch<React.SetStateAction<T>>;
type StorageHook<T> = [T | undefined, SetState<T | undefined>, () => void];
type DefaultValue<T> = T | (() => T);

export function useLocalStorage<T>(
  key: string,
  defaultValue: DefaultValue<T>,
): StorageHook<T> {
  const [value, setValue] = useState<T | undefined>(() => {
    if (typeof window === "undefined") return defaultValue;

    const jsonValue = localStorage?.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof defaultValue === "function") {
      return (defaultValue as () => T)();
    } else {
      return defaultValue;
    }
  });

  useEffect(() => {
    if (value === undefined) return localStorage?.removeItem(key);
    localStorage?.setItem(key, JSON.stringify(value));
  }, [key, value]);

  const remove = useCallback(() => {
    setValue(undefined);
  }, []);

  return [value, setValue, remove];
}
