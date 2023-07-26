import { useState, useEffect } from 'react';
import { useQuery } from '@apollo/client';

const useGraphQLQuery = (query, variables, id) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const { data: queryData, loading: queryLoading, error: queryError } = useQuery(query, {
        variables: variables, id
      });
    
      useEffect(() => {
        if (queryLoading) {
          setLoading(true);
        } else {
          setLoading(false);
        }
    
        if (queryError) {
          setError(queryError);
        } else {
          setError(null);
        }
    
        if (queryData) {
          setData(queryData);
        }
      }, [queryData, queryLoading, queryError]);
    
      return { data, loading, error };
};

export default useGraphQLQuery;

