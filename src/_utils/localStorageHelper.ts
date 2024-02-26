export function getIdFromLocalStorage(key: string): string | null {
  const storedDataString = localStorage.getItem(key);
  let id = null;

  if (storedDataString !== null) {
    const storedData = JSON.parse(storedDataString);
    id = storedData?.state?.userInfo?.id;
  }

  return id;
}
