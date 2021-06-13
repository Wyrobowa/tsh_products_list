import { useLocation } from 'react-router-dom';

export const useQuery = param => new URLSearchParams(useLocation().search).get(param);
