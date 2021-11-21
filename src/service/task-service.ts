import {BASE_URL} from "../constants/api";
import {TaskModel} from "../model/task-model";

interface ResponseTask {
  data: {
    items: TaskModel[];
  };
}
export function fetchDataTitle(): Promise<ResponseTask> {
  const queryURL = `${BASE_URL}randomFeed?website=casino&lang=eu&device=desktop&source=list`;
  const urlApiList1 = `${queryURL}1`;
  const urlApiList2 = `${queryURL}2`;
  const urlApiList3 = `${queryURL}3`;

  const fetchList1 = fetch(urlApiList1)
    .then((res) => res.json())
    .catch((err) => console.error(urlApiList1, err));

  const fetchList2 = fetch(urlApiList2)
    .then((res) => res.json())
    .catch((err) => console.error(urlApiList2, err));

  const fetchList3 = fetch(urlApiList3)
    .then((res) => res.json())
    .catch((err) => console.error(urlApiList3, err));

  return Promise.all([fetchList1, fetchList2, fetchList3]).then(
    ([res1, res2, res3]) => {
      const result1 = res1?.data?.items;
      const result2 = res2?.data?.items;
      const result3 = res3?.data?.items;
      return {
        data: {
          items: [...result1, ...result2, ...result3],
        },
      };
    }
  );
}
