import React, { useEffect } from "react";
import { useDashboard } from "@/context/Dashboard";
import { Box, Button, SimpleGrid } from "@chakra-ui/react";
import Card from "../Card/Card";
import SelectComponent from "../Select/Select";
import { Pagination } from "@mantine/core";
import Navbar from "../Navbar/Navbar";

const Dashboard = () => {

  const { findAll, DashboardList, currentItems, handleFilter, handlePage, totalPage } = useDashboard()

  useEffect(() => {
    findAll()
  }, [])

  const Partidos = [
    { partido: "Todos" },
    { partido: "PT" },
    { partido: "PSDB" },
    { partido: "PSOL" },
    { partido: "PL" },
  ]

  return (
    <>
      {/* <Navbar /> */}
      <Box p='10' bg="gray.100" w="100%" h="100%">
        <Box p='10' bg="white" w="100%" h="100%" borderRadius="md" boxShadow="md">
          <SelectComponent 
          onChange={handleFilter}
          options={
            Partidos.map((item: any) => item.partido)
          } />


          <SimpleGrid columns={[2, null, 3]} spacing={10}>
            {currentItems.map((item: any) => (
              <Card 
                key={item.id}
                name={item.deputado}
                username={item.partido}
                avatar={item.avatar}
                bio={item.estado}
                presence={item.presencas}
                justifiedAbsence={item.ausencias_justificadas}
                unexcusedAbsence={item.ausencias_nao_justificadas}
              />
            ))}
          </SimpleGrid>
          <Pagination  
            position="center"
            total={totalPage}
            onChange={handlePage}
            color="dark"
          />
        </Box>
      </Box>
    </>

  );
};

export default Dashboard;