import { useEffect, useState } from "react";
import tvmaze from "../api/tvmaze";
import { Result } from "../types";

export default () => {
  const [results, setResults] = useState<Result[]>([]);

  const searchApi = async (term: string) => {
    try {
      const response = await tvmaze.get<Result[]>(term);
      setResults(response.data);
    } catch (error: any) {
      console.log(error);
    }
  };
  useEffect(() => {
    searchApi("gym");
  }, []);

  return [searchApi, results] as const;
};
