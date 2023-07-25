import { useState, useEffect } from "react";

//the fetch func represents the func from the service that does that logic
//id is id from use params
const useFetchData = (fetchFunc, id = null, page) => {
    //the state setup that all will use
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  //useeffect
  useEffect(() => {
    //create the func
    const fetchData = async () => {
      try {
        //call the service
        const data = await fetchFunc(id, page);
        setData(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    //invoke
    fetchData();
    //pass in the the functions for getall getone and id for dep arr
  }, [fetchFunc, id, page]);

  //return the states i will use
  return { data, loading, error };
};

export default useFetchData;
