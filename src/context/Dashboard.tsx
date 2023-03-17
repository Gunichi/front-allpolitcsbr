import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { useRouter } from "next/router";
import { useToast } from "@chakra-ui/react";
import { api } from "../services/api/api";

type DashboardProviderProps = {
  children: ReactNode;
};

type ContextTypes = {
  loading: boolean;
  setLoading: (loading: boolean) => void;
  DashboardList: Array<any>;
  findAll: () => void;
  handleFilter: (partido: string) => void;
  DashboardData: any;
  DashboardDataInfo: Array<any>;
  handlePage : (page: number) => void;
  currentPage: number;
  itemsPerPage: number;
  currentItems: Array<any>;
  totalPage: number;
}

const DashboardContext = createContext({} as ContextTypes);

export function DashboardProvider({ children }: DashboardProviderProps) {
  const toast = useToast();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [DashboardList, setDashboardList] = useState([]);
  const [DashboardData, setDashboardData] = useState({});
  const [DashboardDataInfo, setDashboardDataInfo] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  const totalPage = Math.ceil(DashboardList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = DashboardList.slice(startIndex, endIndex);
  
  const findAll = async () => {
    setLoading(true);
    try {
      const response = await api.get("/presenca");
      const data = response.data.sort((a: any, b: any) => {
        if (a.deputado < b.deputado) {
          return -1;
        }
        if (a.deputado > b.deputado) {
          return 1;
        }
        return 0;
      });
      setDashboardDataInfo(data);
      setDashboardList(data);
    } catch (error) {
      toast({
        title: "Erro ao buscar dados",
        description: "Ocorreu um erro ao buscar os dados",
        status: "error",
        duration: 9000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  }

  const handlePage = (page: number) => {
    setCurrentPage(page)
  }

  const handleFilter = (partido: string) => {
    console.log(partido);
    if (partido === "Todos") {
      setDashboardList(DashboardDataInfo);
      findAll();
    } else {
      const filtered = DashboardDataInfo.filter(
        (item: any) => item.partido === partido
      );
      setDashboardList(filtered);
    }
  };

  return (
    <DashboardContext.Provider
      value={{
        loading,
        setLoading,
        DashboardList,
        handleFilter,
        findAll,
        DashboardData,
        DashboardDataInfo,
        handlePage,
        currentPage,
        itemsPerPage,
        currentItems,
        totalPage
      }}
    >
      {children}
    </DashboardContext.Provider>
  );
}

export const useDashboard = () => {
  return useContext(DashboardContext);
};


