import * as React from "react";
import products from "../../utils/products/products.json";
import styles from "../../styles/Home.module.css";
import Paper from "@mui/material/Paper";
import { GridExporter } from "@devexpress/dx-react-grid-export";
import {
  Grid,
  VirtualTable,
  TableHeaderRow,
  Toolbar,
  ExportPanel,
} from "@devexpress/dx-react-grid-material-ui";
import saveAs from "file-saver";
import { orders } from "../../utils/demo-data/orders";
import { useRouter } from "next/router";

const onSave = (workbook: { xlsx: { writeBuffer: () => Promise<any> } }) => {
  workbook.xlsx.writeBuffer().then((buffer) => {
    saveAs(
      new Blob([buffer], { type: "application/octet-stream" }),
      "DataGrid.xlsx"
    );
  });
};

const columns = [
  { name: "Employee", title: "Employee" },
  { name: "OrderNumber", title: "Invoice Number" },
  { name: "CustomerStoreCity", title: "City" },
  { name: "SaleAmount", title: "Sale Amount" },
];

const Home = () => {
  const router = useRouter();
  const exporterRef = React.useRef(null);

  const startExport = React.useCallback(() => {
    exporterRef.current.exportGrid();
  }, [exporterRef]);

  return (
    <Paper>
      <Grid rows={orders} columns={columns}>
        <VirtualTable />
        <TableHeaderRow />
        <Toolbar />
        <ExportPanel startExport={startExport} />
      </Grid>
      <GridExporter
        ref={exporterRef}
        rows={orders}
        columns={columns}
        onSave={onSave}
      />
    </Paper>
  );
};

export default Home;
