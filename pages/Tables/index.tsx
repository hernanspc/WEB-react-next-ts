import * as React from "react";
import products from "../../utils/products/products.json";
import styles from "../../styles/Home.module.css";
import Paper from "@mui/material/Paper";
import {
  Grid,
  Table,
  TableHeaderRow,
} from "@devexpress/dx-react-grid-material-ui";
import { useRouter } from "next/router";

const columns = [
  { name: "id", title: "ID" },
  { name: "product", title: "Product" },
  { name: "owner", title: "Owner" },
];
const rows = [
  { id: 0, product: "DevExtreme", owner: "DevExpress" },
  { id: 1, product: "DevExtreme Reactive", owner: "DevExpress" },
];

const Tables = () => {
  const router = useRouter();
  return (
    <>
      <h1 className={styles.title}>Home</h1>
      <Paper>
        <Grid rows={rows} columns={columns}>
          <Table />
          <TableHeaderRow />
        </Grid>
      </Paper>
    </>
  );
};

export default Tables;
